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
    protected $signature = 'mail:test-resend 
                            {--to= : Email address to send test email to}
                            {--from= : From email address (defaults to config)}
                            {--subject= : Subject line for test email}
                            {--html : Send HTML email instead of plain text}';

    /**
     * The console command description.
     */
    protected $description = 'Test Resend configuration and send a test email';

    /**
     * Execute the console command.
     */
    public function handle(): int
    {
        $this->info('🧪 Testing Resend Configuration...');
        $this->newLine();

        // Get options
        $toEmail = $this->option('to') ?: config('mail.from.address');
        $fromEmail = $this->option('from') ?: config('mail.from.address');
        $subject = $this->option('subject') ?: 'Resend Test Email - Førstehjælp til Hunde';
        $isHtml = $this->option('html');

        // Display current mail configuration
        $this->displayMailConfig();

        // Test connection by sending email
        if ($this->sendTestEmail($toEmail, $fromEmail, $subject, $isHtml)) {
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
    private function displayMailConfig(): void
    {
        $this->info('📋 Current Mail Configuration:');
        $this->line('Driver: '.config('mail.default'));
        $this->line('From Address: '.config('mail.from.address'));
        $this->line('From Name: '.config('mail.from.name'));

        $this->newLine();
        $this->info('🔧 Resend Configuration:');
        $this->line('API Key: '.(config('services.resend.key') ? 'Set' : 'Not set'));
        $this->line('Mail Driver: '.config('mail.default'));
        $this->newLine();
    }

    /**
     * Send test email
     */
    private function sendTestEmail(string $toEmail, string $fromEmail, string $subject, bool $isHtml): bool
    {
        try {
            $this->info('📧 Sending test email via Resend...');

            if ($isHtml) {
                $htmlContent = $this->generateHtmlTestEmailContent();
                Mail::html($htmlContent, function (Message $message) use ($toEmail, $fromEmail, $subject) {
                    $message->to($toEmail)
                        ->from($fromEmail, config('mail.from.name'))
                        ->subject($subject);
                });
            } else {
                $textContent = $this->generateTextTestEmailContent();
                Mail::raw($textContent, function (Message $message) use ($toEmail, $fromEmail, $subject) {
                    $message->to($toEmail)
                        ->from($fromEmail, config('mail.from.name'))
                        ->subject($subject);
                });
            }

            return true;

        } catch (Exception $e) {
            $this->error('❌ Failed to send email: '.$e->getMessage());
            Log::error('Resend email send failed', [
                'to' => $toEmail,
                'from' => $fromEmail,
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
            ]);

            return false;
        }
    }

    /**
     * Generate HTML test email content
     */
    private function generateHtmlTestEmailContent(): string
    {
        return '
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Resend Test Email</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                <h1 style="color: #dc2626;">🧪 Resend Test Email</h1>
                
                <p>Hej!</p>
                
                <p>Dette er en test email fra din Laravel applikation via <strong>Resend</strong>.</p>
                
                <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="margin-top: 0;">📧 Email Detaljer:</h3>
                    <ul>
                        <li><strong>Tidspunkt:</strong> '.now()->format('d/m/Y H:i:s').'</li>
                        <li><strong>Server:</strong> '.gethostname().'</li>
                        <li><strong>Laravel Version:</strong> '.app()->version().'</li>
                        <li><strong>Mail Driver:</strong> '.config('mail.default').'</li>
                    </ul>
                </div>
                
                <p>✅ Hvis du modtager denne email, betyder det at din Resend konfiguration fungerer korrekt!</p>
                
                <div style="background-color: #dc2626; color: white; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0;">
                    <h3 style="margin: 0;">Førstehjælp til Hunde</h3>
                    <p style="margin: 10px 0 0 0;">Din partner i hundesikkerhed</p>
                </div>
                
                <p>Med venlig hilsen,<br>
                <strong>Førstehjælp til Hunde Team</strong></p>
                
                <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
                <p style="font-size: 12px; color: #6b7280;">
                    Dette er en automatisk genereret test email. Du kan slette den.
                </p>
            </div>
        </body>
        </html>';
    }

    /**
     * Generate text test email content
     */
    private function generateTextTestEmailContent(): string
    {
        return 'Hej!

Dette er en test email fra din Laravel applikation via Resend.

📧 Email Test Detaljer:
- Tidspunkt: '.now()->format('d/m/Y H:i:s').'
- Server: '.gethostname().'
- Laravel Version: '.app()->version().'
- Mail Driver: '.config('mail.default').'

✅ Hvis du modtager denne email, betyder det at din Resend konfiguration fungerer korrekt!

Førstehjælp til Hunde
Din partner i hundesikkerhed

Med venlig hilsen,
Førstehjælp til Hunde Team

---
Dette er en automatisk genereret test email. Du kan slette den.';
    }
}
