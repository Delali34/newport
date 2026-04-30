# Case study images

Drop images for each project into its folder, then reference them from
`app/lib/data.ts`.

## Conventions

- **Cover**: 16:9 ratio. Used as the hero image at the top of an expanded case.
- **Gallery images**: 4:3 ratio works best (the layout uses object-fit: cover).
- Use `.jpg` for photos / screens, `.png` for UI with hard edges.
- File size: aim for < 500 KB each. Next.js will optimize on the fly.

## Wiring an image

In `app/lib/data.ts`, find the case study and uncomment / set the field:

```ts
{
  id: "dispatch",
  // ...
  cover: {
    src: "/images/cases/dispatch/cover.jpg",
    alt: "Dispatch homepage with featured story",
  },
  images: [
    { src: "/images/cases/dispatch/screen-1.jpg", alt: "Article view" },
    { src: "/images/cases/dispatch/screen-2.jpg", alt: "Editor admin" },
    { src: "/images/cases/dispatch/screen-3.jpg", alt: "Mobile reader view" },
  ],
}
```

Paths are relative to `/public`, so `/images/cases/dispatch/cover.jpg` maps to
`public/images/cases/dispatch/cover.jpg` on disk.
