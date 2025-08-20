<?php

namespace App\Filament\Resources\BlogEntries\Tables;

use App\Models\BlogEntry;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\Select;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\SelectColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class BlogEntriesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')
                    ->label('Titel')
                    ->searchable(),
                TextColumn::make('excerpt')
                    ->label('Uddrag')
                    ->searchable()
                    ->limit(30),
                ImageColumn::make('image'),
                TextColumn::make('author.name')
                    ->label('Forfatter'),
                TextColumn::make('category')
                    ->searchable(),
                TextColumn::make('read_time')
                    ->searchable(),
                TextColumn::make('date')
                    ->date('d-m-Y')
                    ->sortable(),
                SelectColumn::make('status')
                    ->options(BlogEntry::$statuses)
                    ->searchable(),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
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
            ]);
    }
}
