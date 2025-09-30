<?php

namespace App\Filament\Resources\Events\Schemas;

use App\Models\Event;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class EventForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->required(),
                Select::make('status')
                    ->options(Event::$statuses)
                    ->required()
                    ->default('draft'),
                // TextInput::make('slug')
                //     ->disabled(),
                RichEditor::make('content')
                    ->required()
                    ->columnSpanFull()
                    ->json()
                    ->fileAttachmentsDisk('public')
                    ->fileAttachmentsDirectory('attachments')
                    ->fileAttachmentsVisibility('public'),
                DateTimePicker::make('start_time')
                    ->required(),
                DateTimePicker::make('end_time')
                    ->required(),
                TextInput::make('location_name')
                    ->label('Stedets Navn')
                    ->required()
                    ->helperText('Skriv hvor det skal afholdes.'),
                TextArea::make('location_description')
                    ->label('Adresse / Beskrivelse af stedet'),
                
                TextInput::make('min_participants')
                    ->label('Minimum deltagere')
                    ->numeric(),
                TextInput::make('max_participants')
                    ->label('Maksimum deltagere')
                    ->numeric(),

                FileUpload::make('image')
                    ->disk('public')
                    ->image()
                    ->required()
                    ->label('Billede'),
            ]);
    }
}
