# First Aid Dog Website

A professional website for a dog first aid specialist, built with Laravel, React, and Tailwind CSS.

## Features

- **Danish Language Support**: Menu items and content in Danish
- **Responsive Design**: Mobile-first approach with beautiful responsive layouts
- **Professional Color Scheme**: Red and white theme matching the logo
- **Modern UI Components**: Built with Tailwind CSS and React

## Menu Structure

- **Forside** (Home)
- **Blog**
- **Om** (About)
- **Ydelser** (Services) - Dropdown menu with:
  - Førstehjælpskurser (First Aid Courses)
  - Foredrag (Lectures)
  - Førstehjælpsgrej (First Aid Equipment)
  - Guides og gode råd (Guides and Good Advice)

## Homepage Sections

1. **Header**: Logo, navigation menu, and mobile-responsive design
2. **Hero Section**: Compelling headline with call-to-action buttons
3. **Services Section**: 4 service cards highlighting main offerings
4. **CTA Section**: Call-to-action for course enrollment
5. **Footer**: Company information and quick links

## Technical Stack

- **Backend**: Laravel 11
- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4
- **Build Tool**: Vite
- **Icons**: Lucide React

## Getting Started

1. Install dependencies:
   ```bash
   composer install
   npm install
   ```

2. Set up environment:
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

3. Run database migrations:
   ```bash
   php artisan migrate
   ```

4. Build assets:
   ```bash
   npm run build
   ```

5. Start development server:
   ```bash
   php artisan serve
   npm run dev
   ```

## Development

- **Frontend Development**: `npm run dev`
- **Type Checking**: `npm run types`
- **Production Build**: `npm run build`

## File Structure

- `resources/js/pages/home.tsx` - Main homepage component
- `app/Http/Controllers/HomeController.php` - Homepage controller
- `routes/web.php` - Web routes including homepage
- `public/images/logo.png` - Company logo

## Customization

The homepage uses a red and white color scheme that can be customized by modifying the Tailwind classes in the React components. The color palette includes:

- Primary Red: `red-600`, `red-700`, `red-900`
- Light Reds: `red-50`, `red-100`, `red-200`
- White: `white`
- Text Colors: Various shades of red for hierarchy

## Browser Support

- Modern browsers with ES6+ support
- Mobile-responsive design
- Progressive enhancement approach
