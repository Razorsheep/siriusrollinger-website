<?php

namespace App\Filament\Resources\BlogEntries\Schemas;

use App\Models\BlogEntry;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Forms\Components\SpatieTagsInput;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class BlogEntryForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->required(),
                TextInput::make('excerpt'),
                TextInput::make('slug')
                    ->disabled(),
                RichEditor::make('content')
                    ->required()
                    ->columnSpanFull()
                    ->json()
                    ->fileAttachmentsDisk('public')
                    ->fileAttachmentsDirectory('attachments')
                    ->fileAttachmentsVisibility('public'),
                SpatieMediaLibraryFileUpload::make('featured_image')
                    ->collection('featured_image')
                    ->disk('public'),
                Select::make('author_id')
                    ->relationship('author', 'name')
                    ->default(1),
                SpatieTagsInput::make('tags'),
                TextInput::make('read_time'),
                DatePicker::make('date')
                    ->default(now()),
                Select::make('status')
                    ->options(BlogEntry::$statuses)
                    ->required(),
            ]);
    }
}
