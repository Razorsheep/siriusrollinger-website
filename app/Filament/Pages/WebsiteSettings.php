<?php

namespace App\Filament\Pages;

use App\Settings\WebsiteSettings as Settings;
use BackedEnum;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Pages\SettingsPage;
use Filament\Schemas\Components\Tabs;
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
                Tabs::make('tabs')
                    ->schema([
                        Tabs\Tab::make('Contact Info')
                            ->schema([
                                TextInput::make('phone_number')
                                    ->required(),
                                TextInput::make('email')
                                    ->required(),
                            ]),

                        Tabs\Tab::make('Hero')
                            ->schema([
                                TextInput::make('hero_title')
                                    ->required(),
                                TextInput::make('hero_text')
                                    ->required(),
                                FileUpload::make('hero_images')
                                    ->disk('public')
                                    ->image()
                                    ->imageEditor()
                                    ->imageEditorAspectRatios([
                                        '16:9',
                                    ])
                                    // ->imageEditorMode(3)
                                    ->multiple()
                                    ->maxParallelUploads(1)
                                    ->reorderable()
                                    ->appendFiles()
                                    ->columnSpanFull()
                                    ->panelLayout('grid')
                                    ->imageEditorViewportWidth('16')
                                    ->imageEditorViewportHeight('9'),
                                // ->imagePreviewHeight('250')
                                // ->loadingIndicatorPosition('left')
                                // ->panelAspectRatio('2:1')
                                // ->panelLayout('integrated')
                                // ->removeUploadedFileButtonPosition('right')
                                // ->uploadButtonPosition('left')
                                // ->uploadProgressIndicatorPosition('left'),
                            ]),

                        Tabs\Tab::make('About')
                            ->schema([
                                TextInput::make('about_title')
                                    ->required(),
                                RichEditor::make('about_text')
                                    ->required()
                                    ->json()
                                    ->fileAttachmentsDisk('public')
                                    ->fileAttachmentsDirectory('attachments')
                                    ->fileAttachmentsVisibility('public'),
                            ]),

                        Tabs\Tab::make('Footer')
                            ->schema([
                                TextInput::make('footer_text')
                                    ->required(),
                            ]),

                    ]),

            ])->columns(1);
    }
}
