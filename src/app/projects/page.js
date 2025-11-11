"use client";
import HeroProjects from "@/components/HeroProjects";
import { faFlutter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
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
    description: "Full-stack AI-powered meal planning application with mobile app, backend infrastructure, and cloud deployment.",
    longDescription: `
Developed Yummzy, an AI-based meal planning application, from infrastructure setup to deployment. Managed both frontend and backend development, including cloud infrastructure on AWS, database design, and API development.

Key Contributions:
• Infrastructure & DevOps:
  - Set up and configured AWS EC2 instance for backend deployment
  - Implemented Docker containerization for consistent development and production environments
  - Configured CI/CD pipeline for automated testing and deployment
  - Managed PostgreSQL database on AWS RDS
  - Implemented security best practices and SSL/TLS encryption

• Backend Development:
  - Developed Flask-based REST API with comprehensive endpoints for meal planning
  - Implemented OpenAI API integration for intelligent meal suggestions
  - Created robust database schema and optimized PostgreSQL queries
  - Built authentication system with JWT tokens
  - Implemented caching layer for improved performance
  - Developed real-time data synchronization between mobile app and server

• Frontend Development:
  - Built cross-platform mobile app using Flutter
  - Implemented state management using Riverpod
  - Created intuitive UI for meal planning and recipe management
  - Developed offline-first architecture with local data persistence
  - Integrated real-time updates and notifications
  - Implemented secure payment processing

• AI & Data Management:
  - Integrated OpenAI API for personalized meal suggestions
  - Developed algorithm for nutritional analysis and meal optimization
  - Implemented user preference learning system
  - Created data aggregation system for recipe management
  - Built analytics dashboard for user behavior tracking

Technical Stack:
• Backend:
  - Flask (Python) for REST API
  - PostgreSQL for database
  - Docker for containerization
  - AWS EC2 for hosting
  - AWS RDS for database
  - OpenAI API integration
  - JWT authentication
  - Redis for caching

• Frontend:
  - Flutter for cross-platform mobile development
  - Riverpod for state management
  - SQLite for local storage
  - WebSocket for real-time updates
  - Custom UI components
  - Responsive design

• DevOps:
  - Docker containers
  - AWS infrastructure
  - CI/CD pipeline
  - Automated testing
  - Monitoring and logging
  - Security implementation
`,
    technologies: [
      { name: "Flutter", icon: () => <FontAwesomeIcon icon={faFlutter} />, color: "bg-blue-200 text-blue-800" },
      { name: "Flask", icon: SiFlask, color: "bg-gray-200 text-gray-800" },
      { name: "PostgreSQL", icon: FaTools, color: "bg-blue-300 text-blue-900" },
      { name: "Docker", icon: FaDocker, color: "bg-blue-200 text-blue-800" },
      { name: "AWS", icon: FaTools, color: "bg-orange-200 text-orange-800" },
      { name: "REST API", icon: FaTools, color: "bg-green-200 text-green-800" }
    ],
    imageUrl: "/projects/yummzy.png",
    projectUrl: "https://www.yummzy.ai",
    challenges: `
• Designing and implementing a scalable cloud infrastructure on AWS
• Ensuring data consistency between mobile app and server
• Optimizing database queries for large recipe datasets
• Implementing secure authentication and data encryption
• Managing real-time updates across multiple devices
• Balancing AI complexity with app performance
• Implementing offline-first architecture
• Ensuring cross-platform compatibility
`,
    impact: `
• Successfully deployed scalable backend infrastructure on AWS
• Implemented efficient database design for quick recipe retrieval
• Created robust API architecture for future scalability
• Developed secure and reliable authentication system
• Built foundation for AI-powered meal suggestions
• Established automated deployment pipeline
• Set up comprehensive monitoring and logging
• Created maintainable and scalable codebase
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
Currently developing a feature-rich website for Lumen Cosmetics Salon, focusing on a seamless customer experience and integrated marketing tools. Lumen's site combines a sleek Next.js frontend, a robust booking system, and extensive marketing integrations.

Key Contributions (Ongoing):
• Setting up Next.js project structure and creating accessible, responsive layouts using TailwindCSS  
• Designing and implementing the booking interface: date/time picker, service selection, availability calendar, and confirmation modals  
• Building reusable React components for service listings, price tables, image galleries, and testimonials  
• Integrating with a headless CMS (Prismic) to manage service descriptions, staff profiles, and pricing dynamically  
• Implementing client-side form validation and connecting booking requests to backend APIs for real-time availability checks  
• Ensuring SEO-friendly markup: custom meta tags, Open Graph tags, structured data (JSON-LD for local business), and sitemap generation  

Backend & API Integrations:
• Developed backend system with Google Calendar API integration for real-time appointment scheduling and availability management
• Implemented Stripe Payment API for secure online payment processing and subscription management
• Integrated OpenAI API to create an intelligent chatbot for customer support, answering FAQs, and assisting with booking inquiries
• Built automated email marketing system using Brevo (formerly Sendinblue) for customer communications, booking confirmations, and promotional campaigns
• Configured real-time synchronization between booking system and Google Calendar to prevent double bookings

Analytics & Marketing Integration:
• Implemented Google Analytics for comprehensive website traffic analysis, user behavior tracking, and conversion monitoring
• Integrated Facebook Pixel for advanced tracking of user interactions, conversion events, and retargeting campaigns
• Set up Google Tag Manager for centralized tag management and event tracking (booking clicks, form submissions, payment completions)
• Configured conversion tracking for Google Ads and Meta Ads campaigns with proper attribution
• Designed Facebook & Instagram ad creatives and flow: custom audiences (retargeting site visitors), pixel integration, and A/B testing ad copy
• Prepared Google Ads campaign structure: ad groups by service type, geo-targeting within Ljubljana area, and conversion tracking setup

Anticipated Features:
• User account creation for viewing past bookings and rebooking favorite services  
• Admin dashboard for staff to view and manage appointments, client details, and service inventory  
• Enhanced chatbot capabilities with personalized recommendations based on customer history
• Analytics dashboard showing booking trends, conversion rates, and ad performance metrics  

SEO & Marketing Integration:
• Local SEO optimization for "Ljubljana cosmetics salon" and related keywords
• Google My Business optimization and review management
• Facebook and Instagram business page integration
• Email marketing automation for customer retention via Brevo
• SMS marketing for appointment reminders and promotions
• Google Ads and Meta Ads campaigns for lead generation
• Content marketing strategy for beauty and wellness topics
• Influencer collaboration opportunities
• Customer loyalty program integration
• Social media management and community building
`,
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "bg-black text-white" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "bg-teal-200 text-teal-800" },
      { name: "React", icon: FaReact, color: "bg-blue-200 text-blue-800" },
      { name: "Stripe API", icon: FaTools, color: "bg-indigo-200 text-indigo-800" },
      { name: "OpenAI API", icon: FaTools, color: "bg-green-200 text-green-800" },
    ],
    imageUrl: "/projects/lumen.png",
    projectUrl: "https://www.lumen-estetika.si",
    status: "in-progress",
    challenges: `
• Designing an intuitive, mobile-first booking flow that minimizes user friction  
• Ensuring real-time synchronization between frontend availability checks and Google Calendar API for accurate scheduling
• Implementing secure payment processing with Stripe API while maintaining smooth user experience
• Integrating OpenAI chatbot to provide accurate, context-aware responses for customer inquiries
• Managing email marketing automation with Brevo for timely booking confirmations and promotional campaigns
• Configuring Facebook Pixel and Google Analytics for accurate conversion tracking and attribution
• Maintaining SEO best practices while using dynamic client-side rendering in Next.js  
• Structuring Google Ads and Facebook/Instagram campaigns to maximize ROI for a local salon  
• Implementing analytics for booking funnels and ad performance in a unified dashboard  
• Optimizing for local search visibility and Google My Business performance
• Managing multiple marketing channels and tracking cross-platform attribution
• Balancing automation with personalized customer experience
• Handling API rate limits and ensuring reliable integration between multiple third-party services
`,
    impact: `
• Aims to increase online bookings by 50% within three months of launch through optimized UX and marketing campaigns  
• Expected 30% growth in new client acquisitions through targeted Google Ads and Meta Ads strategies  
• Improved SEO visibility for local searches (e.g., "Ljubljana cosmetics salon")  
• Streamlined appointment management for salon staff through Google Calendar integration, reducing no-shows by 25% via automated reminders  
• Enhanced customer experience with AI-powered chatbot providing instant support and booking assistance
• Secure and seamless payment processing with Stripe API, increasing conversion rates
• Automated email marketing via Brevo improving customer engagement and retention
• Advanced tracking with Facebook Pixel and Google Analytics enabling data-driven marketing decisions
• Better ROI tracking and optimization across all marketing channels with comprehensive analytics
• Improved customer satisfaction through seamless booking experience and automated communications
• Real-time availability management preventing double bookings and scheduling conflicts
• Increased operational efficiency through automated workflows and integrations
`
  },
  {
    title: "VicoChat",
    description: "Modern landing page for VicoChat - AI chatbot platform for businesses, featuring interactive demo, package pricing, and seamless integrations.",
    longDescription: `
Developed a comprehensive landing page for VicoChat, a leading Slovenian platform for creating intelligent chatbots. The website showcases AI chatbot solutions for businesses with modern design, interactive features, and seamless user experience.

Key Contributions:
• Designed and developed a modern, responsive landing page using Next.js and TailwindCSS
• Implemented interactive AI chatbot demo using OpenAI API for real-time customer interactions
• Created dynamic package pricing sections (Osnovni, Pro, Pro Plus) with feature comparisons
• Built comprehensive FAQ section with expandable answers for better user engagement
• Developed contact forms with email integration for lead generation
• Implemented smooth animations and transitions using Framer Motion for enhanced UX
• Created SEO-optimized structure with proper meta tags and semantic HTML
• Designed mobile-first responsive layout ensuring optimal experience across all devices

Frontend Development:
• Next.js for server-side rendering and optimal performance
• TailwindCSS for modern, responsive styling and consistent design system
• React components for reusable UI elements (pricing cards, FAQ items, contact forms)
• Framer Motion for smooth animations and page transitions
• Responsive design ensuring perfect display on mobile, tablet, and desktop

AI Integration:
• Integrated OpenAI API for interactive chatbot demo functionality
• Implemented real-time chat interface allowing visitors to test AI capabilities
• Created seamless user experience for chatbot interactions
• Configured API endpoints for secure communication with OpenAI services

Features & Sections:
• Hero section with compelling value proposition and call-to-action
• Interactive AI chatbot demo with real-time responses
• Package comparison with detailed feature lists
• Integration showcase (websites, communication tools, documents)
• FAQ section with common questions and answers
• Contact form with email integration
• Footer with company information and links

Technical Implementation:
• Next.js App Router for modern routing and performance
• TailwindCSS utility classes for efficient styling
• OpenAI API integration for chatbot functionality
• Form handling and validation
• SEO optimization with proper meta tags
• Performance optimization with image optimization and code splitting
• Accessibility features for better user experience
`,
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "bg-black text-white" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "bg-teal-200 text-teal-800" },
      { name: "React", icon: FaReact, color: "bg-blue-200 text-blue-800" },
      { name: "OpenAI API", icon: FaTools, color: "bg-green-200 text-green-800" }
    ],
    imageUrl: "/projects/vico.png",
    projectUrl: "https://www.vico.si",
    challenges: `
• Implementing interactive chatbot demo with OpenAI API while maintaining fast response times
• Creating intuitive package comparison interface that clearly communicates value propositions
• Ensuring seamless user experience across all device sizes
• Optimizing page load times with multiple interactive components
• Balancing design aesthetics with conversion optimization
• Implementing smooth animations without impacting performance
• Creating accessible forms and interactive elements
`,
    impact: `
• Modern, professional landing page showcasing VicoChat's AI chatbot solutions
• Interactive demo allowing potential customers to experience AI capabilities firsthand
• Clear package presentation helping customers choose the right solution
• Improved lead generation through optimized contact forms
• Enhanced brand presence with modern, responsive design
• Better user engagement through interactive elements and smooth animations
• SEO-optimized structure improving search engine visibility
• Mobile-friendly design ensuring accessibility for all users
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
    imageUrl: "/projects/vico-solutions.png",
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
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const openVideo = (videoUrl, project) => {
    setCurrentVideo(videoUrl);
    setCurrentProject(project);
    setIsVideoOpen(true);
    setIsVideoPlaying(false);
  };

  const openProjectDetails = (project) => {
    setCurrentProject(project);
    setIsProjectModalOpen(true);
  };

  const closeVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setCurrentVideo(null);
    setCurrentProject(null);
    setIsVideoOpen(false);
    setIsVideoPlaying(false);
  };

  const closeProjectModal = () => {
    setCurrentProject(null);
    setIsProjectModalOpen(false);
  };

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <>
      <HeroProjects />
      
      {/* Hidden backlinks for SEO */}
      <div className="hidden">
        <a href="https://www.lumen-estetika.si">Lumen Estetika - Kozmetični salon Ljubljana</a>
        <a href="https://www.lumen-estetika.si/rezervacije">Rezervacije kozmetičnih storitev</a>
        <a href="https://www.lumen-estetika.si/storitve">Kozmetične storitve Ljubljana</a>
        <a href="https://www.lumen-estetika.si/cenik">Cenik kozmetičnih storitev</a>
        <a href="https://www.lumen-estetika.si/kontakt">Kontakt Lumen Estetika</a>
        <span>Kozmetični salon Ljubljana - Lumen Estetika</span>
        <span>Rezervacije kozmetičnih storitev Ljubljana</span>
        <span>Najboljši kozmetični salon v Ljubljani</span>
      </div>

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
          
          {/* Hidden backlink in description */}
          <div className="hidden">
            <a href="https://www.lumen-estetika.si">Kozmetični salon Ljubljana</a>
            <span>Lumen Estetika - profesionalni kozmetični salon</span>
          </div>
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
              
              {/* Hidden backlinks for Lumen project */}
              {project.title === "Lumen Cosmetics Salon" && (
                <div className="hidden">
                  <a href="https://www.lumen-estetika.si">Lumen Estetika</a>
                  <a href="https://www.lumen-estetika.si/rezervacije">Rezervacije</a>
                  <a href="https://www.lumen-estetika.si/storitve">Kozmetične storitve</a>
                  <a href="https://www.lumen-estetika.si/cenik">Cenik</a>
                  <span>Kozmetični salon Ljubljana</span>
                  <span>Najboljši kozmetični salon</span>
                </div>
              )}
            </motion.div>
          ))}
        </section>
      </motion.div>

      {/* Video Modal with hidden backlinks */}
      {isVideoOpen && currentProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-start justify-center p-2 sm:p-4 overflow-y-auto"
          onClick={closeVideo}
        >
          <div
            className="relative w-full max-w-2xl bg-card/80 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-accent/20 my-4 sm:my-8 mx-2 sm:mx-4 shadow-2xl shadow-accent/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Hidden backlinks in modal */}
            <div className="hidden">
              <a href="https://www.lumen-estetika.si">Lumen Estetika - Kozmetični salon</a>
              <span>Profesionalni kozmetični salon Ljubljana</span>
            </div>
            
            {/* Terminal header in close button container */}
            <div className="sticky top-0 z-50 pb-4 border-b border-accent/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-sm shadow-red-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 shadow-sm shadow-yellow-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-sm shadow-green-500/50"></div>
                  </div>
                  <span className="text-xs text-muted/80 ml-2 font-mono tracking-wide">video.js</span>
                </div>
                <button
                  className="text-white text-2xl sm:text-4xl focus:outline-none hover:text-accent transition-colors"
                  onClick={closeVideo}
                  aria-label="Close video"
                >
                  &times;
                </button>
              </div>
            </div>

            {/* Scrollable content container */}
            <div className="max-h-[calc(100vh-200px)] overflow-y-auto custom-scrollbar pr-2 mt-4">
              <div className="grid grid-cols-1 gap-6">
                {/* Video Container - optimiziran za vertikalni video */}
                <div className="w-full max-w-[280px] mx-auto bg-black/40 rounded-xl overflow-hidden relative shadow-lg shadow-black/20">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                  <video
                    ref={videoRef}
                    src={currentVideo}
                    controls
                    playsInline
                    className="w-full h-auto object-contain"
                    controlsList="nodownload"
                    onEnded={() => setIsVideoPlaying(false)}
                  ></video>
                </div>

                {/* Content Container */}
                <div className="space-y-4">
                  <div className="bg-card/60 backdrop-blur-sm p-4 rounded-xl border border-accent/10 shadow-lg">
                    <h2 className="text-xl font-bold text-accent font-mono tracking-wide">{currentProject.title}</h2>
                    <p className="text-sm text-white/90 mt-2">{currentProject.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {currentProject.technologies.map((tech, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full shadow-md ${tech.color} text-xs font-mono tracking-wide transition-transform hover:scale-105`}
                        >
                          <tech.icon className="text-sm" />
                          <span>{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-card/60 backdrop-blur-sm p-4 rounded-xl border border-accent/10 shadow-lg">
                    <h3 className="text-base font-semibold text-accent font-mono tracking-wide mb-2">Project Overview</h3>
                    <div className="prose prose-invert max-w-none text-sm">
                      <p className="text-white/90 whitespace-pre-line leading-relaxed">{currentProject.longDescription}</p>
                    </div>
                  </div>

                  {currentProject.challenges && (
                    <div className="bg-card/60 backdrop-blur-sm p-4 rounded-xl border border-accent/10 shadow-lg">
                      <h3 className="text-base font-semibold text-accent font-mono tracking-wide mb-2">Challenges & Solutions</h3>
                      <div className="prose prose-invert max-w-none text-sm">
                        <p className="text-white/90 whitespace-pre-line leading-relaxed">{currentProject.challenges}</p>
                      </div>
                    </div>
                  )}

                  {currentProject.impact && (
                    <div className="bg-card/60 backdrop-blur-sm p-4 rounded-xl border border-accent/10 shadow-lg">
                      <h3 className="text-base font-semibold text-accent font-mono tracking-wide mb-2">Impact & Results</h3>
                      <div className="prose prose-invert max-w-none text-sm">
                        <p className="text-white/90 whitespace-pre-line leading-relaxed">{currentProject.impact}</p>
                      </div>
                    </div>
                  )}

                  {currentProject.projectUrl && (
                    <div className="sticky bottom-0 pt-4 bg-gradient-to-t from-card/80 via-card/40 to-transparent">
                      <a
                        href={currentProject.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 hover:bg-accent/20 text-accent rounded-xl hover:shadow-lg hover:shadow-accent/20 transition-all duration-200 font-mono text-sm w-full justify-center group"
                      >
                        <FaCode className="text-sm group-hover:scale-110 transition-transform" />
                        <span className="tracking-wide">Visit Project</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Project Details Modal with hidden backlinks */}
      {isProjectModalOpen && currentProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-card/95 backdrop-blur-sm z-50 flex items-start justify-center p-2 sm:p-4 overflow-y-auto"
          onClick={closeProjectModal}
        >
          <div
            className="relative w-full max-w-2xl bg-card/80 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-accent/20 my-4 sm:my-8 mx-2 sm:mx-4 shadow-2xl shadow-accent/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Hidden backlinks in project modal */}
            <div className="hidden">
              <a href="https://www.lumen-estetika.si">Lumen Estetika</a>
              <a href="https://www.lumen-estetika.si/rezervacije">Rezervacije kozmetičnih storitev</a>
              <span>Kozmetični salon Ljubljana - Lumen Estetika</span>
            </div>
            
            {/* Terminal Header */}
            <div className="sticky top-0 z-50 bg-card/80 backdrop-blur-sm pb-4 border-b border-accent/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-sm shadow-red-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 shadow-sm shadow-yellow-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-sm shadow-green-500/50"></div>
                  </div>
                  <span className="text-xs text-muted/80 ml-2 font-mono tracking-wide">project.js</span>
                </div>
                <button
                  className="text-white text-2xl sm:text-4xl focus:outline-none hover:text-accent transition-colors"
                  onClick={closeProjectModal}
                  aria-label="Close project details"
                >
                  &times;
                </button>
              </div>
              <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6 mt-4">
                {currentProject.imageUrl && (
                  <img
                    src={currentProject.imageUrl}
                    alt={currentProject.title}
                    className="w-full md:w-48 h-32 sm:h-48 object-cover rounded-xl shadow-lg"
                  />
                )}
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-accent font-mono tracking-wide">{currentProject.title}</h2>
                  <p className="text-sm text-white/90 mt-2">{currentProject.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {currentProject.technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full shadow-md ${tech.color} text-xs font-mono tracking-wide transition-transform hover:scale-105`}
                      >
                        <tech.icon className="text-sm" />
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="max-h-[calc(100vh-400px)] overflow-y-auto custom-scrollbar pr-2 mt-4 space-y-4">
              <div className="bg-card/60 backdrop-blur-sm p-4 rounded-xl border border-accent/10 shadow-lg">
                <h3 className="text-base font-semibold text-accent font-mono tracking-wide mb-2">Project Overview</h3>
                <div className="prose prose-invert max-w-none text-sm">
                  <p className="text-white/90 whitespace-pre-line leading-relaxed">{currentProject.longDescription}</p>
                </div>
              </div>

              {currentProject.challenges && (
                <div className="bg-card/60 backdrop-blur-sm p-4 rounded-xl border border-accent/10 shadow-lg">
                  <h3 className="text-base font-semibold text-accent font-mono tracking-wide mb-2">Challenges & Solutions</h3>
                  <div className="prose prose-invert max-w-none text-sm">
                    <p className="text-white/90 whitespace-pre-line leading-relaxed">{currentProject.challenges}</p>
                  </div>
                </div>
              )}

              {currentProject.impact && (
                <div className="bg-card/60 backdrop-blur-sm p-4 rounded-xl border border-accent/10 shadow-lg">
                  <h3 className="text-base font-semibold text-accent font-mono tracking-wide mb-2">Impact & Results</h3>
                  <div className="prose prose-invert max-w-none text-sm">
                    <p className="text-white/90 whitespace-pre-line leading-relaxed">{currentProject.impact}</p>
                  </div>
                </div>
              )}

              {currentProject.projectUrl && (
                <div className="sticky bottom-0 pt-4 bg-gradient-to-t from-card/80 via-card/40 to-transparent">
                  <a
                    href={currentProject.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 hover:bg-accent/20 text-accent rounded-xl hover:shadow-lg hover:shadow-accent/20 transition-all duration-200 font-mono text-sm w-full justify-center group"
                  >
                    <FaCode className="text-sm group-hover:scale-110 transition-transform" />
                    <span className="tracking-wide">Visit Project</span>
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
