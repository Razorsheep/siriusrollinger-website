<?php

namespace App\Filament\Resources\Pages\Schemas;

use App\Models\Page;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class PageForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->required(),
                TextInput::make('slug')
                    ->required(),
                RichEditor::make('content')
                    ->required()
                    ->columnSpanFull(),
                FileUpload::make('image')
                    ->image(),
                Select::make('author')
                    ->relationship('author', 'name')
                    ->required(),
                Select::make('status')
                    ->options(Page::$statuses)
                    ->required()
                    ->default('draft'),
                Select::make('page_type')
                    ->options(Page::$types)
                    ->required()
                    ->default('page'),
            ]);
    }
}
