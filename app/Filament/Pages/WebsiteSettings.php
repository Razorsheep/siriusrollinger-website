<?php

namespace App\Filament\Pages;

use App\Settings\WebsiteSettings as Settings;
use BackedEnum;
use Filament\Forms\Components\TextInput;
use Filament\Pages\SettingsPage;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;

class WebsiteSettings extends SettingsPage
{
    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedCog6Tooth;

    protected static string $settings = Settings::class;

    public function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('phone_number')
                    ->required(),
                TextInput::make('email')
                    ->required(),
                TextInput::make('footer_text')
                    ->required(),
            ]);
    }
}
