<?php

namespace App\Http\Middleware;

use App\Models\Page;
use App\Settings\WebsiteSettings;
use Illuminate\Foundation\Inspiring;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        // [$message, $author] = str(Inspiring::quotes()->random())->explode('-');

        return [
            ...parent::share($request),
            'name' => config('app.name'),
            'navigationItems' => $this->getNavigationItems(),
            'settings' => $this->getSettings(),
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => fn (): array => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            // 'sidebarOpen' => ! $request->hasCookie('sidebar_state') || $request->cookie('sidebar_state') === 'true',
        ];
    }

    private function getNavigationItems(): array
    {
        // $pages = Page::where('status', 'published')
        //     ->orderBy('order_column')
        //     ->get();

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
                'label' => 'Events',
                'href' => '/events',
                'type' => 'item',
            ],
            [
                'label' => 'Om',
                'href' => '/about',
                'type' => 'item',
            ],
            // [
            //     'label' => 'Kontakt',
            //     'href' => '/contact',
            //     'type' => 'item',
            // ],
            // [
            //     'label' => 'Ydelser',
            //     'type' => 'group',
            //     'items' => $ydelser->map(function ($service) {
            //         return [
            //             'label' => $service->title,
            //             'href' => '/'.$service->slug,
            //             'type' => 'item',
            //         ];
            //     }),
            // ],
        ];

        return $navigationItems;

    }

    private function getSettings(): array
    {
        return app(WebsiteSettings::class)->toArray();
    }
}
