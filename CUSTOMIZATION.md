# Customization Guide

This guide will help you customize the portfolio for your own use.

## Quick Start Customization

### 1. Personal Information

**Update Navigation & Footer**
- Edit `/src/app/components/Navigation.tsx` - Change "Vishal Mehta" to your name
- Edit `/src/app/components/Footer.tsx` - Update social links and email

**Update Contact Page**
- Edit `/src/app/pages/ContactPage.tsx`
- Change email addresses, LinkedIn, and GitHub URLs
- Update the contact methods array

### 2. Case Studies

**Edit `/src/app/data/caseStudies.ts`**

Replace the three sample case studies with your own projects:

```typescript
{
  id: "your-project-slug",           // URL-friendly ID
  title: "Your Project Title",
  valueStatement: "One-line impact",
  thumbnail: "image-url",             // Project thumbnail
  tags: ["UX", "AI", "etc"],
  hero: "hero-image-url",
  impactStatement: "Key achievement",
  role: "Your role",
  team: "Team composition",
  timeline: "Project duration",
  problem: "Problem statement",
  process: [                          // Array of process steps
    "Step 1",
    "Step 2",
  ],
  keyDecisions: [                     // Array of decisions
    "Decision 1",
    "Decision 2",
  ],
  aiEnabled: {                        // Optional - only for AI projects
    ideation: "How AI helped...",
    research: "How AI helped...",
    uiVariations: "How AI helped...",
    automation: "How AI helped...",
    iteration: "How AI helped...",
  },
  impact: {
    metrics: [
      "Metric 1",
      "Metric 2",
    ],
    results: "Overall results",
  },
  reflection: "Key learnings",
  isAIEnhanced: true,                 // true or false
}
```

### 3. About Page

**Edit `/src/app/pages/AboutPage.tsx`**

Update the following sections:
- Personal bio text
- Profile image URL
- Achievements arrays
- Design philosophy values
- Skills & expertise tags

### 4. Homepage

**Edit `/src/app/pages/HomePage.tsx`**

- Update headline text
- Modify subheadline
- Change badge text if needed

### 5. Images

Replace placeholder images with your own:

**Where to find images:**
- [Unsplash](https://unsplash.com) - Free high-quality photos
- [Pexels](https://pexels.com) - Free stock photos
- Your own project screenshots

**Image requirements:**
- Portrait: ~600x800px (3:4 aspect ratio)
- Case study thumbnails: ~1200x750px (16:10 ratio)
- Hero images: ~1920x820px (21:9 ratio)
- Optimize images for web (<500KB recommended)

### 6. Colors & Styling

**Edit `/src/styles/theme.css`**

Customize the color palette:
```css
:root {
  --background: #ffffff;      /* Main background */
  --foreground: #111111;      /* Main text color */
  --accent: #e9ebef;          /* Accent color */
  /* Add your brand colors */
}
```

### 7. Typography

**Edit `/src/styles/fonts.css`**

Change the font stack or add custom fonts:
```css
body {
  font-family: 'Your Font', -apple-system, sans-serif;
}
```

To add Google Fonts:
1. Import at top of `fonts.css`:
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
   ```
2. Update font-family

### 8. Animations

**Adjust animation speed** in component files:

Find `transition={{ duration: 0.6 }}` and adjust values:
- Slower: increase duration (e.g., 0.8, 1.0)
- Faster: decrease duration (e.g., 0.4, 0.3)

**Easing functions:**
- Current: `[0.22, 1, 0.36, 1]` (Apple-style easing)
- Alternative options: "easeIn", "easeOut", "easeInOut", "linear"

## Advanced Customization

### Add New Pages

1. Create page file in `/src/app/pages/NewPage.tsx`
2. Add route in `/src/app/App.tsx`:
   ```tsx
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Add link in Navigation

### Modify Layout

- Edit `/src/app/components/Navigation.tsx` for header changes
- Edit `/src/app/components/Footer.tsx` for footer changes

### Add Components

Create new components in `/src/app/components/`:
- Use existing components as templates
- Import Motion for animations
- Use Lucide React for icons

### SEO Optimization

Add meta tags in `index.html`:
```html
<head>
  <title>Your Name - UX Designer</title>
  <meta name="description" content="Your description">
  <meta property="og:title" content="Your Name">
  <meta property="og:description" content="Your description">
  <meta property="og:image" content="preview-image-url">
</head>
```

## Testing

Test your changes:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## Getting Help

- Check component documentation in files
- Review existing code patterns
- Test in different browsers
- Validate HTML and accessibility

## Performance Tips

1. Optimize images (WebP format, proper sizing)
2. Minimize custom CSS
3. Keep animation durations reasonable
4. Test on mobile devices
5. Use browser DevTools for debugging

---

Questions? Feel free to modify anything to suit your needs!
