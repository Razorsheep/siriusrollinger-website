<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlogEntryResource;
use App\Models\BlogEntry;
use App\Services\SeoService;
use App\Settings\WebsiteSettings;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $blogEntries = BlogEntry::where('status', 'published')->latest()->take(3)->get();

        return Inertia::render('home', [
            'settings' => app(WebsiteSettings::class)->toArray(),
            'blogEntries' => BlogEntryResource::collection($blogEntries)->resolve(),
            'seo' => SeoService::forHome(),
        ]);
    }
}
