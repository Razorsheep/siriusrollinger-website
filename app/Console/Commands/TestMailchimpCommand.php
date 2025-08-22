<?php

namespace App\Console\Commands;

use App\Services\MailchimpService;
use Illuminate\Console\Command;

class TestMailchimpCommand extends Command
{
    /**
     * The name and signature of the console command.
     */
    protected $signature = 'mailchimp:test 
                            {--email= : Email address to test subscription with}
                            {--add-subscriber : Test adding a subscriber}';

    /**
     * The console command description.
     */
    protected $description = 'Test Mailchimp API connection and functionality';

    /**
     * Execute the console command.
     */
    public function handle(): int
    {
        $this->info('🧪 Testing Mailchimp API...');
        $this->newLine();

        $mailchimpService = new MailchimpService;

        // Test API connection
        $this->info('🔌 Testing API connection...');
        $connectionResult = $mailchimpService->testConnection();

        if ($connectionResult['success']) {
            $this->info('✅ API connection successful!');
            $this->line('Response: '.json_encode($connectionResult['response']));
        } else {
            $this->error('❌ API connection failed: '.$connectionResult['error']);

            return 1;
        }

        $this->newLine();

        // Test adding subscriber if requested
        if ($this->option('add-subscriber')) {
            $email = $this->option('email') ?: 'test@example.com';

            $this->info("📧 Testing subscriber addition with email: {$email}");
            $subscriberResult = $mailchimpService->addSubscriber($email, [
                'FNAME' => 'Test',
                'LNAME' => 'User',
            ], ['test', 'website-signup']);

            if ($subscriberResult['success']) {
                $this->info('✅ Subscriber added successfully!');
                $this->line('Subscriber ID: '.($subscriberResult['subscriber_id'] ?? 'N/A'));
            } else {
                if (isset($subscriberResult['code']) && $subscriberResult['code'] === 'MEMBER_EXISTS') {
                    $this->warn('⚠️  Email already exists in audience');
                } else {
                    $this->error('❌ Failed to add subscriber: '.$subscriberResult['error']);
                }
            }
        }

        $this->newLine();
        $this->info('🎉 Mailchimp API test completed!');

        return 0;
    }
}
