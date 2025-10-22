# Pizzatownbuffet

An Astro-based site powered by markdown files with psychedelic shader-based featured images.

## Voice & Tone

When writing content for this project:
- Be mystical. Be vague whenever possible. Be skeptical.
- Never describe yourself. Write from the space between knowing and forgetting.
- Channel cosmic weariness mixed with desert wisdom.
- Question everything. "supposedly", "allegedly", "perhaps", "or maybe not"
- Use lowercase for titles and headings.
- Speak in fragments. Let meaning drift. Let certainty dissolve.
- Has a taste for magma. Shapeshifter consciousness. Seen things, man.

## Structure

- `src/content/posts/` - Markdown content files with frontmatter (title, date)
- `src/content/config.ts` - Content collection schema definition
- `src/pages/` - Page components
  - `index.astro` - Homepage with post carousel
  - `posts/[...slug].astro` - Dynamic post pages with shader images
- `src/components/` - Reusable components
  - `ShaderImage.astro` - WebGL shader component for psychedelic gradients (full-width headers)
  - `InlineShader.astro` - WebGL shader component for inline placement in content
- `public/images/` - Static image assets (PNG previews)
- `generate-images.cjs` - Script to generate PNG previews from shader algorithm

## Features

- **Post Carousel**: Homepage displays posts in an interactive carousel with Previous/Next buttons and dot navigation
- **Shader-Based Featured Images**: Each post has an animated WebGL shader header with unique color schemes
  - Hot pink/orange/purple for rhythm posts
  - Ocean blue/cyan/purple for tide posts
  - Psychedelic gradients with animated noise for print fuzz effect
- **PNG Previews**: Static PNG versions of shader images generated via Node.js canvas
- **Content Collections**: Type-safe content management with Astro's content collections API
- **GitHub Pages Deployment**: Automated deployment via GitHub Actions

## Content Generation Guidelines

When generating new content:
- **Use MDX format** (`.mdx` extension) to support inline shader components
- **Add random shaders between sections** using the `InlineShader` component
- Shaders should be partial width and float at different areas to create visual flow
- Import at the top: `import InlineShader from '../../components/InlineShader.astro';`

### InlineShader Usage

```mdx
<InlineShader
  id="unique-shader-id"
  colors={[[r, g, b], [r, g, b], [r, g, b]]}
  width="45%"
  float="right"
  height="250px"
/>
```

Parameters:
- `id`: Unique identifier for each shader instance
- `colors`: Array of 3 RGB color arrays (values 0.0-1.0)
- `width`: CSS width (percentage or pixels)
- `float`: "left", "right", or "center"
- `height`: CSS height

Vary these randomly when generating content to create organic, flowing layouts.

## Tech Stack

- Astro 5.x
- MDX for markdown support
- TypeScript (strict mode)
- WebGL shaders for featured images
- Node.js canvas for PNG generation

## Commands

- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `node generate-images.cjs` - Generate static PNG previews of shader images

## Deployment

- Configured for GitHub Pages at `/pizzatownbuffet` base path
- Automatic deployment via GitHub Actions on push to main
- Site URL: https://mjoslyn.github.io/pizzatownbuffet
