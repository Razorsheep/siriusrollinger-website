<?php

namespace App\Settings;

use Spatie\LaravelSettings\Settings;

class WebsiteSettings extends Settings
{
    public string $phone_number;
    public string $email;
    public string $footer_text;

    public static function group(): string
    {
        return 'website';
    }
}