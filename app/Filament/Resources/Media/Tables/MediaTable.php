<?php

namespace App\Filament\Resources\Media\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\ImageColumn;
// use Filament\Tables\Columns\SpatieTagsColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class MediaTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('preview_url'),
                TextColumn::make('name'),
                // TextColumn::make('file_name'),
                TextColumn::make('mime_type'),
                TextColumn::make('size'),
                // TextColumn::make('url'),
                TextColumn::make('order_column'),
                TextColumn::make('custom_properties.alt_text')
                    ->label('Alt Text'),
                // SpatieTagsColumn::make('tags')
                //     ->searchable(),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ])->reorderable(true);
    }
}
