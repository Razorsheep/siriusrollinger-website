# Font Usage Guide

This website now uses **Arvo** for headlines and **Inter Variable** for content text.

## Font Families

- **Arvo** (Serif) - Used for all headings, titles, and display text
- **Inter Variable** (Sans-serif) - Used for body text, paragraphs, and general content

## Available Font Classes

### Tailwind CSS Classes
```css
/* Use these classes in your components */
.font-headings    /* Arvo font */
.font-content     /* Inter Variable font */
.font-display     /* Arvo font (alias for headings) */
```

### Custom CSS Classes
```css
/* Alternative custom classes */
.text-heading     /* Arvo font */
.text-content     /* Inter Variable font */
.text-display     /* Arvo font */
```

## Usage Examples

### In React Components
```tsx
// Headings with Arvo font
<h1 className="font-headings text-4xl font-bold">Main Title</h1>
<h2 className="font-headings text-2xl font-semibold">Section Title</h2>

// Content with Inter Variable font
<p className="font-content text-base">This is body text using Inter Variable.</p>
<div className="font-content text-sm">Smaller content text.</div>

// Or use the custom classes
<h3 className="text-heading text-xl">Subsection</h3>
<span className="text-content">Inline content text.</span>
```

### In HTML/Blade Templates
```html
<!-- Headings automatically use Arvo -->
<h1>This heading uses Arvo automatically</h1>
<h2>So does this one</h2>

<!-- Content automatically uses Inter Variable -->
<p>This paragraph uses Inter Variable automatically</p>
<div>This div also uses Inter Variable</div>

<!-- Or explicitly specify fonts -->
<h3 class="font-headings">Explicit Arvo heading</h3>
<p class="font-content">Explicit Inter Variable content</p>
```

## Automatic Font Application

The following elements automatically use the correct fonts:

### Arvo (Headings)
- All `<h1>` through `<h6>` tags
- Elements with `.prose h1`, `.prose h2`, etc.

### Inter Variable (Content)
- `<body>`, `<p>`, `<span>`, `<div>`
- `<a>`, `<button>`, `<input>`, `<textarea>`, `<select>`
- Elements with `.prose p`, `.prose li`, etc.

## CSS Variables

The fonts are defined as CSS custom properties:

```css
:root {
    --font-headings: 'Arvo', serif;
    --font-content: 'Inter', sans-serif;
    --font-display: 'Arvo', serif;
}
```

## Google Fonts

The fonts are loaded from Google Fonts with the following weights:

- **Arvo**: 400 (regular), 700 (bold), with italics
- **Inter Variable**: Variable font with weight range 100-900, with italics

## Best Practices

1. **Use semantic HTML** - `<h1>` through `<h6>` will automatically use Arvo
2. **Apply font classes explicitly** when you need to override the default
3. **Maintain hierarchy** - Use appropriate heading levels for structure
4. **Keep content readable** - Inter Variable is optimized for body text

## Examples in Your Components

### Header Component
```tsx
// Logo text uses Arvo
<h1 className="text-xl font-bold text-red-700 font-headings">
    Førstehjælp til Hunde
</h1>

// Tagline uses Inter Variable
<p className="text-sm text-red-600 font-content">
    Din hunds sikkerhed kommer først
</p>
```

### Service Page
```tsx
// Main title uses Arvo
<h1 className="text-4xl lg:text-5xl font-bold text-red-900 font-headings">
    {page.title}
</h1>

// Content uses Inter Variable
<div className="prose prose-lg prose-red max-w-none font-content">
    {/* Content will automatically use Inter Variable */}
</div>
```

### Blog Entries
```tsx
// Blog titles use Arvo
<h2 className="text-xl font-semibold text-gray-900 font-headings">
    {blogEntry.title}
</h2>

// Blog content uses Inter Variable
<p className="text-gray-600 font-content">
    {blogEntry.excerpt}
</p>
```

## Troubleshooting

If fonts aren't loading:

1. Check that Google Fonts are accessible
2. Verify the CSS variables are defined
3. Ensure the font classes are applied correctly
4. Check browser developer tools for font loading errors

## Performance

- Fonts are loaded asynchronously from Google Fonts
- Only the weights you need are loaded
- Fonts are cached by the browser for better performance
