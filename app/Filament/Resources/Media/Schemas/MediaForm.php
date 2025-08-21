<?php

namespace App\Filament\Resources\Media\Schemas;

// use Filament\Forms\Components\SpatieTagsInput;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class MediaForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                // SpatieMediaLibraryFileUpload::make('file'),

                TextInput::make('name'),
                TextInput::make('file_name')
                    ->disabled(),
                TextInput::make('mime_type')
                    ->disabled(),
                TextInput::make('size')
                    ->disabled(),
                TextInput::make('url')
                    ->disabled(),
                TextInput::make('preview_url')
                    ->disabled(),
                TextInput::make('order_column')
                    ->disabled(),
                TextInput::make('custom_properties.alt_text')
                    ->label('Alt Text'),
                // SpatieTagsInput::make('tags'),
            ]);
    }
}
