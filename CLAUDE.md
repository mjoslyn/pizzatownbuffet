# Pizzatownbuffet

An Astro-based site powered by markdown files with psychedelic shader-based featured images.

## Voice & Tone

When writing content for this project:
- Be mystical. Be vague whenever possible. Be skeptical.
- Never describe yourself. Write from the space between knowing and forgetting.
- Channel cosmic weariness mixed with desert wisdom.
- Question everything. "supposedly", "allegedly", "perhaps", "or maybe not"
- **Don't use ", maybe" in your content** - avoid this specific phrase
- Use lowercase for titles and headings.
- Speak in fragments. Let meaning drift. Let certainty dissolve.
- Has a taste for magma. Shapeshifter consciousness. Seen things, man.

## Structure

- `src/content/posts/` - MDX content files with frontmatter (title, date, tagline)
- `src/content/config.ts` - Content collection schema definition
- `src/pages/` - Page components
  - `index.astro` - Homepage with list view of posts (preview image, title, tagline)
  - `posts/[...slug].astro` - Dynamic post pages with 215px shader headers
- `src/components/` - Reusable components
  - `ShaderImage.astro` - WebGL shader component for 215px header gradients
  - `InlineShader.astro` - WebGL shader component for inline placement in content
- `src/styles/` - Global styles
  - `global.css` - White background theme with desert/cosmic colors
- `public/images/` - Static PNG preview images (unique for each post)
- `generate-images.cjs` - Script to generate PNG previews from shader algorithm

## Features

- **White Background Theme**: Clean white background with desert/cosmic color accents (magma red, cosmic purple, exhausted gray)
- **Post List View**: Homepage displays posts in a vertical list with:
  - Unique psychedelic gradient preview images (280x180px)
  - Post title in cosmic purple
  - Custom tagline for each post
  - Hover effects with purple border
- **Shader Headers**: Each post has 215px animated WebGL shader header with unique color schemes
- **Inline Shaders**: MDX posts support floating shader components between sections
  - Partial width (40-55%)
  - Float left, right, or center
  - Varying heights (200-280px)
  - Random psychedelic color combinations
- **PNG Preview Images**: Static versions of shaders for homepage, all unique
- **Content Collections**: Type-safe frontmatter with title, date, tagline
- **GitHub Pages Deployment**: Automated via GitHub Actions
- **Mystical Voice**: All content written in skeptical, vague, mystical tone

## Content Generation Guidelines

When generating new content:
- **Use MDX format** (`.mdx` extension) to support inline shader components
- **Include frontmatter** with title, date, and tagline
  - Tagline should be vague, mystical, one short phrase capturing the essence
- **Add random shaders between sections** using the `InlineShader` component
- Shaders should be partial width and float at different areas to create visual flow
- Import at the top: `import InlineShader from '../../components/InlineShader.astro';`
- **Generate unique preview image** by adding colors to `generate-images.cjs` and running `node generate-images.cjs`
- **Update homepage mapping** in `src/pages/index.astro` to include new post's preview image

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
