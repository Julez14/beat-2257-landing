# AI Coding Instructions for beat-2257-landing

This is a Next.js 15 landing page for VibeLearn (AI productivity tool for students) with advanced visual editing capabilities integrated via Orchids visual editing system.

## Architecture Overview

**Visual Editing System**: The core differentiator is the sophisticated visual editing integration:

- `src/visual-edits/component-tagger-loader.js` - Webpack loader that instruments JSX elements with `data-orchids-id` attributes for visual editing
- `src/visual-edits/VisualEditsMessenger.tsx` - Complex React component (2K+ lines) managing real-time visual editing communication between iframe and parent
- `next.config.ts` configures Turbopack to use the component tagger loader for `.jsx/.tsx` files

**Component Architecture**:

- `src/app/page.tsx` - Main landing page composed of section components
- `src/components/sections/` - Landing page sections (hero, trusted-by, features, etc.)
- `src/components/ui/` - Comprehensive shadcn/ui component library
- `src/components/ErrorReporter.tsx` - Error reporting for visual editing environment

## Key Development Patterns

### Visual Editing Integration

Every interactive component gets auto-tagged with location metadata:

```tsx
// Loader automatically transforms JSX elements:
<div className="hero-section">
// Becomes: <div data-orchids-id="src/components/hero.tsx:15:8" data-orchids-name="div" className="hero-section">
```

### Styling System

- **Tailwind CSS v4** with custom design tokens in `src/app/globals.css`
- **shadcn/ui** components configured in `components.json` with "new-york" style
- **Custom utility**: `src/lib/utils.ts` exports `cn()` function for conditional class merging
- **Color system**: Sky blue primary (#1B8DD1), navy foreground (#1E3A5F), light backgrounds

### Component Patterns

- Sections use semantic HTML with accessibility considerations
- Complex inline button styling patterns (see `src/components/sections/header.tsx` for 3D shadow effects)
- Image optimization via Next.js `<Image>` with remote Supabase CDN sources
- Responsive design with mobile-first approach using Tailwind breakpoints

## Development Workflow

### Commands

```bash
pnpm dev          # Start development (uses --turbopack)
pnpm build        # Production build
pnpm lint         # ESLint with Next.js config + import rules
```

### Configuration

- **Package manager**: Uses both pnpm (lockfile present) and bun (lockfile present) - prefer pnpm
- **TypeScript**: Strict mode enabled, paths configured for `@/*` imports
- **ESLint**: Relaxed rules for visual editing (no-unescaped-entities, no-unused-vars off)

### External Dependencies

- **Next.js 15** with React 19 (bleeding edge)
- **Framer Motion** for animations
- **Radix UI** primitives via shadcn/ui
- **Lucide React** for icons
- **Three.js ecosystem** for 3D elements (note: three-fiber elements excluded from visual editing)

## Adding New Components

1. **Location**: Place in appropriate directory (`src/components/sections/` for landing sections, `src/components/ui/` for reusable UI)
2. **Styling**: Use `cn()` utility for conditional classes, follow established color tokens
3. **Visual editing**: Components automatically get tagging - no manual data attributes needed
4. **Images**: Use Next.js `<Image>` with proper sizing, prefer CDN sources from Supabase storage
5. **Responsiveness**: Follow mobile-first patterns seen in existing sections

## Error Handling

The `ErrorReporter` component provides development error capture and reporting to parent frames. Visual editing mode includes comprehensive error boundary handling for the iframe environment.

## Critical Files to Preserve

- `src/visual-edits/` directory - Core visual editing functionality
- `next.config.ts` - Turbopack loader configuration
- `src/app/globals.css` - Design system and custom properties
- `components.json` - shadcn/ui configuration

When modifying core files, ensure visual editing capability remains intact as it's the primary value proposition of this application.
