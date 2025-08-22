<?php

namespace App\Console\Commands;

use Exception;
use Illuminate\Console\Command;
use Illuminate\Mail\Message;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class TestSmtpCommand extends Command
{
    /**
     * The name and signature of the console command.
     */
    protected $signature = 'mail:test-smtp 
                            {--to= : Email address to send test email to}
                            {--from= : From email address (defaults to config)}
                            {--subject= : Subject line for test email}
                            {--config= : Test specific mail configuration}
                            {--details : Show detailed connection information}';

    /**
     * The console command description.
     */
    protected $description = 'Test SMTP settings and send a test email';

    /**
     * Execute the console command.
     */
    public function handle(): int
    {
        $this->info('🧪 Testing SMTP Configuration...');
        $this->newLine();

        // Get options
        $toEmail = $this->option('to') ?: config('mail.from.address');
        $fromEmail = $this->option('from') ?: config('mail.from.address');
        $subject = $this->option('subject') ?: 'SMTP Test Email - Førstehjælp til Hunde';
        $config = $this->option('config');
        $verbose = $this->option('details');

        // Display current mail configuration
        $this->displayMailConfig($verbose);

        // Test connection
        if (! $this->testConnection($config)) {
            $this->error('❌ SMTP connection failed!');

            return 1;
        }

        $this->info('✅ SMTP connection successful!');
        $this->newLine();

        // Send test email
        if ($this->sendTestEmail($toEmail, $fromEmail, $subject, $config)) {
            $this->info('📧 Test email sent successfully!');
            $this->info("📬 Sent to: {$toEmail}");
            $this->info("📤 From: {$fromEmail}");

            return 0;
        }

        $this->error('❌ Failed to send test email!');

        return 1;
    }

    /**
     * Display current mail configuration
     */
    private function displayMailConfig(bool $verbose): void
    {
        $this->info('📋 Current Mail Configuration:');
        $this->line('Driver: '.config('mail.default'));
        $this->line('Host: '.config('mail.mailers.smtp.host'));
        $this->line('Port: '.config('mail.mailers.smtp.port'));
        $this->line('Encryption: '.config('mail.mailers.smtp.encryption'));
        $this->line('Username: '.config('mail.mailers.smtp.username'));
        $this->line('From Address: '.config('mail.from.address'));
        $this->line('From Name: '.config('mail.from.name'));

        if ($verbose) {
            $this->newLine();
            $this->info('🔧 Additional Configuration:');
            $this->line('Timeout: '.config('mail.mailers.smtp.timeout', '30').'s');
            $this->line('Local Domain: '.config('mail.mailers.smtp.local_domain', 'Not set'));
            $this->line('Verify Peer: '.(config('mail.mailers.smtp.verify_peer', true) ? 'Yes' : 'No'));
        }
        $this->newLine();
    }

    /**
     * Test SMTP connection
     */
    private function testConnection(?string $config): bool
    {
        try {
            $this->info('🔌 Testing SMTP connection...');

            // Test basic connection
            $host = config('mail.mailers.smtp.host');
            $port = config('mail.mailers.smtp.port');

            $this->line("Connecting to {$host}:{$port}...");

            $connection = @fsockopen($host, $port, $errno, $errstr, 10);

            if (! $connection) {
                $this->error("Connection failed: {$errstr} ({$errno})");

                return false;
            }

            fclose($connection);
            $this->info('✅ Basic connection test passed');

            // Test with Laravel's mail system
            $this->line('Testing with Laravel mail system...');

            // This will attempt to connect using the configured mailer
            Mail::raw('Connection test', function (Message $message) {
                $message->to('test@example.com')
                    ->subject('Connection Test');
            });

            $this->info('✅ Laravel mail system test passed');

            return true;

        } catch (Exception $e) {
            $this->error('❌ Connection test failed: '.$e->getMessage());
            Log::error('SMTP test failed', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
            ]);

            return false;
        }
    }

    /**
     * Send test email
     */
    private function sendTestEmail(string $toEmail, string $fromEmail, string $subject, ?string $config): bool
    {
        try {
            $this->info('📧 Sending test email...');

            $testContent = $this->generateTestEmailContent();

            Mail::raw($testContent, function (Message $message) use ($toEmail, $fromEmail, $subject) {
                $message->to($toEmail)
                    ->from($fromEmail, config('mail.from.name'))
                    ->subject($subject);
            });

            return true;

        } catch (Exception $e) {
            $this->error('❌ Failed to send email: '.$e->getMessage());
            Log::error('SMTP email send failed', [
                'to' => $toEmail,
                'from' => $fromEmail,
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
            ]);

            return false;
        }
    }

    /**
     * Generate test email content
     */
    private function generateTestEmailContent(): string
    {
        return "Hej!

Dette er en test email fra din Laravel applikation 'Førstehjælp til Hunde'.

📧 Email Test Detaljer:
- Tidspunkt: ".now()->format('d/m/Y H:i:s').'
- Server: '.gethostname().'
- Laravel Version: '.app()->version().'

✅ Hvis du modtager denne email, betyder det at din SMTP konfiguration fungerer korrekt!

Med venlig hilsen,
Førstehjælp til Hunde Team

---
Dette er en automatisk genereret test email. Du kan slette den.';
    }
}
