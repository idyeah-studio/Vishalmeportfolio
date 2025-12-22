# Vishal Mehta - UX Portfolio

A clean, minimalist, Apple-style UX portfolio website built with React, Tailwind CSS, and Motion (Framer Motion).

## ✨ Features

- **5 Main Pages**: Home, Work, Case Studies, About, Contact
- **Apple-Style Design**: Premium typography, large spacing, soft gradients, subtle animations
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Smooth Animations**: Powered by Motion (Framer Motion)
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Built with Vite for lightning-fast builds

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm (or pnpm/yarn)

### Installation

1. **Clone the repository**
   ```bash
   cd ~/Documents/Personal
   git clone <your-repo-url> vishalme
   cd vishalme
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The optimized production files will be in the `dist/` folder.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Vercel auto-detects Vite and deploys

Or use Vercel CLI:
```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages

1. Update `vite.config.ts` base path:
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/',
     // ...
   })
   ```

2. Build and deploy:
   ```bash
   npm run build
   # Use gh-pages or GitHub Actions to deploy dist/ folder
   ```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 📝 Customization

### Update Case Studies

Edit `/src/app/data/caseStudies.ts` to add your own case studies:

```typescript
{
  id: "your-project-slug",
  title: "Your Project Title",
  valueStatement: "Brief value statement",
  thumbnail: "image-url",
  tags: ["UX", "Product Strategy"],
  // ... add your content
}
```

### Update Personal Info

- **About Page**: Edit `/src/app/pages/AboutPage.tsx`
- **Contact Info**: Edit `/src/app/pages/ContactPage.tsx`
- **Homepage Hero**: Edit `/src/app/pages/HomePage.tsx`

### Styling

- **Theme Colors**: Edit `/src/styles/theme.css`
- **Typography**: Edit `/src/styles/theme.css` and `/src/styles/fonts.css`
- **Tailwind Config**: Using Tailwind CSS v4 (no config file needed)

## 🗂️ Project Structure

```
vishalme/
├── src/
│   ├── app/
│   │   ├── components/      # Reusable components
│   │   ├── data/           # Case studies data
│   │   ├── pages/          # Main page components
│   │   └── App.tsx         # Main app component
│   └── styles/             # Global styles
├── index.html
├── package.json
└── vite.config.ts
```

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Motion** - Animations (Framer Motion)
- **React Router** - Routing
- **Vite** - Build tool
- **Lucide React** - Icons

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

This is a personal portfolio project, but suggestions are welcome! Feel free to open an issue or submit a pull request.

---

Built with ❤️ by Vishal Mehta
