<?php

namespace App\Services;

use Exception;
use Illuminate\Support\Facades\Log;
use MailchimpMarketing\ApiClient;

class MailchimpService
{
    private $mailchimp;

    private string $audienceId;

    public function __construct()
    {
        $this->mailchimp = new ApiClient;
        $this->mailchimp->setConfig([
            'apiKey' => config('services.mailchimp.api_key'),
            'server' => config('services.mailchimp.server_prefix'),
        ]);

        $this->audienceId = config('services.mailchimp.list_id');
    }

    /**
     * Add a subscriber to your audience
     */
    public function addSubscriber(string $email, array $mergeFields = [], array $tags = []): array
    {
        try {
            $response = $this->mailchimp->lists->addListMember($this->audienceId, [
                'email_address' => $email,
                'status' => 'subscribed',
                'merge_fields' => $mergeFields,
                'tags' => $tags,
            ]);

            Log::info('Mailchimp subscriber added successfully', [
                'email' => $email,
                'subscriber_id' => $response['id'] ?? null,
            ]);

            return [
                'success' => true,
                'subscriber_id' => $response['id'] ?? null,
                'message' => 'Subscriber added successfully',
            ];

        } catch (Exception $e) {
            // Handle specific Mailchimp errors
            if (str_contains($e->getMessage(), 'Member Exists')) {
                return [
                    'success' => false,
                    'error' => 'Email is already subscribed',
                    'code' => 'MEMBER_EXISTS',
                ];
            }

            Log::error('Mailchimp subscriber addition failed', [
                'email' => $email,
                'error' => $e->getMessage(),
            ]);

            return [
                'success' => false,
                'error' => $e->getMessage(),
            ];
        }
    }

    /**
     * Test the API connection
     */
    public function testConnection(): array
    {
        try {
            $response = $this->mailchimp->ping->get();

            return [
                'success' => true,
                'message' => 'API connection successful',
                'response' => $response,
            ];

        } catch (Exception $e) {
            return [
                'success' => false,
                'error' => $e->getMessage(),
            ];
        }
    }
}
