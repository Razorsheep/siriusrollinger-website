<?php

namespace App\Console\Commands;

use App\Mail\ContactFormNotification;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class TestResendCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'test:resend-mail';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $adminEmail = 'ro.sonne@gmail.com';

        // Ensure we have all required contact data fields
        $contactData = [
            'name' => 'Rasmus Sonne',
            'email' => 'ro.sonne@gmail.com',
            'phone' => '+45 22 22 22 22',
            'subject' => 'Test email',
            'message' => 'This is a test email',
            'preferred_contact' => 'email',
            'created_at' => now(),
        ];

        Mail::to($adminEmail)->send(new ContactFormNotification($contactData));
    }
}
