export const projectsData = [
  {
    id: 1,
    title: "Clinic Management System",
    iconType: "Hospital",
    description:
      "A full-stack clinic management system that supports patients, doctors, and staff. Includes appointment booking, health records, and queue management.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    features: [
      "Patient appointment booking and medical records",
      "Doctor dashboards with prescription history",
      "Staff queue management system",
      "Secure authentication and role-based access",
      "Messaging between doctors, patients, and staff",
    ],
    developerComment:
      "Healthcare meets full-stack development – my biggest academic project so far!",
    backgroundCode: `const clinic = {\n  patients: [],\n  doctors: [],\n  staff: [],\n  book(patient, doctor) {\n    this.patients.push(patient);\n    console.log('Appointment booked ✅');\n  }\n};`,
    floatingCode: "// Healing with code",
    easterEgg: "Prescription: More Coffee",
    liveUrl: "#",
    githubUrl: "https://github.com/yourusername/clinic-system",
  },
  {
    id: 2,
    title: "Chat & Email Application",
    iconType: "MessageCircle",
    description:
      "A real-time chat and email communication platform with group rooms, file sharing, and user-friendly UI.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    features: [
      "Instant real-time chat with Socket.io",
      "Email-like messaging system",
      "File and image sharing",
      "Group and private chat rooms",
      "Message history and search",
    ],
    developerComment:
      "Built to improve communication – and to test my own debugging patience!",
    backgroundCode: `socket.on('message', (data) => {\n  console.log('New message:', data);\n});`,
    floatingCode: "// Hello from the inbox",
    easterEgg: "Reply-All drama included",
    liveUrl: "#",
    githubUrl: "https://github.com/yourusername/chat-email-app",
  },
  {
    id: 3,
    title: "Travel Management Platform",
    iconType: "Plane",
    description:
      "A web platform to manage travel bookings, itineraries, and user profiles with a seamless user experience.",
    technologies: ["Next.js", "Node.js", "Express", "MongoDB", "GraphQL"],
    features: [
      "User travel bookings and itinerary planning",
      "Interactive dashboard for managing trips",
      "Integration with GraphQL for flexible queries",
      "Secure authentication with JWT",
      "Mobile-responsive UI",
    ],
    developerComment: "Because coding is a journey – and so is travel!",
    backgroundCode: `const trip = {\n  destinations: ['Paris', 'Cairo'],\n  plan() {\n    return 'Bon Voyage!';\n  }\n};`,
    floatingCode: "// Adventure awaits!",
    easterEgg: "Free bug ticket with every flight",
    liveUrl: "#",
    githubUrl: "https://github.com/yourusername/travel-management",
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    iconType: "ShoppingCart",
    description:
      "A full-stack e-commerce system with product listings, secure checkout, and an admin dashboard.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    features: [
      "Product catalog with search and filters",
      "Shopping cart and wishlist",
      "Secure payment integration with Stripe",
      "Admin dashboard for inventory and orders",
      "Order tracking and email notifications",
    ],
    developerComment:
      "Turning code into shopping carts – my dive into digital commerce!",
    backgroundCode: `const shop = {\n  products: [],\n  add(product) {\n    this.products.push(product);\n    console.log('Item added!');\n  }\n};`,
    floatingCode: "// Add to cart",
    easterEgg: "Buy 1 bug, get 1 feature free!",
    liveUrl: "#",
    githubUrl: "https://github.com/yourusername/ecommerce",
  },
];
