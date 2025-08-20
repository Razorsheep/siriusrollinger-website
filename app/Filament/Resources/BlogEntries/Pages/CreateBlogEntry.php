<?php

namespace App\Filament\Resources\BlogEntries\Pages;

use App\Filament\Resources\BlogEntries\BlogEntryResource;
use Filament\Resources\Pages\CreateRecord;

class CreateBlogEntry extends CreateRecord
{
    protected static string $resource = BlogEntryResource::class;
}
