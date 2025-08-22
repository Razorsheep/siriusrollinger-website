<?php

namespace App\Http\Controllers;

use App\Services\MailchimpService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class NewsletterController extends Controller
{
    private MailchimpService $mailchimpService;

    public function __construct(MailchimpService $mailchimpService)
    {
        $this->mailchimpService = $mailchimpService;
    }

    /**
     * Handle newsletter signup and add to Mailchimp
     */
    public function signup(Request $request): JsonResponse
    {
        // Validate the request
        $request->validate([
            'email' => 'required|email|max:255',
        ]);

        $email = $request->input('email');

        try {
            // Add subscriber to Mailchimp
            $result = $this->mailchimpService->addSubscriber($email, [
                'FNAME' => '', // You can add first name field later if needed
                'LNAME' => '',  // You can add last name field later if needed
            ], ['website-signup', 'dog-first-aid']);

            if ($result['success']) {
                Log::info('Newsletter signup successful', ['email' => $email]);

                return response()->json([
                    'success' => true,
                    'message' => 'Tak! Du er nu tilmeldt vores nyhedsbrev.',
                ]);
            } else {
                // Handle specific error cases
                if (isset($result['code']) && $result['code'] === 'MEMBER_EXISTS') {
                    return response()->json([
                        'success' => false,
                        'message' => 'Denne email adresse er allerede tilmeldt vores nyhedsbrev.',
                    ], 400);
                }

                Log::error('Mailchimp API error', [
                    'email' => $email,
                    'error' => $result['error'],
                ]);

                return response()->json([
                    'success' => false,
                    'message' => 'Der opstod en fejl ved tilmelding. Prøv venligst igen.',
                ], 500);
            }

        } catch (\Exception $e) {
            Log::error('Newsletter signup error', [
                'email' => $email,
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Der opstod en fejl ved tilmelding. Prøv venligst igen.',
            ], 500);
        }
    }
}
