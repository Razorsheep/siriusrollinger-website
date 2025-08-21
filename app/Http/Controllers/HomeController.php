<?php

namespace App\Http\Controllers;

use App\Models\BlogEntry;
use App\Services\SeoService;
use App\Settings\WebsiteSettings;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $blogEntries = BlogEntry::where('status', 'published')->latest()->take(3)->get();

        return Inertia::render('home', [
            'settings' => app(WebsiteSettings::class)->toArray(),
            'blogEntries' => $blogEntries,
            'seo' => SeoService::forHome(),
        ]);
    }
}
