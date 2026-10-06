// ─── FEATURED PROJECTS ──────────────────────────────────────────────────────
const featuredProjects = [
  {
    id: "neozap",
    name: "NeoZap",
    tagline: "Fintech & Payments Platform",
    type: "fintech",
    featured: true,
    stack: ["Flutter", "Dart", "Node.js", "MongoDB", "Firebase", "REST APIs"],
    about: "A fintech and payments platform serving 100K+ users, with features across wallet services, NCMC recharge, card ordering, rewards and digital gold. Contributed to building and optimizing core product experiences across secure onboarding, performance, and production stability.",
    contributions: [
      "Wallet & payment flows",
      "NCMC recharge integration",
      "Card ordering workflows",
      "Rewards & digital gold",
      "Secure onboarding & 2FA",
      "Passcode authentication",
      "Performance optimization",
      "Production crash reduction"
    ],
    impact: [
      { value: "40%", label: "APK size & startup improvement" },
      { value: "100K+", label: "Active users served" },
      { value: "Near-zero", label: "Critical crashes after optimization" },
      { value: "95%", label: "Onboarding quality improvement" }
    ],
    android: "https://play.google.com/store/apps/details?id=com.neofinity.neozap",
    ios: "https://apps.apple.com/in/app/neozap-tap-pay-with-iphone/id6547854547",
    images: [
      "assets/project/neozap/neozap8.jpg",
      "assets/project/neozap/neozap3.png",
      "assets/project/neozap/neozap4.jpg",
      "assets/project/neozap/neozap5.jpg",
      "assets/project/neozap/neozap1.png",
      "assets/project/neozap/neozap2.png",
      "assets/project/neozap/neozap6.jpg",
      "assets/project/neozap/neozap7.jpg",

    ],
    theme: { bg: "linear-gradient(135deg, #0f0824, #1a0b3b, #0d1a3b)", accent: "#6c63ff", icon: "fa-microchip" }
  },
  {
    id: "rupeezy",
    name: "Rupeezy",
    tagline: "Trading & Investment Platform",
    type: "fintech",
    featured: true,
    stack: ["Flutter", "Dart", "APIs", "Firebase", "WebSockets"],
    about: "Contributed to a large-scale financial application serving 200K+ users, working on mobile features, integrations, performance improvements and production engineering for a high-reliability trading platform.",
    contributions: [
      "Mobile feature development",
      "Financial workflow integrations",
      "Performance improvements",
      "Production reliability engineering",
      "Real-time data integrations",
      "Trade execution flows"
    ],
    impact: [
      { value: "200K+", label: "Users on the platform" },
      { value: "High", label: "Production reliability" },
      { value: "Real-time", label: "Trading data integration" }
    ],
    android: "https://play.google.com/store/apps/details?id=in.rupeezy.partner",
    ios: "https://apps.apple.com/in/app/rupeezy-mf-partner-app-mfds/id6740856285",
    images: [
      "assets/project/rupeezy/rupeezy_1.png",
      "assets/project/rupeezy/rupeezy_2.png",
      "assets/project/rupeezy/rupeezy_3.jpg"
    ],
    theme: { bg: "linear-gradient(135deg, #0b1a2e, #0d2744, #0a1e3b)", accent: "#00d4ff", icon: "fa-chart-line" }
  },
  {
    id: "travnect",
    name: "Travnect",
    tagline: "Travel Discovery & Companion Platform",
    type: "travel",
    featured: true,
    isPersonal: true,
    stack: ["Flutter", "Node.js", "TypeScript", "MongoDB", "Socket.io", "Firebase", "AWS", "Map APIs"],
    about: "A travel-focused social platform designed to help people discover places, document their journeys, plan future adventures and connect with travelers who share similar interests and travel styles. Designed, developed and deployed end-to-end.",
    contributions: [
      "Travel partner matching algorithm",
      "Interactive journey map (globe view)",
      "Trip creation & discovery",
      "Visited places with photos & activities",
      "Travel stories feed",
      "Future travel bucket list",
      "1:1 & group chat (Socket.io)",
      "Location-based discovery",
      "AWS EC2 + Nginx deployment",
      "Push notifications (FCM)"
    ],
    impact: [
      { value: "End-to-end", label: "Product ownership" },
      { value: "Full-stack", label: "Mobile + Backend + Cloud" },
      { value: "Real-time", label: "Chat & location features" }
    ],
    link: "https://travnect.com",
    android: "https://play.google.com/store/apps/details?id=com.travnect.app",
    images: [
      "assets/project/travnect/travnect_1.png",
      "assets/project/travnect/travnect_2.png",
      "assets/project/travnect/travnect_3.png",
      "assets/project/travnect/travnect_4.png",
      "assets/project/travnect/travnect_5.png"
    ],
    theme: { bg: "linear-gradient(135deg, #0a1f0f, #0d2b1a, #0f1a2e)", accent: "#00c853", icon: "fa-map-location-dot" }
  },
  {
    id: "prohealth",
    name: "OwnUrHealth",
    tagline: "Healthcare Platform",
    type: "health",
    featured: true,
    stack: ["Flutter", "Dart", "REST APIs", "Socket.io", "Firebase"],
    about: "Mobile healthcare experience built with Flutter, focusing on reliable API integration, appointment workflows, secure patient-provider messaging, and production-ready UI serving real healthcare users.",
    contributions: [
      "Appointment booking system",
      "Secure patient-provider messaging",
      "QR code generation",
      "Medication management",
      "Subscription services",
      "Real-time notifications"
    ],
    impact: [
      { value: "Live", label: "On App Store & Play Store" },
      { value: "Secure", label: "Healthcare data handling" }
    ],
    android: "https://play.google.com/store/apps/details?id=com.ownUrHealth",
    ios: "https://apps.apple.com/in/app/ownurhealth/id1614815153",
    images: [
      "assets/project/ownurhealth/ouh01.jpeg",
      "assets/project/ownurhealth/ouh02.jpeg",
      "assets/project/ownurhealth/ouh03.jpeg",
      "assets/project/ownurhealth/ouh04.jpeg",
    ],
    theme: { bg: "linear-gradient(135deg, #00252a, #00363a, #006064)", accent: "#00d4ff", icon: "fa-heart-pulse" }
  }
];

// ─── ALL PROJECTS (for the full portfolio grid) ──────────────────────────────
const allProjects = [
  ...featuredProjects,
  {
    id: "lifeizz",
    name: "Lifeizz",
    tagline: "Language Learning App",
    type: "language",
    stack: ["Flutter", "Dart", "WebSockets", "REST APIs", "Firebase"],
    about: "Versatile mobile app for language learning with daily word challenges, community discussions, real-time updates via WebSockets, and phone number authentication.",
    contributions: ["Full feature implementation", "API integration", "Socket real-time", "Notifications"],
    android: "https://drive.google.com/drive/folders/1Ay7Cl181HHMk-tTypnTkuWcucX0vmpHU?usp=drive_link",
    images: [
      "assets/project/lifeizz/lifeizz1.jpg",
      "assets/project/lifeizz/lifeizz2.jpg",
      "assets/project/lifeizz/lifeizz3.jpg",
    ],
    theme: { bg: "linear-gradient(135deg, #2e1a4d, #1a0b3b)", accent: "#ff6b9d", icon: "fa-language" }
  },
  {
    id: "ownitoo",
    name: "Ownitoo",
    tagline: "Marketplace & Bidding App",
    type: "marketplace",
    stack: ["Flutter", "Dart", "WebSockets", "REST APIs", "Payment Gateway"],
    about: "User-friendly marketplace app enabling buying, selling, bidding, and shared product ownership with real-time group chat and secure payments.",
    contributions: ["Full feature implementation", "API integration", "Socket-Chat", "Bidding & Shares", "Payments"],
    android: "https://play.google.com/store/apps/details?id=com.app.ownitoo",
    ios: "https://apps.apple.com/in/app/ownitoo/id6448990297",
    images: [
      "assets/project/ownitoo/01.jpg",
      "assets/project/ownitoo/02.jpg",
      "assets/project/ownitoo/03.jpg",
    ],
    theme: { bg: "linear-gradient(135deg, #0d1b3b, #1a237e)", accent: "#ffd166", icon: "fa-coins" }
  },
  {
    id: "blubin",
    name: "BluBin",
    tagline: "Eco Waste Management App",
    type: "eco",
    stack: ["Flutter", "Dart", "Maps", "REST APIs", "Firebase"],
    about: "Revolutionary waste management app that connects users with trash collectors, tracks pick-up requests, and rewards eco-friendly behavior with redeemable points.",
    contributions: ["Full feature implementation", "API integration", "Location/Maps", "Notifications"],
    android: "https://drive.google.com/drive/folders/11wYTPi6h3_CaO5Pd4wMFCXdjZ43Lb9BS?usp=drive_link",
    images: [
      "assets/project/blubin/blubin08.jpeg",
      "assets/project/blubin/blubin02.jpeg",
      "assets/project/blubin/blubin01.jpeg",
    ],
    theme: { bg: "linear-gradient(135deg, #0b2e1a, #1a3b2b)", accent: "#00d4ff", icon: "fa-leaf" }
  },
  {
    id: "jobbie",
    name: "Jobbie",
    tagline: "Gig Economy Job Platform",
    type: "gig",
    stack: ["Flutter", "Dart", "Maps", "REST APIs", "WebSockets", "Payments"],
    about: "Platform connecting employers with gig workers for tasks like landscaping, dog care and cleaning. Features job-discovery on map, real-time chat, and secure payment wallet.",
    contributions: ["Full feature implementation", "API integration", "Map integration", "Socket chat", "Payments"],
    images: [
      "assets/project/jobbie/jobbie01.jpeg",
      "assets/project/jobbie/jobbie02.jpeg",
      "assets/project/jobbie/jobbie03.jpeg",
    ],
    theme: { bg: "linear-gradient(135deg, #4e342e, #5d4037)", accent: "#ffd166", icon: "fa-map-pin" }
  },
  {
    id: "mytasks",
    name: "My Tasks",
    tagline: "Task Management App",
    type: "productivity",
    stack: ["Flutter", "Dart", "Local DB"],
    about: "Simple, intuitive task management app with custom categories, priority tracking, and a clean UI to help users stay organized and productive.",
    contributions: ["UI Design", "Full functionality", "Local database"],
    android: "https://play.google.com/store/apps/details?id=com.pkumar.link.mytasks",
    images: [
      "assets/project/mytasks/1.webp",
      "assets/project/mytasks/2.webp",
      "assets/project/mytasks/3.webp",
    ],
    theme: { bg: "linear-gradient(135deg, #1c2331, #2e3b4e)", accent: "#6c63ff", icon: "fa-check-double" }
  }
];

// ─── CASE STUDIES ────────────────────────────────────────────────────────────
const caseStudies = [
  {
    id: "cs-01",
    number: "01",
    title: "Reducing Flutter App Size & Startup Time",
    subtitle: "Performance Engineering",
    icon: "fa-gauge-high",
    accent: "#6c63ff",
    problem: "The NeoZap application had performance and bundle-size issues affecting user experience — slow startup times and a heavy APK were creating friction in the onboarding funnel.",
    investigation: [
      "Dependency audit — identified unused and duplicate packages",
      "Asset analysis — found uncompressed images and unused font variants",
      "Build configuration review — identified debug artifacts in release builds",
      "Architecture review — spotted redundant widget rebuilds and state leaks"
    ],
    solution: [
      "Removed unused dependencies and replaced heavy packages with lightweight alternatives",
      "Optimized and compressed all image assets, implemented lazy loading",
      "Cleaned up build configurations and enabled tree-shaking",
      "Refactored widget trees to minimize unnecessary rebuilds",
      "Implemented deferred loading for non-critical features"
    ],
    result: "40% reduction in APK size and startup overhead, significantly improving first-impression UX and Play Store conversion.",
    metric: "40%",
    metricLabel: "APK size & startup improvement"
  },
  {
    id: "cs-02",
    number: "02",
    title: "Improving Onboarding Completion",
    subtitle: "User Experience Engineering",
    icon: "fa-user-check",
    accent: "#00d4ff",
    problem: "Existing onboarding flows had a low quality/completion rate — users were dropping off due to confusing UX, poor validation feedback, and unclear error states.",
    investigation: [
      "Mapped the entire onboarding flow and identified drop-off points",
      "Reviewed API error handling — errors were swallowed without user feedback",
      "Analyzed form validation logic — validation was inconsistent and delayed",
      "User flow review — too many steps without clear progress indication"
    ],
    solution: [
      "Redesigned onboarding UX with clearer step indicators and progress feedback",
      "Implemented real-time form validation with helpful inline error messages",
      "Improved API error handling to surface meaningful feedback to users",
      "Added retry logic and graceful degradation for network failures",
      "Streamlined the flow from passcode setup through 2FA verification"
    ],
    result: "Onboarding quality improved from ~35% to 95%, dramatically reducing user drop-off during sign-up.",
    metric: "35% → 95%",
    metricLabel: "Onboarding quality improvement"
  },
  {
    id: "cs-03",
    number: "03",
    title: "Production Crash Reduction",
    subtitle: "Reliability Engineering",
    icon: "fa-shield-halved",
    accent: "#ff6b9d",
    problem: "The application had 10+ critical production crashes reported via Crashlytics, affecting real users on the NeoZap platform with 100K+ active users.",
    investigation: [
      "Reviewed Crashlytics crash reports — grouped by frequency and severity",
      "Identified 3 categories: null-safety violations, unhandled API responses, race conditions",
      "Reproduced critical crashes in development and staging environments",
      "Traced root causes through logs and stack traces"
    ],
    solution: [
      "Fixed all null-safety violations with proper null-checks and fallbacks",
      "Added comprehensive API error handling with typed exception classes",
      "Resolved race conditions in async state management flows",
      "Implemented production monitoring with custom Crashlytics keys for easier debugging",
      "Set up crash-alert workflows for faster incident response"
    ],
    result: "Reduced critical production crashes from 10+ to near-zero, establishing systematic debugging and monitoring practices.",
    metric: "10+ → ~0",
    metricLabel: "Critical production crashes"
  }
];

// ─── OPEN SOURCE ──────────────────────────────────────────────────────────────
const openSourcePackages = [
  {
    name: "flutter_sfs",
    description: "A Flutter package published on pub.dev for scalable file storage utility functions.",
    pubdev: "https://pub.dev/packages/flutter_sfs",
    github: "https://github.com/praween-link",
    icon: "fa-box-open"
  },
  {
    name: "timer_flutter",
    description: "Lightweight Flutter package for reusable countdown and interval timer functionality.",
    pubdev: "https://pub.dev/packages/timer_flutter",
    github: "https://github.com/praween-link",
    icon: "fa-clock"
  }
];
