<?php

namespace App\Filament\Resources\BlogEntries\Pages;

use App\Filament\Resources\BlogEntries\BlogEntryResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditBlogEntry extends EditRecord
{
    protected static string $resource = BlogEntryResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
