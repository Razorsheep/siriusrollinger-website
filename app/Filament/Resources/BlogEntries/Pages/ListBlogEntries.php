<?php

namespace App\Filament\Resources\BlogEntries\Pages;

use App\Filament\Resources\BlogEntries\BlogEntryResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListBlogEntries extends ListRecords
{
    protected static string $resource = BlogEntryResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
