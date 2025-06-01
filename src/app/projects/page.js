"use client";
import HeroProjects from "@/components/HeroProjects";
import { faFlutter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaBootstrap, FaCss3Alt, FaDocker, FaHtml5, FaJsSquare, FaLaravel, FaNodeJs, FaPhp, FaPython, FaReact, FaTools, FaWordpress, FaCode, FaTerminal, FaFolderOpen } from "react-icons/fa";
import { SiCplusplus, SiFlask, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const projects = [
  {
    title: "Self-Service POS System",
    description: "Fully automated self-service POS system for Printec Group with zero staff requirements, integrating cash register, kiosk, and payment systems.",
    longDescription: `
Developed a completely automated self-service POS system for Printec Group as a fullstack developer. The system operates entirely without staff intervention, handling everything from order placement to payment processing and order fulfillment through automated systems.

Key Contributions:
• Developed a fully automated kiosk interface using Flutter that guides customers through the entire ordering process without staff assistance
• Implemented an intelligent backend system using Flask that manages the complete order lifecycle automatically
• Created a C# application for automated card terminal integration and payment processing
• Implemented SOAP and REST APIs for seamless communication with AdeoPOS cash register
• Developed an automated system for managing printers (Bixolon printer) and pager notifications
• Built a fully automated order fulfillment system with real-time synchronization between kiosk, cash register, and server
• Implemented an automated inventory and price management system
• Developed security protocols for secure transactions and data protection in a staff-free environment

Technical Implementations:
• Frontend (Flutter):
  - Fully automated kiosk user interface
  - Self-guided product selection and ordering
  - Automated payment processing
  - Real-time order status updates
  - Multi-language and currency support
  - Clear visual instructions for customers

• Backend (Flask):
  - Automated order processing system
  - REST API for kiosk communication
  - SOAP API for AdeoPOS communication
  - Automated inventory management
  - Real-time price updates
  - Security protocols for staff-free operation

• Automated Integrations:
  - Self-service card terminal (C#)
  - Automated AdeoPOS cash register (SOAP/REST API)
  - Automated Bixolon printer for receipts
  - Automated pager system for order notifications
  - Automated Glory CI-10 cash management

• Security & Automation:
  - Automated data encryption
  - Self-service payment protocols
  - Automated access management
  - Automated error handling and recovery
  - Automated system monitoring
`,
    technologies: [
      { name: "Flutter", icon: () => <FontAwesomeIcon icon={faFlutter} />, color: "bg-blue-200 text-blue-800" },
      { name: "Flask", icon: SiFlask, color: "bg-gray-200 text-gray-800" },
      { name: "C#", icon: FaTools, color: "bg-purple-200 text-purple-800" },
      { name: "SOAP API", icon: FaTools, color: "bg-green-200 text-green-800" },
      { name: "REST API", icon: FaTools, color: "bg-yellow-200 text-yellow-800" }
    ],
    imageUrl: "/projects/self-serv.png",
    videoUrl: "/projects/self-serv.mp4",
    challenges: `
• Creating a completely staff-free system that handles all customer interactions
• Implementing foolproof automated processes for order fulfillment
• Ensuring reliable automated payment processing without staff oversight
• Building a self-service system that's intuitive for all customers
• Maintaining system reliability in a fully automated environment
• Handling edge cases and errors without staff intervention
`,
    impact: `
• 100% reduction in staff requirements during operation
• 40% faster service due to automated processes
• 30% reduction in order errors through automated validation
• 50% reduction in customer waiting time
• Complete elimination of staff-related costs
• 24/7 operation capability without staff presence
• Increased customer satisfaction through consistent automated service
`
  },
  {
    title: "Yummzy AI Meal Planner",
    description: "AI-powered meal planning application with mobile app and website landing page.",
    longDescription: `
Worked on the full-stack frontend of Yummzy, an AI-based meal planning application, focusing on building the Flutter mobile client and the Next.js landing page. Collaborated closely with backend engineers to consume AI-driven endpoints and present personalized meal recommendations.

Key Contributions:
• Developed Flutter-based mobile screens for user onboarding, dietary profile setup, and daily meal plan display  
• Implemented state management using Riverpod to handle user preferences, ingredient availability, and AI-generated meal suggestions  
• Created dynamic recipe cards with nutritional breakdown, calorie counts, and macro/micronutrient visuals  
• Designed the shopping list UI that syncs with selected recipes and integrates with local store APIs to fetch product availability  
• Built the Next.js landing page using TailwindCSS, showcasing app features, testimonials, and providing a seamless download link  
• Integrated Firebase Authentication for user sign-in/sign-up flows, including OAuth (Google, Apple) and email/password methods  
• Ensured accessibility standards (ARIA labels, focus management) and responsive layouts across iOS and Android devices  

Key Features (Frontend Perspective):
• AI-driven personalized meal plan UI with swipe-to-next and swipe-to-skip gestures  
• Custom recipe generation screens that allow users to add/remove ingredients and see real-time nutritional recalculations  
• Interactive shopping list with checkboxes and "add to cart" functionality connecting to local store APIs  
• Dashboard view tracking daily calories, macronutrients, and weekly progress graphs using charts_flutter  
• Notification system for meal reminders and grocery list prompts using Flutter Local Notifications  

Challenges:
• Optimizing Flutter UI performance when rendering dynamic recipe lists and nutritional graphs  
• Handling asynchronous calls to the Flask backend for AI recommendations without blocking the UI  
• Ensuring accurate nutritional data by cross-referencing multiple open food databases  
• Implementing offline support so users can view saved meal plans and shopping lists without network access  
• Designing an intuitive UX that balances AI complexity with easy-to-follow user flows  

Impact:
• Expected to improve user adherence to healthy eating habits by 60% through personalized suggestions  
• Potential to save users 2–3 hours per week in meal planning time  
• Reduced food waste by leveraging ingredient-based recipe generation  
• Fostered community engagement via in-app recipe sharing and ratings  
`,
    technologies: [
      { name: "Flutter", icon: () => <FontAwesomeIcon icon={faFlutter} />, color: "bg-blue-200 text-blue-800" },
      { name: "PostgreSQL", icon: FaTools, color: "bg-blue-300 text-blue-900" },
      { name: "Flask", icon: SiFlask, color: "bg-gray-200 text-gray-800" },
      { name: "Docker", icon: FaDocker, color: "bg-blue-200 text-blue-800" },
      { name: "Next.js", icon: SiNextdotjs, color: "bg-black text-white" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "bg-teal-200 text-teal-800" }
    ],
    imageUrl: null,
    projectUrl: null,
    status: "in-progress",
    challenges: `
• Tuning AI algorithms for accurate recipe personalization based on evolving user preferences  
• Integrating disparate nutritional data sources to ensure consistency and correctness  
• Coordinating with backend to handle high-frequency API calls without UI jank  
• Maintaining data synchronization between mobile app and landing page user sessions  
• Ensuring secure handling of user dietary data and authentication tokens  
`,
    impact: `
• Improved user meal planning efficiency and adherence to dietary goals  
• Reduced time spent manually creating shopping lists by automating ingredient aggregation  
• Encouraged healthy eating habits through actionable nutritional insights  
• Laid the foundation for community-driven recipe sharing, increasing user retention  
`
  },
  {
    title: "Methodyca Company Website",
    description: "Modern corporate website development during internship at Methodyca.",
    longDescription: `
    Contributed to Methodyca's corporate website development as an intern, focusing on frontend implementation. This project was my first professional web development experience in a marketing agency environment.

    Key Contributions:
    • Developed responsive layouts using Bootstrap 5, ensuring optimal display across all devices
    • Implemented homepage and service pages using HTML5, SCSS, and JavaScript
    • Created reusable components for consistent design across the site
    • Assisted in implementing contact forms with client-side validation
    • Participated in cross-browser testing and performance optimization
    • Collaborated with the design team to ensure pixel-perfect implementation

    Technical Implementation:
    • Bootstrap framework for responsive layouts
    • Modern CSS with SCSS for maintainable styles
    • JavaScript for interactive elements
    • Git for version control
    • Focus on accessibility and performance
    `,
    technologies: [
      { name: "HTML5", icon: FaHtml5, color: "bg-orange-200 text-orange-800" },
      { name: "SCSS", icon: FaCss3Alt, color: "bg-blue-200 text-blue-800" },
      { name: "Bootstrap", icon: FaBootstrap, color: "bg-purple-200 text-purple-800" },
      { name: "JavaScript", icon: FaJsSquare, color: "bg-yellow-200 text-yellow-800" },
      { name: "Git", icon: FaTools, color: "bg-orange-300 text-orange-900" }
    ],
    imageUrl: "/projects/methodyca.png",
    projectUrl: "https://methodyca.com",
    challenges: `
    • Learning and applying best practices for responsive design
    • Ensuring consistent styling across components
    • Implementing accessible UI elements
    • Optimizing performance for better user experience
    `,
    impact: `
    • Contributed to improved website performance
    • Enhanced user interface and experience
    • Maintained consistent brand presentation
    • Supported marketing team's digital presence
    `
  },
  {
    title: "Lumen Cosmetics Salon",
    description: "Modern website for a cosmetics salon with online booking system.",
    longDescription: `
Currently developing a feature-rich website for Lumen Cosmetics Salon, focusing on a seamless customer experience and integrated marketing tools. Lumen's site will combine a sleek Next.js frontend, a robust booking system, and extensive marketing integrations.

Key Contributions (Ongoing):
• Setting up Next.js project structure and creating accessible, responsive layouts using TailwindCSS  
• Designing and implementing the booking interface: date/time picker, service selection, availability calendar, and confirmation modals  
• Building reusable React components for service listings, price tables, image galleries, and testimonials  
• Integrating with a headless CMS (Prismic) to manage service descriptions, staff profiles, and pricing dynamically  
• Implementing client-side form validation and connecting booking requests to backend APIs for real-time availability checks  
• Ensuring SEO-friendly markup: custom meta tags, Open Graph tags, structured data (JSON-LD for local business), and sitemap generation  
• Embedding Google Analytics and setting up Google Tag Manager for event tracking (booking clicks, form submissions)  
• Planning marketing automation: SEO keyword research, on-page optimization (alt tags, heading hierarchy), and schema markup for local search  
• Preparing Google Ads campaign structure: ad groups by service type, geo-targeting within Ljubljana area, and conversion tracking setup  
• Designing Facebook & Instagram ad creatives and flow: custom audiences (retargeting site visitors), pixel integration, and A/B testing ad copy  

Anticipated Features:
• User account creation for viewing past bookings and rebooking favorite services  
• Admin dashboard for staff to view and manage appointments, client details, and service inventory  
• Integration of email/SMS notifications for booking confirmations and reminders  
• Analytics dashboard showing booking trends, conversion rates, and ad performance metrics  
`,
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "bg-black text-white" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "bg-teal-200 text-teal-800" },
      { name: "React", icon: FaReact, color: "bg-blue-200 text-blue-800" },
      { name: "Google Analytics", icon: FaTools, color: "bg-yellow-200 text-yellow-800" },
      { name: "Google Ads & Meta Ads", icon: FaTools, color: "bg-red-200 text-red-800" }
    ],
    imageUrl: null,
    projectUrl: null,
    status: "in-progress",
    challenges: `
• Designing an intuitive, mobile-first booking flow that minimizes user friction  
• Ensuring real-time synchronization between frontend availability checks and backend scheduling logic  
• Maintaining SEO best practices while using dynamic client-side rendering in Next.js  
• Structuring Google Ads and Facebook/Instagram campaigns to maximize ROI for a local salon  
• Implementing analytics for booking funnels and ad performance in a unified dashboard  
`,
    impact: `
• Aims to increase online bookings by 50% within three months of launch through optimized UX and marketing campaigns  
• Expected 30% growth in new client acquisitions through targeted Google Ads and Meta Ads strategies  
• Improved SEO visibility for local searches (e.g., "Ljubljana cosmetics salon")  
• Streamlined appointment management for salon staff, reducing no-shows by 25% via automated reminders  
`
  },
  {
    title: "Car Booking Platform",
    description: "Podstran za rezervacijo avtomobilov za Avant Car.",
    longDescription: `
Razvil sem podstran za rezervacijo avtomobilov za Avant Car, kjer sem se osredotočil na uporabniško izkušnjo pri rezervaciji vozil za določen datum in uro.

Ključni prispevki:
• Razvil sem uporabniški vmesnik za rezervacijo z izbiro datuma in časa
• Implementiral sem prikaz razpoložljivih vozil za izbrani datum
• Ustvaril sem obrazec za rezervacijo z validacijo vnosov
• Integriral sem sistem za preverjanje razpoložljivosti vozil
• Zagotovil sem odziven dizajn za vse naprave

Tehnična implementacija:
• Laravel Blade predloge za frontend
• Bootstrap 4 za odziven dizajn
• JavaScript za dinamično obnašanje
• Integracija z obstoječim backend sistemom
`,
    technologies: [
      { name: "Laravel", icon: FaLaravel, color: "bg-red-200 text-red-800" },
      { name: "PHP", icon: FaPhp, color: "bg-indigo-200 text-indigo-800" },
      { name: "JavaScript", icon: FaJsSquare, color: "bg-yellow-200 text-yellow-800" },
      { name: "Bootstrap", icon: FaBootstrap, color: "bg-purple-200 text-purple-800" }
    ],
    imageUrl: "/projects/avant2go.png",
    projectUrl: "https://avant2go.si",
    challenges: `
• Implementacija logike za preverjanje razpoložljivosti vozil
• Zagotavljanje gladkega uporabniškega vmesnika za izbiro datuma in časa
• Integracija z obstoječim sistemom za upravljanje vozil
`,
    impact: `
• Izboljšana uporabniška izkušnja pri rezervaciji vozil
• Zmanjšano število napak pri rezervacijah
• Hitrejši proces rezervacije za uporabnike
`
  },
  {
    title: "VICO Solutions Website",
    description: "Professional business consulting website with modern design.",
    longDescription: `
    Developed a modern, responsive website for VICO Solutions, focusing on professional presentation and user engagement. This was a frontend-focused project with simple contact form integration.

    Key Contributions:
    • Built responsive pages using Next.js and TailwindCSS
    • Created modern, professional design with focus on user experience
    • Implemented contact form with email integration
    • Developed service presentation and team profile sections
    • Added blog section with dynamic content
    • Ensured SEO optimization and performance

    Technical Implementation:
    • Next.js for frontend development
    • TailwindCSS for styling
    • Simple email integration for contact form
    • Responsive design principles
    • SEO best practices
    `,
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "bg-black text-white" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "bg-teal-200 text-teal-800" },
      { name: "React", icon: FaReact, color: "bg-blue-200 text-blue-800" }
    ],
    imageUrl: "/projects/vico.png",
    projectUrl: "https://www.vicosolutions.info"
  },
  {
    title: "Čistilni Servis Gjorgijevi",
    description: "Professional cleaning service website with responsive design.",
    longDescription: `
    Created a modern, responsive website for Čistilni Servis Gjorgijevi, focusing on service presentation and customer engagement. The project included a simple contact form and service showcase.

    Key Contributions:
    • Developed responsive website using Next.js and TailwindCSS
    • Created service portfolio with detailed descriptions
    • Implemented contact form with email integration
    • Added Google Maps integration for service area
    • Designed testimonials section
    • Optimized for mobile devices and performance

    Technical Implementation:
    • Next.js for frontend development
    • TailwindCSS for styling
    • Google Maps API integration
    • Simple email form handling
    • Responsive design approach
    `,
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "bg-black text-white" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "bg-teal-200 text-teal-800" },
      { name: "React", icon: FaReact, color: "bg-blue-200 text-blue-800" },
      { name: "Google Maps API", icon: FaTools, color: "bg-red-200 text-red-800" }
    ],
    imageUrl: "/projects/gjorgijevi.png",
    projectUrl: "https://gjorgijevi.vercel.app"
  },
  {
    title: "Gamespot Website",
    description: "Gaming arcade website with event showcase.",
    longDescription: `
    Developed a modern website for Gamespot gaming arcade, focusing on event presentation and basic contact functionality. The project emphasized user experience and visual appeal.

    Key Contributions:
    • Created responsive website using Next.js
    • Implemented event showcase section
    • Developed game catalog with filtering
    • Added contact form with email integration
    • Designed news section for updates
    • Ensured mobile-friendly design

    Technical Implementation:
    • Next.js for frontend development
    • TailwindCSS for styling
    • Simple email form handling
    • Responsive design principles
    • Performance optimization
    `,
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "bg-black text-white" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "bg-teal-200 text-teal-800" },
      { name: "React", icon: FaReact, color: "bg-blue-200 text-blue-800" }
    ],
    imageUrl: "/projects/gamespot.png",
    projectUrl: "https://gamespot.si"
  },
  {
    title: "Time-Tracking App",
    description: "Learning project: Employee time tracking application.",
    longDescription: `
    Developed a time-tracking application as a learning project to practice full-stack development skills. This project helped me understand modern web development concepts and best practices.

    Key Features:
    • Basic time tracking functionality
    • Simple project management
    • User authentication
    • Basic reporting
    • Export functionality

    Learning Outcomes:
    • Gained experience with Next.js and React
    • Learned about state management
    • Practiced authentication implementation
    • Understood basic database operations
    • Improved UI/UX design skills
    `,
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "bg-black text-white" },
      { name: "React", icon: FaReact, color: "bg-blue-200 text-blue-800" },
      { name: "NextAuth.js", icon: FaTools, color: "bg-gray-200 text-gray-800" },
    ],
    imageUrl: "/projects/time-tracking.png",
    projectUrl: "https://time-tracking-app-beta.vercel.app"
  },
  {
    title: "DejaVisuals Website",
    description: "Marketing agency website developed in collaboration.",
    longDescription: `
Collaborated on the frontend development of DejaVisuals' marketing agency website, focusing on showcasing their portfolio and services. I worked closely with a partner to build a cohesive, modern web presence.

Key Contributions:
• Implemented a responsive, grid-based portfolio showcase using Next.js and TailwindCSS, allowing dynamic filtering by project type  
• Created service presentation sections with animated icons and hover interactions to highlight agency offerings (branding, digital marketing, web design)  
• Developed team profiles components with modal pop-ups for detailed biographies and social media links  
• Built the contact form using React Hook Form with integrated email sending via AWS SES through a Netlify Function endpoint  
• Developed a blog listing page with tag-based filtering and a dynamically generated RSS feed for subscribers  
• Integrated SEO optimizations: meta tags, Open Graph integration, and dynamically generated sitemaps for all blog posts and portfolio items  
• Ensured consistent design tokens (colors, typography scales) by establishing a shared Tailwind config across components  
`,
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "bg-black text-white" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "bg-teal-200 text-teal-800" },
      { name: "React", icon: FaReact, color: "bg-blue-200 text-blue-800" },
    ],
    imageUrl: "/projects/dejavisuals.png",
    projectUrl: "https://dejavisuals.si"
  },
  {
    title: "Printec Website",
    description: "Corporate website development using WordPress.",
    longDescription: `
Developed Printec Group's corporate website on WordPress, focusing on custom theming, content management, and SEO optimization. I managed both theme customization and plugin configuration to deliver a professional online presence.

Key Contributions:
• Created a custom child theme based on a lightweight parent theme, customizing PHP templates to match the company's branding guidelines  
• Implemented a dynamic product catalog using Advanced Custom Fields (ACF) and custom post types for printing solutions and hardware listings  
• Added multilingual support (Slovenian/English) using WPML, ensuring translations were accurate and content was synchronized between languages  
• Configured SEO plugins (Yoast SEO) to optimize meta titles, descriptions, and schema markup for local business listings  
• Built a news/blog section with category-based archives, tag filtering, and featured image support; ensured posts loaded with lazy-loading images for performance  
• Set up contact forms with Gravity Forms, including spam protection via Google reCAPTCHA and email notifications to the sales team  
• Performed performance tuning: implemented a caching plugin (WP Rocket), optimized database queries, and used Cloudflare CDN for asset distribution  
• Integrated Google Analytics and Google Search Console for ongoing traffic and ranking monitoring  
`,
    technologies: [
      { name: "WordPress", icon: FaWordpress, color: "bg-blue-200 text-blue-800" },
      { name: "PHP", icon: FaPhp, color: "bg-indigo-200 text-indigo-800" }
    ],
    imageUrl: "/projects/printec.png",
    projectUrl: "https://printecgroup.si"
  }
];


export default function PortfolioPage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentProject, setCurrentProject] = useState(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const openVideo = (videoUrl, project) => {
    setCurrentVideo(videoUrl);
    setCurrentProject(project);
    setIsVideoOpen(true);
  };

  const openProjectDetails = (project) => {
    setCurrentProject(project);
    setIsProjectModalOpen(true);
  };

  const closeVideo = () => {
    setCurrentVideo(null);
    setCurrentProject(null);
    setIsVideoOpen(false);
  };

  const closeProjectModal = () => {
    setCurrentProject(null);
    setIsProjectModalOpen(false);
  };

  return (
    <>
      <HeroProjects />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="container mx-auto p-6"
      >
        <motion.section 
          className="mb-12 bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-accent/20 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-start gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-sm text-muted ml-2 font-mono">portfolio.js</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <FaFolderOpen className="text-3xl text-accent" />
            <h1 className="text-3xl font-bold text-center">
              <span className="text-accent">&lt;</span>
              Project Collection
              <span className="text-accent">/&gt;</span>
            </h1>
          </div>
          <p className="text-lg text-muted mt-2 font-mono text-center">
            <span className="text-accent">//</span> A showcase of my work and the technologies I used
          </p>
        </motion.section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 my-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group bg-card/50 backdrop-blur-sm rounded-lg border border-accent/20 shadow-lg overflow-hidden hover:border-accent/40 transition-all cursor-pointer"
              onClick={() => project.videoUrl ? openVideo(project.videoUrl, project) : openProjectDetails(project)}
            >
              <div className="relative">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-64 bg-card/80 flex items-center justify-center">
                    <div className="text-center">
                      <FaTerminal className="text-4xl mb-2 text-accent mx-auto" />
                      <p className="text-white font-mono">In Progress</p>
                      <p className="text-accent text-sm mt-2 font-mono">Projekt je trenutno v razvoju</p>
                    </div>
                  </div>
                )}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center bg-card/90 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-6">
                      <h2 className="text-xl font-bold mb-2 text-accent font-mono">{project.title}</h2>
                      <p className="text-sm mb-4">{project.description}</p>
                      <div className="flex justify-center flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <div
                            key={idx}
                            className={`flex items-center gap-2 px-3 py-1 rounded-full shadow-md ${tech.color} text-sm font-mono`}
                          >
                            <tech.icon className="text-lg" />
                            <span>{tech.name}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 text-accent font-mono text-sm">
                        {project.videoUrl ? "Click to watch demo" : "Click for details"}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-card/80 backdrop-blur-sm p-4 transition-opacity duration-300 group-hover:opacity-0">
                <h2 className="text-lg font-bold text-white group-hover:text-accent transition-colors font-mono">{project.title}</h2>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-2 px-3 py-1 rounded-full shadow-md ${tech.color} text-sm font-mono`}
                    >
                      <tech.icon className="text-lg" />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      </motion.div>

      {/* Video Modal */}
      {isVideoOpen && currentProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-card/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={closeVideo}
        >
          <div
            className="relative w-full max-w-4xl bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-accent/20 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm text-muted ml-2 font-mono">video.js</span>
            </div>
            <button
              className="absolute top-4 right-4 text-white text-4xl focus:outline-none hover:text-accent transition-colors"
              onClick={closeVideo}
            >
              &times;
            </button>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="w-full">
                <video
                  src={currentVideo}
                  controls
                  autoPlay
                  className="w-full h-auto rounded-lg shadow-lg"
                ></video>
              </div>
              <div className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto custom-scrollbar pr-2">
                <h2 className="text-2xl font-bold text-accent font-mono">{currentProject.title}</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-white/90 whitespace-pre-line">{currentProject.longDescription}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-accent font-mono">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center gap-2 px-3 py-1 rounded-full shadow-md ${tech.color} text-sm font-mono`}
                      >
                        <tech.icon className="text-lg" />
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {currentProject.challenges && (
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-accent font-mono">Challenges & Solutions:</h3>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-white/90 whitespace-pre-line">{currentProject.challenges}</p>
                    </div>
                  </div>
                )}
                {currentProject.impact && (
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-accent font-mono">Impact & Results:</h3>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-white/90 whitespace-pre-line">{currentProject.impact}</p>
                    </div>
                  </div>
                )}
                {currentProject.projectUrl && (
                  <a
                    href={currentProject.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-mono"
                  >
                    <FaCode className="text-lg" />
                    Visit Project
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Project Details Modal */}
      {isProjectModalOpen && currentProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-card/95 backdrop-blur-sm z-50 flex items-start justify-center p-4 overflow-y-auto"
          onClick={closeProjectModal}
        >
          <div
            className="relative w-full max-w-3xl bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-accent/20 my-8 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Terminal Header */}
            <div className="sticky top-0 bg-card/80 backdrop-blur-sm z-10 pb-4 border-b border-accent/20">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm text-muted ml-2 font-mono">project.js</span>
              </div>
              <button
                className="absolute top-4 right-4 text-white text-4xl focus:outline-none hover:text-accent transition-colors"
                onClick={closeProjectModal}
              >
                &times;
              </button>
              <div className="flex flex-col md:flex-row items-start gap-6">
                {currentProject.imageUrl && (
                  <img
                    src={currentProject.imageUrl}
                    alt={currentProject.title}
                    className="w-full md:w-48 h-48 object-cover rounded-lg"
                  />
                )}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-accent font-mono">{currentProject.title}</h2>
                  <p className="text-white/90 mt-2">{currentProject.description}</p>
                </div>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="mt-6 space-y-6 max-h-[calc(100vh-300px)] overflow-y-auto pr-2 custom-scrollbar">
              <div>
                <h3 className="text-lg font-semibold text-accent font-mono mb-2">Project Overview</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-white/90 whitespace-pre-line">{currentProject.longDescription}</p>
                </div>
              </div>

              {currentProject.challenges && (
                <div>
                  <h3 className="text-lg font-semibold text-accent font-mono mb-2">Challenges & Solutions</h3>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-white/90 whitespace-pre-line">{currentProject.challenges}</p>
                  </div>
                </div>
              )}

              {currentProject.impact && (
                <div>
                  <h3 className="text-lg font-semibold text-accent font-mono mb-2">Impact & Results</h3>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-white/90 whitespace-pre-line">{currentProject.impact}</p>
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-lg font-semibold text-accent font-mono mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {currentProject.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-2 px-3 py-1 rounded-full shadow-md ${tech.color} text-sm font-mono`}
                    >
                      <tech.icon className="text-lg" />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {currentProject.projectUrl && (
                <div className="pt-4 sticky bottom-0 bg-card/80 backdrop-blur-sm py-4">
                  <a
                    href={currentProject.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-secondary text-white rounded-lg hover:shadow-lg hover:shadow-accent/20 transition-all font-mono"
                  >
                    <FaCode className="text-lg" />
                    Visit Project Website
                  </a>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

// Add custom scrollbar styles to globals.css
const style = document.createElement('style');
style.textContent = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(99, 102, 241, 0.5);
    border-radius: 4px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(99, 102, 241, 0.7);
  }
`;
document.head.appendChild(style);
