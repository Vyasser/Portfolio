/**
 * data.js
 * -----------------------------------------------------------------------
 * Every editable piece of content lives here: bio, links, skills, and
 * project case studies. Change values here — you shouldn't need to touch
 * index.html, CSS, or main.js to update your own information.
 *
 * Anything with a "YOUR_" placeholder must be replaced before launch.
 * Where a URL is genuinely unavailable, leave it `null` — the UI renders
 * a disabled state instead of a broken or fake link.
 * -----------------------------------------------------------------------
 */

window.PORTFOLIO_DATA = {

  profile: {
    name: "Yasser Chelali",
    title: "Web Developer",
    location: "Algeria",
    email: "yasserchelali8@gmail.com",
    github: "https://github.com/Vyasser",
    linkedin: "https://www.linkedin.com/in/yasser-chelali",
    whatsapp: "https://wa.me/+213555480996", 
  },

  hero: {
    kicker: "Web Developer — based in Algeria",
    headline: ["Building digital", "experiences that work."],
    sub: "I design and build responsive websites, web applications, and the systems behind them — from the database up to the interface someone actually uses.",
  },

  brandStatement: "From idea to interface.",

  about: {
    lead: "I don't just build pages. I build the systems behind them.",
    paragraphs: [
      "I'm a web developer working across the frontend, backend, and database — turning a business idea into a site or application that actually runs: ordering systems, admin dashboards, e-commerce platforms.",
      "Most of what I've built has come from picking a real, specific problem — a restaurant, a store, a gym — and working through the entire stack it takes to solve it, not just the page a visitor sees.",
      "Alongside the web work, I also build native Android applications, which shapes how I think about data and offline reliability even on the web side."
    ]
  },

  capabilities: [
    { name: "Websites", detail: "Modern, responsive websites and landing pages built around clear structure and fast load times." },
    { name: "Web Applications", detail: "Interactive applications with authentication, databases, APIs, and real business logic behind them." },
    { name: "E-commerce", detail: "Online stores — product catalogs, variants, orders, customers, and the admin side that runs them." },
    { name: "Business Systems", detail: "Custom dashboards and management platforms built around how a specific business actually operates." },
    { name: "Restaurant Platforms", detail: "Ordering systems, QR-code menus, table service, and delivery management in one system." },
    { name: "Admin Dashboards", detail: "Interfaces for managing users, products, orders, and day-to-day operations without friction." }
  ],

  process: [
    { step: "01", name: "Discover", detail: "Understand the idea and what it actually needs to do." },
    { step: "02", name: "Design", detail: "Plan the structure, the data, and the experience around it." },
    { step: "03", name: "Build", detail: "Develop the frontend, backend, and database together." },
    { step: "04", name: "Connect", detail: "Integrate APIs, authentication, and external services." },
    { step: "05", name: "Refine", detail: "Test, fix, and polish until it holds up in real use." }
  ],

  approach: {
    heading: "How I think about building for the web.",
    topics: [
      { name: "Responsive design", detail: "Built for the screen it's actually viewed on, not shrunk down from desktop." },
      { name: "Clean UI", detail: "Interfaces built around what the user is trying to do, not what's easy to code." },
      { name: "Database architecture", detail: "Schemas designed to hold up as the data and the business grow." },
      { name: "Security basics", detail: "Authentication, sessions, and input handling done properly from the start." },
      { name: "API integration", detail: "Clear boundaries between systems, so each piece can change independently." },
      { name: "Real business logic", detail: "Built around how the business actually runs, not a generic template of it." }
    ],
    aiNote: "I use AI tools like Claude and Google AI Studio to move faster and explore approaches — this is AI-assisted development, not AI-generated code. I still design the architecture, write and review the implementation, and test the result myself."
  },

  skills: {
    groups: [
      { name: "Frontend", primary: true, items: ["HTML", "CSS", "JavaScript", "AJAX", "Responsive UI"] },
      { name: "Backend", primary: true, items: ["PHP", "REST APIs", "Sessions & Auth"] },
      { name: "Databases", primary: true, items: ["MySQL", "SQLite", "Firestore", "Room"] },
      { name: "Mobile / Cross-platform", primary: false, items: ["Kotlin", "Jetpack Compose", "Flutter", "Dart"] },
      { name: "Tools & Cloud", primary: false, items: ["Git / GitHub", "Firebase", "Android Studio", "VS Code", "XAMPP", "Leaflet"] }
    ]
  },

  /**
   * Featured work, in display order. `size` controls how much visual
   * weight a project gets ("lg" spans wider, "sm" is a supporting card)
   * — used to keep the web projects dominant and the Android project
   * secondary, per brief.
   */
  projects: [
    {
      id: "restaurant-platform",
      index: "01",
      size: "lg",
      name: "Restaurant Management & Ordering Platform",
      category: "Web Application / Restaurant Technology",
      img: "img/restaurant.png",
      status: "In development",
      description: "A complete restaurant ecosystem — online ordering, QR table service, delivery, and an admin dashboard tying it together, with live driver tracking on a map.",
      stack: ["PHP", "MySQL", "JavaScript", "AJAX", "Leaflet"],
      role: "Solo developer — full stack, from schema to interface",
      links: { demo: 'https://yasser-restaurant-management.infinityfreeapp.com/restaurant/index.php', repo: null },
      case: {
        overview: "A restaurant platform connecting four roles — customer, restaurant, admin, and driver — through one system, covering online orders, in-restaurant table service via QR code, and delivery.",
        challenge: "Online ordering, table service, and delivery are usually three separate workflows with different urgency and information needs, but a restaurant running all three often ends up juggling disconnected tools to manage them.",
        solution: "A PHP/MySQL backend with a distinct order pipeline for each channel, unified under one admin dashboard, with a Leaflet-based live map so restaurant staff can see delivery drivers in real time.",
        features: [
          "Menu, categories, and product management",
          "Customer ordering and QR-code table ordering",
          "Order status tracking across online, table, and delivery",
          "Admin dashboard with order and driver oversight",
          "Live driver tracking on a Leaflet map",
          "Ratings for food, restaurant, and driver",
          "Multi-language, responsive interface"
        ],
        interface: "Three distinct customer-facing surfaces — browse-and-order, scan-a-table-QR, and track-my-delivery — feed into a single admin dashboard so staff aren't switching between separate tools per order type.",
        architecture: "PHP and MySQL handle order-state logic across all three channels, with AJAX keeping dashboard and order statuses updating without full page reloads. Driver locations render on Leaflet against OpenStreetMap tiles, kept decoupled from the ordering logic.",
        technology: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "AJAX", "Leaflet", "Git"],
        outcome: "Menu management, ordering, and the admin dashboard are functional; delivery tracking and analytics are being refined."
      }
    },
    {
      id: "supplement-ecommerce",
      index: "02",
      size: "lg",
      name: "Supplement E-commerce Platform",
      category: "E-commerce / Web Development",
      img: "img/supplement.png",
      status: "In development",
      description: "A PHP/MySQL storefront for sports supplements, built around real product variants rather than duplicate listings, with guest checkout and wishlists.",
      stack: ["PHP", "MySQL", "JavaScript"],
      role: "Solo developer — full stack",
      links: { demo: 'https://yasser-supplement-store.infinityfreeapp.com/supplements/index.php', repo: null },
      case: {
        overview: "An e-commerce platform for sports supplements and nutrition products, covering the full path from browsing to checkout.",
        challenge: "Supplement products typically come in multiple flavors, weights, and package sizes — something most simple storefront builds handle badly, leading to either duplicate listings or checkout flows that can't express what was actually picked.",
        solution: "A catalog built around product variants (flavor, weight, size, package) instead of duplicate listings, with wishlists, ratings, and a checkout flow supporting guest orders alongside registered customers.",
        features: [
          "Product catalog with categories and variants",
          "Wishlist and product ratings",
          "Guest checkout alongside customer accounts",
          "Home/office delivery and pickup options",
          "Admin order and product management"
        ],
        interface: "A straightforward browse → variant selection → checkout flow on the customer side, with a separate admin view for managing catalog, stock, and incoming orders.",
        architecture: "MySQL separates base products from their variant combinations so stock and pricing track per variant rather than per listing, with PHP handling catalog logic, cart state, and admin-side order management.",
        technology: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
        outcome: "Catalog, variants, wishlist, and guest checkout are implemented; admin-side inventory tooling is ongoing."
      }
    },
    {
      id: "delivery-marketplace",
      index: "03",
      size: "sm",
      name: "Delivery Marketplace",
      category: "Product Concept / Web Platform",
      img: null,
      status: "Product Concept",
      description: "A marketplace concept connecting customers, restaurants, and both restaurant-employed and independent couriers.",
      stack: ["Concept", "Architecture design"],
      role: "Product concept and architecture",
      links: { demo: null, repo: null },
      case: {
        overview: "A marketplace concept sitting above single-restaurant delivery: it connects customers, restaurants, and couriers — whether employed by a restaurant or working independently.",
        challenge: "Not every restaurant has its own delivery fleet, and independent couriers have no shared platform to pick up work across restaurants — each restaurant currently builds its own delivery setup or does without.",
        solution: "A marketplace where a restaurant can run its own delivery, draw on independent couriers through the platform, or mix both, with customers choosing their delivery option at checkout.",
        features: [
          "Restaurant listings and menu browsing",
          "Ordering with delivery-option selection at checkout",
          "Restaurant-managed delivery as one path",
          "Independent/freelance courier pool as an alternative",
          "Administrative oversight of the marketplace"
        ],
        interface: "Still conceptual — the customer-facing flow mirrors standard delivery-app ordering, with the courier-routing decision happening behind the scenes rather than as a visible choice.",
        architecture: "The open design question is how to route an order to the right delivery path — restaurant fleet or independent courier — without the two systems needing to know much about each other's internals.",
        technology: ["Architecture design", "Concept validation"],
        outcome: "This is a concept and architecture-stage project, not a deployed platform — included here as ongoing product thinking rather than a finished system."
      }
    },
    {
      id: "gym-management",
      index: "04",
      size: "sm",
      name: "Gym Management System",
      category: "Business Management / Android",
      img: "img/gym_management.jpg",
      status: "In development",
      description: "A native Android app for day-to-day gym operations — members, subscriptions, attendance, and payments, built offline-first.",
      stack: ["Kotlin", "Jetpack Compose", "Room", "Firebase"],
      role: "Solo developer — architecture, UI, and data layer",
      links: { demo: null, repo: null },
      case: {
        overview: "A management app for gyms that need to track members, subscriptions, and attendance without depending on a constant connection at the front desk.",
        challenge: "Manual or spreadsheet tracking breaks down past a handful of members — subscriptions lapse unnoticed, attendance isn't tracked, and reception has no fast way to confirm who's allowed in.",
        solution: "A Kotlin/Compose app with manager and reception roles, built around fast day-to-day operations: scan or search a member, confirm subscription status, and log entry, without waiting on a network call.",
        features: [
          "Member profiles with photos and subscription history",
          "Subscription plans with duration and entry limits",
          "Attendance tracking with barcode/QR scanning",
          "Payment logging tied to each membership",
          "Manager and reception roles",
          "Printable/exportable member cards"
        ],
        interface: "A reception-facing scan-and-confirm screen designed to be fast under pressure, and a separate manager dashboard for oversight and reporting.",
        architecture: "Room acts as the local source of truth so reception can check in members with no network dependency; Firebase and Firestore sit behind that as the sync layer, reconciling across devices when connectivity allows.",
        technology: ["Kotlin", "Jetpack Compose", "Room", "SQLite", "Firebase", "Firestore", "Retrofit"],
        outcome: "Core member, subscription, attendance, and payment flows are built and running locally; cloud sync and permissions are in active development."
      }
    }
  ]
};
