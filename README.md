# Sandeep Kumar Gupta | Portfolio Website

A modern, professional, and responsive personal portfolio website showcasing my expertise in AI/ML, Data Analysis, and Full-Stack Development.

🌐 **Live Demo:** [View Portfolio](https://portfolio-five-zeta-36.vercel.app/)

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![Next.js](https://img.shields.io/badge/Next.js-16.1-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, professional design with smooth Framer Motion animations
- 🌓 **Dark/Light Mode** - Toggle between themes with localStorage persistence
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Fast Performance** - Built with Next.js 16 for optimal loading speeds
- 🔍 **SEO Optimized** - Meta tags, Open Graph, and semantic HTML
- 📝 **Easy to Update** - All content managed in a single data file

## 🎯 Sections

| Section | Description |
|---------|-------------|
| **Hero** | Eye-catching introduction with animated elements |
| **About** | Personal bio, profile image, and downloadable resume |
| **Skills** | Animated skill bars for Programming, AI/ML, Web Tech, and Tools |
| **Projects** | 10+ AI/ML and Full-Stack projects with GitHub links |
| **Experience** | Work experience timeline with achievements |
| **Education** | Academic background and certifications |
| **Contact** | Contact form and social links |

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Deployment** | GitHub Pages / Vercel |

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles & Tailwind
│   │   ├── layout.tsx        # Root layout with SEO metadata
│   │   ├── page.tsx          # Main page component
│   │   └── favicon.ico       # Site favicon
│   ├── components/
│   │   ├── Header.tsx        # Navigation with mobile menu
│   │   ├── Footer.tsx        # Site footer
│   │   ├── ThemeProvider.tsx # Dark mode context provider
│   │   └── sections/
│   │       ├── Hero.tsx      # Hero section with CTA
│   │       ├── About.tsx     # About me section
│   │       ├── Skills.tsx    # Skills with progress bars
│   │       ├── Projects.tsx  # Project cards grid
│   │       ├── Experience.tsx # Timeline & certifications
│   │       └── Contact.tsx   # Contact form
│   └── lib/
│       └── data.ts           # All portfolio content (easy updates)
├── public/
│   ├── Resume.pdf            # Downloadable resume
│   └── profile.jpg           # Profile image
└── package.json
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/walker-arch/portfolio.git

# Navigate to project
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## ✏️ Customization

### Update Content (Easy!)

All content is in `src/lib/data.ts`:

```typescript
// Personal Info
export const personalInfo = {
    name: "Your Name",
    title: "Your Title",
    email: "your@email.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourprofile",
};

// Add/Edit Projects
export const projects = [
    {
        title: "Project Name",
        description: "Description",
        technologies: ["Tech1", "Tech2"],
        githubUrl: "https://github.com/...",
        featured: true,
    },
];
```

### Add Your Resume
Place your resume PDF in `public/` folder as `Resume.pdf`.

### Add Profile Image
Place your image in `public/` folder as `profile.jpg`.

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy to GitHub Pages
```bash
npm run build
# Upload .next folder to GitHub Pages
```

## 🎨 Design System

### Color Palette
| Color | Light Mode | Dark Mode |
|-------|------------|-----------|
| Primary | Blue `#3b82f6` | Blue `#60a5fa` |
| Accent | Purple `#8b5cf6` | Purple `#a78bfa` |
| Background | White `#ffffff` | Dark `#111827` |
| Text | Gray `#374151` | Gray `#e5e7eb` |

### Responsive Breakpoints
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 📊 Featured Projects

| Project | Technologies | Description |
|---------|-------------|-------------|
| **Wellness Whisper** | Python, AI/ML, Flask | AI-driven mental health platform |
| **AI Music Mood Classification** | ML, Audio Processing | Mood detection from music |
| **Student Networking Platform** | Flask/Django, REST APIs | Academic collaboration platform |
| **Fraud Detection System** | Scikit-learn, ML | Transaction fraud detection |
| **MNIST Digit Classification** | Keras, Deep Learning | Handwritten digit recognition |

## 👨‍💻 About Me

**Sandeep Kumar Gupta** - AI Developer & Analyst

- 🎓 B.Tech in CSE (ML & AI) from Quantum University
- 🔬 Passionate about Machine Learning and Data Analysis
- 💼 Experience with Google Cloud, Python, and Web Development
- 🏆 Google Cloud Arcade Facilitator | GDG Media Head

## 📞 Contact

- **Email:** 1021sandeepkumar@gmail.com
- **LinkedIn:** [sandeep-kumar-gupta1012](https://www.linkedin.com/in/sandeep-kumar-gupta1012/)
- **GitHub:** [walker-arch](https://github.com/walker-arch)
- **Location:** Gorakhpur, India

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ using Next.js & Tailwind CSS
  <br>
  ⭐ Star this repo if you find it helpful!
</p>
