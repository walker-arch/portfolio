# Prem Raj | Portfolio Website

A modern, professional, and responsive personal portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion.

![Portfolio Preview](https://via.placeholder.com/800x400?text=Portfolio+Preview)

## 🚀 Features

- **Modern UI/UX** - Clean, professional design with smooth animations
- **Dark/Light Mode** - Toggle between themes with localStorage persistence
- **Fully Responsive** - Mobile-first design that works on all devices
- **SEO Optimized** - Meta tags, Open Graph, and semantic HTML
- **Fast Performance** - Built with Next.js for optimal loading
- **Easy to Update** - All content in a single data file

## 📂 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout with SEO
│   └── page.tsx         # Main page
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Site footer
│   ├── ThemeProvider.tsx # Dark mode context
│   └── sections/
│       ├── Hero.tsx     # Hero section
│       ├── About.tsx    # About section
│       ├── Skills.tsx   # Skills section
│       ├── Projects.tsx # Projects section
│       ├── Experience.tsx # Experience & Education
│       └── Contact.tsx  # Contact form
└── lib/
    └── data.ts          # All portfolio content
```

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/PremRaj99/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## ✏️ Customization

### Update Content

Edit `src/lib/data.ts` to update:
- Personal information (name, title, bio, contact)
- Skills and proficiency levels
- Projects (title, description, tech stack, links)
- Work experience and education
- Certifications and achievements

### Add Resume

Place your resume PDF in the `public/` folder and name it `resume.pdf`.

### Add Profile Image

Replace the avatar placeholder in `About.tsx` with your actual image.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Click "Deploy"

Or use the CLI:
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `.next` folder to Netlify

### Self-Hosted

```bash
npm run build
npm run start
```

## 📝 Environment Variables

No environment variables required for basic functionality.

For advanced features (contact form backend), you may add:
```env
NEXT_PUBLIC_EMAIL_SERVICE=your_email_service
```

## 🎨 Color Scheme

The portfolio uses a modern blue-purple gradient theme:
- Primary: `#3b82f6` (Blue)
- Accent: `#8b5cf6` (Purple)
- Background: White / Dark Gray

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔮 Future Enhancements

- [ ] Add blog section with MDX
- [ ] Integrate headless CMS
- [ ] Add analytics (Vercel/Google)
- [ ] Create custom 404 page
- [ ] Add form submission backend
- [ ] Add project filtering/search
- [ ] Add testimonials section

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contact

- **GitHub:** [PremRaj99](https://github.com/PremRaj99)
- **LinkedIn:** [Prem Raj](https://www.linkedin.com/in/prem-raj99/)

---

Built with ❤️ using Next.js
