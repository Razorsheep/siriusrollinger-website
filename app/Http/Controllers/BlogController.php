<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlogEntryResource;
use App\Settings\WebsiteSettings;
use App\Models\BlogEntry;
use App\Models\Page;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        $blogEntries = BlogEntry::where('status', 'published')->get();
        $categories = BlogEntry::distinct()->pluck('category');
        
        // Get navigation items for the header
        $ydelser = Page::where('page_type', 'service')
            ->where('status', 'published')
            ->orderBy('order_column')
            ->get();

        $navigationItems = [
            [
                'label' => 'Forside',
                'href' => '/',
                'type' => 'item',
            ],
            [
                'label' => 'Blog',
                'href' => '/blog',
                'type' => 'item',
            ],  
            [
                'label' => 'Om',
                'href' => '/about',
                'type' => 'item',
            ],
            [
                'label' => 'Ydelser',
                'type' => 'group',
                'items' => $ydelser->map(function ($service) {
                    return [
                        'label' => $service->title,
                        'href' => '/' . $service->slug,
                        'type' => 'item',
                    ];
                }),
            ],
        ];

        return Inertia::render('blog/index', [
            'blogEntries' => $blogEntries,
            'categories' => $categories,
            'settings' => app(WebsiteSettings::class)->toArray(),
            'navigationItems' => $navigationItems,
        ]);
    }

    public function show(BlogEntry $blogEntry)
    {
        // Get navigation items for the header
        $ydelser = Page::where('page_type', 'service')
            ->where('status', 'published')
            ->orderBy('order_column')
            ->get();

        $navigationItems = [
            [
                'label' => 'Forside',
                'href' => '/',
                'type' => 'item',
            ],
            [
                'label' => 'Blog',
                'href' => '/blog',
                'type' => 'item',
            ],  
            [
                'label' => 'Om',
                'href' => '/about',
                'type' => 'item',
            ],
            [
                'label' => 'Ydelser',
                'type' => 'group',
                'items' => $ydelser->map(function ($service) {
                    return [
                        'label' => $service->title,
                        'href' => '/' . $service->slug,
                        'type' => 'item',
                    ];
                }),
            ],
        ];

        return Inertia::render('blog/show', [
            'blogEntry' => $blogEntry,//new BlogEntryResource($blogEntry->load('author'))->resolve(),
            'settings' => app(WebsiteSettings::class)->toArray(),
            'navigationItems' => $navigationItems,
        ]);
    }
}
