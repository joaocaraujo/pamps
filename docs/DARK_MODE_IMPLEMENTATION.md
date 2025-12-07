# Dark Mode Implementation

## Overview

Dark mode has been implemented using `@nuxtjs/color-mode`, the official Nuxt module for theme management. This provides system preference detection, manual toggle, and automatic persistence.

## Configuration

### Module Setup

The `@nuxtjs/color-mode` module is configured in `nuxt.config.ts`:

```typescript
colorMode: {
  preference: 'system',  // Respects OS preference by default
  fallback: 'light',     // Fallback if system preference unavailable
  classSuffix: '',       // No suffix for dark class
  dataValue: 'theme'     // Uses data-theme attribute
}
```

### Tailwind Configuration

Tailwind is configured to use class-based dark mode in `tailwind.config.js`:

```javascript
darkMode: 'class'  // Enables dark: prefix for dark mode classes
```

## Design Tokens

Dark mode tokens are defined in `assets/css/tokens.css` using `[data-theme="dark"]` selector:

### Color Mapping

| Light Mode | Dark Mode | Purpose |
|------------|----------|---------|
| `--color-highlight: #FFF9E5` | `--color-highlight: #1A1612` | Main background (Creamy Vanilla → Dark Brown) |
| `--color-light: #FFFFFF` | `--color-light: #2A241F` | Pure white → Dark surface |
| `--color-surface: #FAFAFA` | `--color-surface: #1F1B17` | Neutral surface |
| `--color-text-main: #4E342E` | `--color-text-main: #FFF9E5` | Main text (inverted) |
| `--color-text-body: #6D5D55` | `--color-text-body: #E8E0D0` | Body text (lighter) |
| `--color-border: #E0D6CC` | `--color-border: #3A342E` | Borders |

### Preserved Colors

- **Primary (Pamps Honey)**: `#F79F1F` - Maintained in both modes
- **Accent (Golden Ring)**: `#D4AF37` - Maintained in both modes
- **Secondary (Fresh Pistachio)**: Maintained for consistency

### Shadows

Shadows are intensified in dark mode for better depth perception:
- Base shadow opacity: 0.06 → 0.4
- Large shadow opacity: 0.1 → 0.6

## Components

### ColorModeToggle

A simple toggle component (`components/ColorModeToggle.vue`) that:
- Shows sun icon in dark mode (to switch to light)
- Shows moon icon in light mode (to switch to dark)
- Uses `useColorMode()` composable from `@nuxtjs/color-mode`
- Persists preference automatically via localStorage

### Header Integration

The toggle is integrated into the Header component:
- Desktop: Between navigation and WhatsApp button
- Mobile: Next to WhatsApp icon and hamburger menu

## How It Works

1. **System Detection**: On first load, checks `prefers-color-scheme` media query
2. **Manual Override**: User can toggle via ColorModeToggle component
3. **Persistence**: Preference is saved to localStorage
4. **Application**: Module applies `data-theme="dark"` attribute to `<html>` element
5. **CSS Variables**: Dark mode tokens override light mode via `[data-theme="dark"]` selector
6. **Tailwind Classes**: `dark:` prefix works automatically with class-based mode

## Usage

### In Components

```vue
<template>
  <div class="bg-light dark:bg-surface">
    <p class="text-text-main">Content</p>
  </div>
</template>
```

### With CSS Variables

All components using CSS variables automatically adapt:

```css
.my-component {
  background: var(--color-light);
  color: var(--color-text-main);
  border: 1px solid var(--color-border);
}
```

## Testing

1. Toggle dark mode using the button in the header
2. Refresh page - preference should persist
3. Change system theme - should respect if no manual override
4. Check all components adapt correctly

## Notes

- No hardcoded colors - all use CSS variables
- Smooth transitions via CSS `transition` properties
- Accessible - proper ARIA labels on toggle
- Premium feel - sophisticated dark tones, not "gamer" aesthetic

