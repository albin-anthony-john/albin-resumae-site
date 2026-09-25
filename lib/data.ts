export const personalInfo = {
  name: "Albin Antony",
  title: "Full Stack Engineer & System Architect",
  subtitle: "Performance-Focused Backend Specialist | .NET Ecosystem Expert",
  location: "Viriyur 606402, Sankarapuram (Tk), Kallakurichi (Dt), Tamilnadu, India",
  phone: "+91 7806879029",
  email: "albinanthony.tech@gmail.com",
  github: "https://github.com/albin-anthony-john",
  linkedin: "https://www.linkedin.com/in/albin-antony-784092410",
  summary: "Full Stack Engineer and System Architect specializing in high-performance, scalable enterprise solutions. Expert in designing and optimizing APIs handling 1M+ requests/day with <100ms latency. Proven track record of reducing infrastructure costs by 35% while serving 5M+ users at 99.9% uptime. Deep expertise in .NET ecosystem, cloud-native architectures, and production-grade system design.",
};

export const skills = {
  backend: [
    { name: "ASP.NET Core & Minimal APIs", level: 95 },
    { name: "Entity Framework Core & PostgreSQL", level: 88 },
    { name: "Redis & Caching", level: 84 },
    { name: "Microservices & System Design", level: 90 },
  ],
  cloud: [
    { name: "Azure App Service, SQL & Service Bus", level: 86 },
    { name: "Docker & Kubernetes", level: 84 },
    { name: "GitHub Actions & Git", level: 82 },
    { name: "Application Insights & Observability", level: 78 },
  ],
  frontend: [
    { name: "React & TypeScript", level: 88 },
    { name: "Tailwind CSS & Bootstrap", level: 86 },
    { name: "Blazor", level: 80 },
    { name: "jQuery", level: 90 },
  ],
  advanced: [
    { name: "API Performance Tuning", level: 92 },
    { name: "OAuth 2.0 & JWT", level: 82 },
    { name: "Azure Service Bus & Kafka", level: 78 },
    { name: "AI & LLM Integration", level: 72 },
  ],
};

export const experience = [
  {
    role: "Senior Full Stack Engineer",
    company: "Enterprise Solutions",
    period: "2025 - Present",
    highlights: [
      "Led architecture and development of microservices platform serving 5M+ users",
      "Designed and implemented high-performance APIs processing 50K+ requests/second",
      "Mentored team of 8 developers on .NET best practices and system design",
      "Reduced infrastructure costs by 35% through optimization and cloud-native practices",
      "Achieved 99.9% uptime across all production systems",
    ],
  },
  {
    role: "Full Stack .NET Developer",
    company: "Tech Innovations",
    period: "2024 - 2025",
    highlights: [
      "Built enterprise SaaS platform using Blazor and ASP.NET Core",
      "Implemented CI/CD pipelines reducing deployment time by 80%",
      "Integrated AI/ML models for predictive analytics",
      "Improved application performance by 60% through caching and optimization",
      "Developed reusable component library used across multiple projects",
    ],
  },
  {
    role: "Software Engineer",
    company: "Digital Systems",
    period: "2023 - 2024",
    highlights: [
      "Developed RESTful APIs and web applications using ASP.NET Core MVC",
      "Implemented authentication and authorization using Identity Server",
      "Optimized database queries improving response times by 70%",
      "Collaborated with cross-functional teams to deliver features on schedule",
      "Participated in code reviews and established coding standards",
    ],
  },
];

export const strengths = [
  {
    title: "System Design & Architecture",
    description: "Expert in designing scalable, high-performance distributed systems with proven track record of handling millions of users",
    icon: "layers",
  },
  {
    title: "Problem Solver",
    description: "Strong analytical mindset with ability to break down complex problems and deliver elegant, maintainable solutions",
    icon: "puzzle",
  },
  {
    title: "Ownership & Accountability",
    description: "Takes full ownership of projects from conception to deployment, ensuring quality and timely delivery",
    icon: "shield",
  },
  {
    title: "Independent & Collaborative",
    description: "Autonomous developer who thrives independently while being an excellent team player and mentor",
    icon: "users",
  },
  {
    title: "Technical Leadership",
    description: "Mentors developers, conducts architecture reviews, and drives technical excellence across teams",
    icon: "award",
  },
  {
    title: "Continuous Learner",
    description: "Constantly learning new technologies and best practices, adapting quickly to evolving tech landscape",
    icon: "trending-up",
  },
];

export const testimonials = [
  {
    name: "Mr. Felix",
    role: "CTO, Enterprise Solutions",
    content: "Albin's expertise in system architecture and .NET ecosystem is exceptional. He transformed our monolithic application into a scalable microservices platform that handles millions of users effortlessly.",
    rating: 5,
  },
  {
    name: "Mr. Prathimanan",
    role: "Senior Technical Lead, Tech Innovations",
    content: "One of the most talented engineers I've worked with. His ability to solve complex problems and mentor junior developers makes him invaluable to any team.",
    rating: 5,
  },
  {
    name: "Mrs. Logeswari",
    role: "QA Lead, Quality Compliance",
    content: "Albin consistently delivers high-quality solutions on time with no defects. His technical depth combined with business understanding makes him a true full-stack architect.",
    rating: 5,
  },
];

export const architecturePrinciples = [
  {
    title: "Scalability First",
    description: "Design systems to handle 10x current load",
    points: [
      "Horizontal scaling with stateless services",
      "Distributed caching strategies",
      "Database sharding and replication",
      "Load balancing and auto-scaling",
    ],
  },
  {
    title: "Performance Optimization",
    description: "Sub-100ms response times for critical APIs",
    points: [
      "Async/await patterns for I/O operations",
      "Query optimization and indexing",
      "CDN and edge caching",
      "Database connection pooling",
    ],
  },
  {
    title: "Security by Design",
    description: "Enterprise-grade security at every layer",
    points: [
      "OAuth 2.0 / OpenID Connect",
      "Zero-trust architecture",
      "Encryption at rest and in transit",
      "Regular security audits",
    ],
  },
  {
    title: "Observability",
    description: "Complete visibility into system health",
    points: [
      "Distributed tracing",
      "Centralized logging",
      "Real-time monitoring and alerting",
      "Performance profiling",
    ],
  },
];

// How I Think - Engineering Mindset
export const engineeringMindset = {
  title: "How I Think",
  subtitle: "My Engineering Philosophy",
  principles: [
    {
      title: "Start with the Problem, Not the Technology",
      description: "I don't jump to solutions. I deeply understand the business problem, user pain points, and constraints before choosing any technology. Every architecture decision must solve a real problem.",
      icon: "target",
    },
    {
      title: "Optimize for Change, Not Perfection",
      description: "Code will change. Requirements will evolve. I design systems that are easy to modify and extend, not over-engineered for hypothetical scenarios. Pragmatism over perfectionism.",
      icon: "refresh",
    },
    {
      title: "Performance is a Feature",
      description: "Users don't care about your architecture if it's slow. I treat performance as a first-class requirement, measuring and optimizing from day one. Sub-100ms response times aren't optional.",
      icon: "zap",
    },
    {
      title: "Fail Fast, Learn Faster",
      description: "I build systems that fail gracefully and recover automatically. Circuit breakers, health checks, and automated rollbacks aren't extras—they're essentials. Production issues teach more than documentation.",
      icon: "shield-alert",
    },
    {
      title: "Data-Driven Decisions",
      description: "Opinions don't scale, metrics do. I instrument everything, analyze patterns, and let data guide technical decisions. If you can't measure it, you can't improve it.",
      icon: "bar-chart",
    },
    {
      title: "Code is Communication",
      description: "I write code for humans first, computers second. Clear naming, simple logic, and comprehensive tests make code maintainable. Future developers (including me) will thank present me.",
      icon: "message-square",
    },
  ],
};

// Production Challenges Solved
export const productionChallenges = [
  {
    challenge: "Black Friday Traffic Spike",
    situation: "E-commerce platform crashed during 10x traffic surge on Black Friday, losing $50K/hour in revenue",
    action: [
      "Implemented Redis caching layer reducing database load by 80%",
      "Added CDN for static assets cutting response times by 60%",
      "Set up auto-scaling groups handling traffic spikes automatically",
      "Configured circuit breakers preventing cascade failures",
    ],
    result: "System handled 15x traffic during next Black Friday with 99.99% uptime. Zero revenue loss.",
    impact: "15x traffic capacity | 99.99% uptime | $0 revenue loss",
  },
  {
    challenge: "Database Deadlock Crisis",
    situation: "Production database experiencing frequent deadlocks causing 30-second delays and angry customers",
    action: [
      "Analyzed query execution plans and identified lock contention patterns",
      "Redesigned transaction boundaries reducing lock duration by 90%",
      "Implemented read replicas for heavy reporting queries",
      "Added database connection pooling and query timeout handling",
    ],
    result: "Deadlocks reduced from 50+/day to zero. Query response time dropped from 30s to 200ms.",
    impact: "0 deadlocks | 200ms queries | 150x faster",
  },
  {
    challenge: "Memory Leak in Production",
    situation: "Application requiring daily restarts due to memory leak, causing 15 minutes downtime each time",
    action: [
      "Used memory profilers to identify IDisposable resources not being released",
      "Implemented proper using statements and disposal patterns throughout codebase",
      "Added memory monitoring and automatic alerts for abnormal patterns",
      "Created automated health checks triggering graceful restarts if needed",
    ],
    result: "Eliminated memory leak. Application uptime increased from 1 day to 90+ days without restart.",
    impact: "90+ days uptime | Zero forced restarts | 100% availability",
  },
  {
    challenge: "Third-Party API Cascading Failure",
    situation: "External payment API failures bringing down entire checkout flow, blocking 100% of transactions",
    action: [
      "Implemented circuit breaker pattern with fallback mechanisms",
      "Added request timeout and retry logic with exponential backoff",
      "Created async queue system for failed transactions to retry later",
      "Built comprehensive monitoring and alerting for external dependencies",
    ],
    result: "External API failures no longer impact system. Failed transactions auto-retry. 99.9% checkout success rate.",
    impact: "99.9% success rate | Zero system downtime | Auto-recovery",
  },
];

// Before vs After - Performance Optimizations
export const performanceOptimizations = [
  {
    project: "API Response Time Optimization",
    before: {
      metric: "800ms average response time",
      issues: ["N+1 database queries", "No caching layer", "Synchronous operations", "Large payload sizes"],
    },
    after: {
      metric: "45ms average response time",
      improvements: ["Added Redis caching", "Implemented async/await", "Optimized database queries", "Payload compression"],
    },
    impact: "18x faster response time | 94% improvement | 50K RPS capacity",
  },
  {
    project: "Database Query Optimization",
    before: {
      metric: "5 seconds to load dashboard",
      issues: ["Missing indexes", "Inefficient joins", "Full table scans", "No query caching"],
    },
    after: {
      metric: "300ms to load dashboard",
      improvements: ["Added strategic indexes", "Rewrote complex queries", "Implemented materialized views", "Query result caching"],
    },
    impact: "17x faster | 300ms load time | Better user experience",
  },
  {
    project: "Application Startup Time",
    before: {
      metric: "45 seconds cold start",
      issues: ["Heavy dependency injection", "Eager loading", "Inefficient initialization", "Large configuration files"],
    },
    after: {
      metric: "3 seconds cold start",
      improvements: ["Lazy loading of dependencies", "Optimized DI container", "Async initialization", "Configuration caching"],
    },
    impact: "15x faster startup | 3s cold start | Rapid deployments",
  },
  {
    project: "Infrastructure Cost Reduction",
    before: {
      metric: "$12,000/month cloud costs",
      issues: ["Over-provisioned resources", "No auto-scaling", "Inefficient resource usage", "Always-on development environments"],
    },
    after: {
      metric: "$7,800/month cloud costs",
      improvements: ["Right-sized instances", "Auto-scaling policies", "Spot instances for non-critical workloads", "Dev environment scheduling"],
    },
    impact: "35% cost reduction | $50K+ annual savings | Same performance",
  },
];
