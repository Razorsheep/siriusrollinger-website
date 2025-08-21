<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class NewsletterController extends Controller
{
    /**
     * Handle newsletter signup and add to Mailchimp
     */
    public function signup(Request $request): JsonResponse
    {
        // Validate the request
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Indtast venligst en gyldig email adresse',
                'errors' => $validator->errors()
            ], 422);
        }

        $email = $request->input('email');

        try {
            // Mailchimp API configuration
            $apiKey = config('services.mailchimp.api_key');
            $listId = config('services.mailchimp.list_id');
            $serverPrefix = config('services.mailchimp.server_prefix');

            if (!$apiKey || !$listId || !$serverPrefix) {
                Log::error('Mailchimp configuration missing', [
                    'api_key' => $apiKey ? 'set' : 'missing',
                    'list_id' => $listId ? 'set' : 'missing',
                    'server_prefix' => $serverPrefix ? 'set' : 'missing'
                ]);

                return response()->json([
                    'success' => false,
                    'message' => 'Nyhedsbrev service er ikke tilgængelig lige nu. Prøv venligst igen senere.'
                ], 500);
            }

            // Prepare the data for Mailchimp
            $data = [
                'email_address' => $email,
                'status' => 'subscribed',
                'merge_fields' => [
                    'FNAME' => '', // You can add first name field later if needed
                    'LNAME' => '',  // You can add last name field later if needed
                ],
                'tags' => ['website-signup', 'dog-first-aid']
            ];

            // Make the API call to Mailchimp
            $response = Http::withBasicAuth('anystring', $apiKey)->withHeaders([
                'Content-Type' => 'application/json',
            ])->post(
                "https://{$serverPrefix}.api.mailchimp.com/3.0/lists/{$listId}/members",
                $data
            );

            if ($response->successful()) {
                Log::info('Newsletter signup successful', ['email' => $email]);
                
                return response()->json([
                    'success' => true,
                    'message' => 'Tak! Du er nu tilmeldt vores nyhedsbrev.'
                ]);
            }

            // Handle Mailchimp API errors
            $errorData = $response->json();
            
            if (isset($errorData['title']) && $errorData['title'] === 'Member Exists') {
                return response()->json([
                    'success' => false,
                    'message' => 'Denne email adresse er allerede tilmeldt vores nyhedsbrev.'
                ], 400);
            }

            Log::error('Mailchimp API error', [
                'email' => $email,
                'status' => $response->status(),
                'response' => $errorData
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Der opstod en fejl ved tilmelding. Prøv venligst igen.'
            ], 500);

        } catch (\Exception $e) {
            Log::error('Newsletter signup error', [
                'email' => $email,
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Der opstod en fejl ved tilmelding. Prøv venligst igen.'
            ], 500);
        }
    }
}
