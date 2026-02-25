# 🎨 Personal Portfolio — Shishanki Vishwakarma

A modern, animated **personal portfolio website** built with React and Framer Motion. Designed to showcase my projects, skills, and experience as a full-stack developer with a sleek dark aesthetic and smooth animations throughout.

🔗 **Live Demo:**[https://portfolio-iota-weld-99.vercel.app/]  
📁 **GitHub:** [github.com/shishvishwakarma995-png](https://github.com/shishvishwakarma995-png)

---

## ✨ Features

- 🎬 **Smooth Animations** — Page-wide Framer Motion animations with scroll-triggered reveals
- ⌨️ **Typewriter Effect** — Animated role text cycling through Frontend Developer, Django Dev, and more
- 🖱️ **Custom Cursor Glow** — Radial gradient that follows mouse movement
- 📱 **Fully Responsive** — Works beautifully on all screen sizes
- 🧭 **Sticky Navbar** — Transparent to frosted glass on scroll with smooth transition
- 👤 **About Section** — Profile photo with floating animated badges
- 📊 **Skills Section** — Animated progress bars with staggered reveal on scroll
- 🚀 **Projects Section** — Cards with live demo + GitHub links, featured & coming soon badges
- 📧 **Contact Section** — One-click email copy with clipboard feedback
- ⚡ **Fast Performance** — Vite build tool for instant HMR and optimized production builds

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 + Vite | Frontend framework & build tool |
| Framer Motion | Animations & scroll interactions |
| Tailwind CSS | Utility-first styling |
| JavaScript (ES6+) | Core logic |

---

## 📸 Sections

| Section | Description |
|---|---|
| **Hero** | Name, typewriter role animation, CTA buttons, scroll indicator |
| **About** | Profile photo, bio, floating badges, stats (projects, stack, passion) |
| **Skills** | Animated skill bars for 8 technologies + tool pills |
| **Projects** | 4 project cards with tech stack, live demo & GitHub links |
| **Contact** | Email copy button, GitHub link, footer |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/shishvishwakarma995-png/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── profile.jpg          # Profile photo
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky navigation
│   │   ├── Hero.jsx          # Landing section + typewriter
│   │   ├── About.jsx         # About me + stats
│   │   ├── Skills.jsx        # Skill bars + tool pills
│   │   ├── Projects.jsx      # Project cards
│   │   └── Contact.jsx       # Contact + footer
│   ├── App.jsx               # Root component + mouse tracking
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles + scrollbar
├── package.json
└── vite.config.js
```

---

## 🎯 Key Implementation Highlights

- **Scroll animations** — `useInView` from Framer Motion triggers animations only when section enters viewport (`once: true`)
- **Typewriter effect** — Custom `useEffect` hook manages character-by-character typing and deleting with configurable speed
- **Mouse glow** — Global `mousemove` event listener in `App.jsx` tracks cursor position for the radial glow effect
- **Navbar transition** — `scrollY > 50` toggles frosted glass background with `backdropFilter: blur()`
- **Staggered reveals** — Each skill bar and project card animates in with incremental `delay` for a polished feel

---

## 🚀 Projects Showcased

| Project | Tech | Status |
|---|---|---|
| 🔏 SignVault | React, TypeScript, Node.js, JWT, AWS S3 | 🚧 In Progress |
| 💼 Job Application Tracker | Django, Python, Bootstrap 5, SQLite | ✅ Live |
| 💰 Expense Tracker | React, Framer Motion, Recharts, Vite | ✅ Live |
| 🎨 Portfolio | React, Framer Motion, JavaScript | ✅ This site |

---

## 🌐 Deployment

To be deployed on **Vercel** with automatic deployments on every push to `main`.

---

## 👩‍💻 Author

**Shishanki Vishwakarma**  
📧 shishvishwakarma995@gmail.com  
🔗 [GitHub](https://github.com/shishvishwakarma995-png)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*Designed & Built with ❤️ by Shishanki Vishwakarma • 2026*
