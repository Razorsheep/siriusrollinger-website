<?php

namespace App\Http\Controllers;

use App\Settings\WebsiteSettings;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AboutController extends Controller
{
    public function index(Request $request)
    {
        // $page = Page::where('slug', $request->slug)->first();
        return Inertia::render('about', [
            'settings' => app(WebsiteSettings::class)->toArray(),
        ]);
    }
}
