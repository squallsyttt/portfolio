import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "modern-enterprise-website",
    title: "Modern Enterprise Website",
    period: {
      start: "2024",
      end: "2024",
    },
    link: "https://modern-enterprise-website.vercel.app/",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
    ],
    description: `🏢 **Premium Enterprise Website Design & Development**

🔗 **[View Live Demo →](https://modern-enterprise-website.vercel.app/)**

Client Brief: Create a modern enterprise website inspired by Stripe's premium design aesthetics

**Key Features:**
- 🎨 **Stripe-Inspired Design** - Clean, modern visual design with professional corporate identity
- ⚡ **Performance Optimized** - Next.js 13+ App Router with blazing-fast loading speeds
- 📱 **Fully Responsive** - Seamlessly adapts to all devices with perfect mobile experience
- 🌟 **Smooth Animations** - Framer Motion-powered interactive effects
- 🔍 **SEO Optimized** - Complete metadata and structured data implementation
- 🚀 **Vercel Deployment** - Automated CI/CD deployment pipeline

**Technical Highlights:**
- Full TypeScript type safety
- Tailwind CSS atomic styling system
- Component-based architecture
- Modern build toolchain

Project successfully launched and received exceptional client approval, perfectly capturing Stripe's design essence.`,
    isExpanded: true,
  },
  {
    id: "coming-soon",
    title: "🚧 More Projects Coming Soon",
    period: {
      start: "2024",
    },
    link: "",
    skills: ["Portfolio Update", "In Progress", "30-Day Challenge"],
    description: `🔥 **More exciting projects are being curated!**

As part of my international remote work journey, I'm currently:
- 📂 **Curating my best work** - Selecting projects that showcase my PHP, Python, and full-stack expertise
- 🌟 **Creating new showcase projects** - Building impressive demos for potential clients
- 📝 **Writing detailed case studies** - Documenting my problem-solving process and technical decisions

**Coming Soon:**
- Real-time communication systems (Workerman-based)
- WordPress custom solutions
- CRM system implementations
- Full-stack web applications

Stay tuned for updates as I add my portfolio projects over the next few days! 🚀

*This is Day 1 of my 30-day challenge - exciting things ahead!*`,
    isExpanded: false,
  },
];
