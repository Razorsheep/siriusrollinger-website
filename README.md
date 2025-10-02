# Sirius Rollinger Website

Public website for Sirius Rollinger. Built with Laravel, Inertia + React, Tailwind CSS, and shadcn/ui, with Filament for admin.

## Features

- **Pages & Content**: About page content rendered via TipTap JSON renderer
- **Blog**: Listing and detail pages, tags, rich content
- **Events**: Listing and detail pages with calendar download (.ics)
- **Contact**: Contact form with notifications (Resend)
- **Admin**: Filament v4 panel for managing content and media
- **Design System**: Tailwind v4 + shadcn/ui components

## Tech Stack

- **Backend**: Laravel 12 (PHP 8.4)
- **Frontend**: Inertia v2 + React 19 + TypeScript
- **Styling**: Tailwind CSS v4
- **UI**: shadcn/ui
- **Admin**: Filament v4 (Livewire v3)
- **Testing**: Pest v3
- **Formatting**: Laravel Pint

## Navigation

- Forside: `/`
- Blog: `/blog`
- Events: `/events`
- Om: `/about`
- Kontakt: `/contact`

## Getting Started

1) Install dependencies
```bash
composer install
npm install
```

2) Configure environment
```bash
cp .env.example .env
php artisan key:generate
```

3) Database (SQLite preconfigured in repo)
```bash
php artisan migrate --seed
```

4) Run dev servers
```bash
npm run dev
php artisan serve
```

If assets don’t load, run: `npm run build`.

## Development Scripts

- Start Vite (dev): `npm run dev`
- Build assets: `npm run build`
- Lint/format PHP (Pint): `vendor/bin/pint --dirty`
- Run tests (Pest): `php artisan test`

## Notable Code

- Inertia shared props: `app/Http/Middleware/HandleInertiaRequests.php`
- Routes: `routes/web.php`
- TipTap JSON renderer: `resources/js/components/tiptap-json-renderer.tsx`
- Pages
  - Home: `resources/js/pages/home.tsx`
  - Blog: `resources/js/pages/blog/*`
  - Events: `resources/js/pages/events/*`
  - About: `resources/js/pages/about.tsx`
- Admin (Filament): `app/Filament/*`

## Events Calendar (.ics)

Event details page provides a “Gem i kalender” button that generates an ICS file client‑side with title, start/end, location, and description.

## Troubleshooting

- Vite manifest error: run `npm run build` or restart `npm run dev`
- Missing DB/tables: run `php artisan migrate --seed`
- Styles off after edits: run `vendor/bin/pint --dirty` and rebuild assets
