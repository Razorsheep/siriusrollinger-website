<?php

namespace App\Http\Controllers;

use App\Services\SeoService;
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
            'seo' => SeoService::forPage(
                'Om os - Førstehjælp til Hunde',
                'Lær om Julie Pio Kragelund, dyrlæge og ekspert i hundesikkerhed og førstehjælp. Erfaren i militære arbejdshunde og taktisk førstehjælp.',
                [
                    'keywords' => 'om os, julie pio kragelund, dyrlæge, hundesikkerhed, førstehjælp til hunde, militære arbejdshunde, denmark',
                    'og_image' => '/images/logo.png',
                ]
            ),
        ]);
    }
}
