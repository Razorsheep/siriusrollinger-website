<?php

namespace App\Filament\Resources\Pages\Schemas;

use App\Models\Page;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Schema;

class PageForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Tabs::make('tabs')
                    ->schema([
                        Tabs\Tab::make('Content')
                            ->schema([
                                TextInput::make('title')
                                    ->required(),
                                TextInput::make('slug')
                                    ->disabled(),
                                Textarea::make('excerpt')
                                    ->columnSpanFull(),
                                Select::make('author_id')
                                    ->relationship('author', 'name')
                                    ->required(),
                                Select::make('page_type')
                                    ->options(Page::$types)
                                    ->required()
                                    ->default('default'),
                                Select::make('status')
                                    ->options(Page::$statuses)
                                    ->required()
                                    ->default('draft'),
                                RichEditor::make('content')
                                    ->required()
                                    ->columnSpanFull()
                                    ->json(),
                            ])
                            ->columns(2),
                        Tabs\Tab::make('Media')
                            ->schema([
                                SpatieMediaLibraryFileUpload::make('images')
                                    ->collection('images')
                                    ->multiple(),
                            ]),
                        Tabs\Tab::make('Next Event')
                            ->schema([
                                TextInput::make('next_event_title'),
                                TextInput::make('next_event_date'),
                                TextInput::make('next_event_time'),
                                TextInput::make('next_event_location'),
                                Textarea::make('next_event_description')
                                    ->columnSpanFull(),
                                TextInput::make('next_event_registration_link'),
                            ]),
                        Tabs\Tab::make('Contact Info')
                            ->schema([
                                TextInput::make('contact_phone')
                                    ->tel(),
                                TextInput::make('contact_email')
                                    ->email(),
                                TextInput::make('contact_website'),
                            ]),
                    ])
                    ->columnSpanFull(),
            ]);
    }
}
