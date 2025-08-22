<?php

namespace App\Filament\Resources\BlogEntries;

use App\Filament\Resources\BlogEntries\Pages\CreateBlogEntry;
use App\Filament\Resources\BlogEntries\Pages\EditBlogEntry;
use App\Filament\Resources\BlogEntries\Pages\ListBlogEntries;
use App\Filament\Resources\BlogEntries\Schemas\BlogEntryForm;
use App\Filament\Resources\BlogEntries\Tables\BlogEntriesTable;
use App\Models\BlogEntry;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class BlogEntryResource extends Resource
{
    protected static ?string $model = BlogEntry::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedPencil;

    protected static ?string $recordTitleAttribute = 'title';

    public static function form(Schema $schema): Schema
    {
        return BlogEntryForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return BlogEntriesTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListBlogEntries::route('/'),
            'create' => CreateBlogEntry::route('/create'),
            'edit' => EditBlogEntry::route('/{record}/edit'),
        ];
    }
}
