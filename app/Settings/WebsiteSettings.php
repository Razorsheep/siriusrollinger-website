<?php

namespace App\Settings;

use Spatie\LaravelSettings\Settings;

class WebsiteSettings extends Settings
{
    protected $casts = [
        'hero_images' => 'array',
        'about_text' => 'array',
    ];

    public string $phone_number;

    public string $email;

    public string $footer_text;

    public array $hero_images;

    public string $hero_title;

    public string $hero_text;

    public string $about_title;

    public array $about_text;

    public static function group(): string
    {
        return 'website';
    }
}
