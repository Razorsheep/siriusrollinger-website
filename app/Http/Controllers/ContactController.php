<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Mail\ContactFormNotification;
use App\Services\SeoService;
use App\Settings\WebsiteSettings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {
        return Inertia::render('contact', [
            'settings' => app(WebsiteSettings::class)->toArray(),
            'seo' => SeoService::forPage(
                'Kontakt os',
                'Kontakt Førstehjælp til Hunde for spørgsmål om vores kurser, rådgivning eller samarbejde. Vi er her for at hjælpe dig med hundesikkerhed.',
                [
                    'keywords' => 'kontakt, førstehjælp til hunde, hundekurser, rådgivning, denmark, hundesikkerhed',
                    'og_image' => '/images/logo.png',
                ]
            ),
        ]);
    }

    public function store(ContactRequest $request)
    {
        try {
            // Log the contact request
            Log::info('Contact form submission', [
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
                'subject' => $request->subject,
                'message' => $request->message,
                'preferred_contact' => $request->preferred_contact,
                'ip_address' => $request->ip(),
                'user_agent' => $request->userAgent(),
            ]);

            // Add to Mailchimp audience
            $this->addToMailchimp($request);

            // Send notification email to admin
            $this->sendNotificationEmail($request);

            return response()->json([
                'success' => true,
                'message' => 'Tak for din besked! Vi vender tilbage hurtigst muligt.',
            ]);

        } catch (\Exception $e) {
            Log::error('Contact form submission error', [
                'error' => $e->getMessage(),
                'data' => $request->validated(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Der opstod en fejl. Prøv venligst igen.',
            ], 500);
        }
    }

    private function addToMailchimp(ContactRequest $request): void
    {
        try {
            $apiKey = config('services.mailchimp.api_key');
            $listId = config('services.mailchimp.list_id');

            if (! $apiKey || ! $listId) {
                Log::warning('Mailchimp API key or List ID not configured');

                return;
            }

            $serverPrefix = explode('-', $apiKey)[1];

            $data = [
                'email_address' => $request->email,
                'status' => 'subscribed',
                'merge_fields' => [
                    'FNAME' => explode(' ', $request->name)[0] ?? $request->name,
                    'LNAME' => explode(' ', $request->name, 2)[1] ?? '',
                    'PHONE' => $request->phone ?? '',
                ],
                'tags' => ['contact-form', 'website-inquiry'],
            ];

            $response = Http::withBasicAuth('anystring', $apiKey)->withHeaders([
                'Content-Type' => 'application/json',
            ])->post(
                "https://{$serverPrefix}.api.mailchimp.com/3.0/lists/{$listId}/members",
                $data
            );

            if ($response->successful()) {
                Log::info('Contact added to Mailchimp', ['email' => $request->email]);
            } else {
                Log::warning('Failed to add contact to Mailchimp', [
                    'email' => $request->email,
                    'response' => $response->body(),
                ]);
            }

        } catch (\Exception $e) {
            Log::error('Mailchimp integration error', [
                'error' => $e->getMessage(),
                'email' => $request->email,
            ]);
        }
    }

    private function sendNotificationEmail(ContactRequest $request): void
    {
        try {
            $adminEmail = config('mail.admin_email', 'info@firstaiddog.dk');

            if (! $adminEmail) {
                Log::warning('Admin email not configured for contact form notifications');

                return;
            }

            Mail::to($adminEmail)->send(new ContactFormNotification($request->validated()));

            Log::info('Contact form notification sent', [
                'to' => $adminEmail,
                'subject' => 'Ny kontaktformular: '.$request->subject,
                'from' => $request->email,
            ]);

        } catch (\Exception $e) {
            Log::error('Email notification error', [
                'error' => $e->getMessage(),
                'email' => $request->email,
            ]);
        }
    }
}
