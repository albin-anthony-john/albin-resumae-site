export const personalInfo = {
  name: "Albin Antony",
  title: "Full Stack Engineer & System Architect",
  subtitle: "Performance-Focused Backend Specialist | .NET Ecosystem Expert",
  location: "Viriyur 606402, Sankarapuram (Tk), Kallakurichi (Dt), Tamilnadu, India",
  phone: "+91 7806879029",
  email: "albintony2002@gmail.com",
  github: "https://github.com/albintony",
  linkedin: "https://linkedin.com/in/albin-antony",
  summary: "Full Stack Engineer and System Architect specializing in high-performance, scalable enterprise solutions. Expert in designing and optimizing APIs handling 1M+ requests/day with <100ms latency. Proven track record of reducing infrastructure costs by 35% while serving 5M+ users at 99.9% uptime. Deep expertise in .NET ecosystem, cloud-native architectures, and production-grade system design.",
};

export const skills = {
  backend: [
    { name: ".NET Core / ASP.NET Core", level: 95 },
    { name: "Web API & Minimal APIs", level: 95 },
    { name: "Microservices Architecture", level: 90 },
    { name: "System Design & Scalability", level: 90 },
    { name: "Entity Framework Core", level: 88 },
    { name: "Blazor", level: 85 },
  ],
  cloud: [
    { name: "Azure Cloud Services", level: 88 },
    { name: "Docker & Kubernetes", level: 85 },
    { name: "CI/CD Pipelines", level: 90 },
    { name: "Infrastructure as Code", level: 82 },
    { name: "Monitoring & Observability", level: 85 },
  ],
  frontend: [
    { name: "React.js", level: 88 },
    { name: "Tailwind CSS", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Bootstrap & Material UI", level: 85 },
    { name: "Responsive Design", level: 92 },
  ],
  advanced: [
    { name: "AI/LLM Integration", level: 80 },
    { name: "Third-party API Integration", level: 90 },
    { name: "Cybersecurity Best Practices", level: 85 },
    { name: "Power BI & Analytics", level: 82 },
    { name: "Performance Optimization", level: 92 },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Enterprise Microservices Platform",
    category: "Cloud Architecture",
    description: "Designed and implemented a cloud-native microservices platform serving 5M+ monthly users",
    problem: "Legacy monolithic application struggling with scalability, deployment bottlenecks, and increasing maintenance costs",
    solution: "Architected and led migration to microservices using .NET Core, Docker, Kubernetes, and Azure Service Bus",
    techStack: [".NET Core", "Kubernetes", "Azure", "Redis", "PostgreSQL", "RabbitMQ", "Docker"],
    contributions: [
      "Designed domain-driven microservices architecture with 15+ independent services",
      "Implemented API Gateway pattern with rate limiting and circuit breakers",
      "Set up distributed tracing and monitoring using Application Insights",
      "Established CI/CD pipelines reducing deployment time by 80%",
    ],
    impact: {
      performance: "99.9% uptime achieved",
      scalability: "Handled 10x traffic spikes during peak seasons",
      deployment: "Deployment time reduced from 4 hours to 15 minutes",
      cost: "Infrastructure costs reduced by 35% through auto-scaling",
    },
    featured: true,
  },
  {
    id: 2,
    title: "High-Performance Financial API",
    category: "Backend Engineering",
    description: "Built ultra-fast REST API processing 50K+ requests per second with sub-100ms latency",
    problem: "Existing API couldn't handle growing transaction volumes, causing timeouts and revenue loss",
    solution: "Developed high-performance API using .NET Minimal APIs, Redis caching, and optimized database queries",
    techStack: [".NET 8", "Minimal APIs", "Redis", "SQL Server", "Dapper", "SignalR"],
    contributions: [
      "Implemented advanced caching strategies reducing database load by 70%",
      "Optimized database queries and indexing strategies",
      "Built real-time notification system using SignalR",
      "Implemented comprehensive API security with JWT and OAuth 2.0",
    ],
    impact: {
      performance: "Response time: 45ms average (previously 800ms)",
      throughput: "50K requests/second capacity",
      reliability: "Zero downtime during deployment",
      revenue: "Prevented $2M+ annual revenue loss from timeouts",
    },
    featured: true,
  },
  {
    id: 3,
    title: "AI-Powered Analytics Dashboard",
    category: "Full Stack Development",
    description: "Real-time analytics platform integrating AI/ML models with interactive Power BI dashboards",
    problem: "Business teams lacked real-time insights and had to wait days for manual reports",
    solution: "Built full-stack solution with .NET backend, React frontend, and AI-powered predictive analytics",
    techStack: ["ASP.NET Core", "React", "Power BI", "Azure ML", "SignalR", "MongoDB"],
    contributions: [
      "Integrated Azure Machine Learning models for predictive analytics",
      "Developed real-time data processing pipeline handling 1M+ events/day",
      "Created interactive dashboards with drill-down capabilities",
      "Implemented role-based access control and data security",
    ],
    impact: {
      efficiency: "Report generation time: instant (previously 2-3 days)",
      accuracy: "87% prediction accuracy for sales forecasting",
      adoption: "Used by 500+ business users daily",
      decisions: "Enabled data-driven decisions reducing inventory costs by 22%",
    },
    featured: true,
  },
  {
    id: 4,
    title: "Blazor Enterprise SaaS Platform",
    category: "Full Stack Development",
    description: "Multi-tenant SaaS application with advanced security and compliance features",
    problem: "Multiple customers needed isolated environments with strict security and compliance requirements",
    solution: "Developed multi-tenant Blazor Server application with tenant isolation and enterprise features",
    techStack: ["Blazor Server", "ASP.NET Core", "SQL Server", "Azure AD", "Redis"],
    contributions: [
      "Architected multi-tenancy with complete data isolation",
      "Implemented SSO integration with Azure AD and OAuth providers",
      "Built comprehensive audit logging and compliance reporting",
      "Created reusable component library with 50+ components",
    ],
    impact: {
      clients: "Serving 150+ enterprise clients",
      security: "SOC 2 Type II compliant",
      performance: "Interactive UI with <100ms response times",
      development: "Component reusability improved development speed by 60%",
    },
    featured: true,
  },
  {
    id: 5,
    title: "Distributed Event Processing System",
    category: "System Architecture",
    description: "Event-driven architecture processing millions of events with guaranteed delivery",
    problem: "System failures caused data loss and inconsistencies across distributed services",
    solution: "Implemented event sourcing and CQRS patterns with guaranteed message delivery",
    techStack: [".NET Core", "Kafka", "Event Store", "MongoDB", "PostgreSQL"],
    contributions: [
      "Designed event sourcing architecture with complete audit trail",
      "Implemented CQRS pattern for read/write optimization",
      "Built idempotent event handlers for exactly-once processing",
      "Created automated event replay and recovery mechanisms",
    ],
    impact: {
      reliability: "Zero data loss with 99.99% delivery guarantee",
      performance: "Processing 5M+ events daily",
      recovery: "Automated recovery from failures in <5 minutes",
      compliance: "Complete audit trail for regulatory requirements",
    },
    featured: false,
  },
  {
    id: 6,
    title: "Legacy System Modernization",
    category: "Migration & Refactoring",
    description: "Modernized legacy .NET Framework monolith to cloud-native .NET Core architecture",
    problem: "10-year-old .NET Framework application with high maintenance costs and no cloud support",
    solution: "Phased migration to .NET Core with zero downtime using strangler fig pattern",
    techStack: [".NET Core", "Azure App Service", "Azure SQL", "Azure DevOps"],
    contributions: [
      "Planned and executed phased migration strategy",
      "Refactored legacy code to modern patterns and practices",
      "Migrated on-premise SQL Server to Azure SQL with minimal downtime",
      "Established automated testing achieving 85% code coverage",
    ],
    impact: {
      performance: "Application startup time: 3s (previously 45s)",
      maintenance: "Bug resolution time reduced by 65%",
      cost: "Hosting costs reduced by 40%",
      deployment: "Deployment frequency increased from monthly to daily",
    },
    featured: false,
  },
];

export const experience = [
  {
    role: "Senior Full Stack Engineer",
    company: "Enterprise Solutions",
    period: "2021 - Present",
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
    period: "2019 - 2021",
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
    period: "2017 - 2019",
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

export const certifications = [
  "Microsoft Certified: Azure Solutions Architect Expert",
  "Microsoft Certified: Azure Developer Associate",
  ".NET Core Advanced Architecture & Design Patterns",
  "Kubernetes Application Developer (CKAD)",
  "AWS Certified Solutions Architect",
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, Enterprise Solutions",
    content: "Albin's expertise in system architecture and .NET ecosystem is exceptional. He transformed our monolithic application into a scalable microservices platform that handles millions of users effortlessly.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Engineering Manager, Tech Innovations",
    content: "One of the most talented engineers I've worked with. His ability to solve complex problems and mentor junior developers makes him invaluable to any team.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Product Director",
    content: "Albin consistently delivers high-quality solutions on time. His technical depth combined with business understanding makes him a true full-stack architect.",
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
