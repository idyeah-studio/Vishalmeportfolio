export interface CaseStudy {
  id: string;
  title: string;
  valueStatement: string;
  thumbnail: string;
  tags: string[];
  hero: string;
  impactStatement: string;
  role: string;
  team: string;
  timeline: string;
  problem: string;
  process: string[];
  keyDecisions: string[];
  screenshots?: string[];
  aiEnabled?: {
    ideation: string;
    research: string;
    uiVariations: string;
    automation: string;
    iteration: string;
  };
  impact: {
    metrics: string[];
    results: string;
  };
  reflection: string;
  isAIEnhanced: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "apple-intelligence-shipping",
    title: "Apple Intelligence Shipping",
    valueStatement: "Designing trust into AI-powered logistics workflows",
    thumbnail: "/Vishalmeportfolio/images/Screen-02.png",
    tags: ["AI Workflows", "UX Design", "Enterprise", "Trust & Transparency"],
    hero: "/Vishalmeportfolio/images/Screen-01.png",
    impactStatement: "Transformed Apple's shipping operations by cutting shipment creation time by over 50% while building manager confidence through AI-powered workflows designed for trust, transparency, and human oversight.",
    screenshots: [
      "/Vishalmeportfolio/images/Screen-01b.png",
      "/Vishalmeportfolio/images/Screen-03.png",
      "/Vishalmeportfolio/images/Screen-04.png",
    ],
    role: "UX Design Lead",
    team: "Cross-functional team including Logistics Managers, Product Managers, and Engineering",
    timeline: "6 months",
    problem: "Apple's shipping portal relied heavily on manual workflows and fragmented processes, leading to delays, data entry errors, and frustrated managers.\n\nLeadership's push to embed Apple Intelligence—originally designed for consumer products—into enterprise logistics presented a unique challenge: how to adapt consumer-focused AI for the complex, compliance-heavy demands of enterprise shipping while building trust among skeptical users.",
    process: [
      "Conducted detailed audit of existing shipping portal and workflows to identify inefficiencies and pain points, revealing heavy reliance on manual data entry with zero AI support",
      "Designed and prototyped AI Assist modes: Prompt Mode for natural language entry and Quick Entry for guided form completion, integrated alongside traditional manual entry options",
      "Established trust-first design principles: surfacing intent and rationale, ensuring reversible actions, and providing layered transparency from quick explanations to deep assumptions",
      "Conducted workshops and prototype testing sessions with logistics managers to validate AI behaviors and refine based on real-world trust concerns",
      "Led advocacy efforts with senior leadership to reframe AI strategy from 'automation at all costs' to credibility-first adoption, proposing dual strategies for different workflow maturity levels"
    ],
    keyDecisions: [
      "Chose Credibility-First Strategy for existing workflows: embedded low-risk AI features with strong explainability, such as reroute suggestions with visible rationale and auto-populated compliance details with manual override capability",
      "Implemented Efficiency-First Strategy for new workflows: leaned into automation for less critical paths while maintaining guardrails and user control",
      "Prioritized explainability and reversibility over pure automation speed, shifting AI from 'black box executor' to 'credible copilot'",
      "Designed multiple entry modes to accommodate different user comfort levels, allowing gradual AI adoption without forcing abrupt workflow changes"
    ],
    aiEnabled: {
      ideation: "AI-powered rerouting suggestions based on real-time hub delays and capacity analysis, with clear explanations of why each route was recommended",
      research: "Analysis of logistics data patterns to identify bottlenecks and predict shipment issues before they occur, enabling proactive decision-making",
      uiVariations: "Natural language Prompt Mode allowing managers to create shipments conversationally, plus Quick Entry mode with AI-assisted form completion",
      automation: "Auto-surfaced compliance requirements including lithium battery certifications, hazardous material documentation, and international shipping regulations, reducing manual lookup time and errors",
      iteration: "AI-powered decision support providing managers with suggested actions, supporting data, and confidence to reverse or modify AI recommendations at any point"
    },
    impact: {
      metrics: [
        "50%+ reduction in shipment creation time through AI-assisted prompts and quick-entry workflows",
        "Significant decrease in human errors via auto-surfaced compliance details and validation checks",
        "Improved manager adoption rates by designing for trust, with users reporting AI feels like a 'copilot' rather than a 'black box'",
        "Established scalable patterns for embedding AI across other Apple enterprise tools"
      ],
      results: "The redesigned shipping portal transformed daily operations for logistics managers. By balancing efficiency gains with human oversight, the system enabled managers to process shipments faster while maintaining confidence in every decision.\n\nThe trust-first approach led to widespread adoption, with managers actively choosing AI-assisted workflows over traditional manual entry.\n\nThe project demonstrated that enterprise AI success depends not just on technical capability, but on thoughtful design that respects user expertise and builds credible, transparent systems."
    },
    reflection: "This project reinforced that efficiency is the easy part—trust is the real challenge in enterprise AI. Small design choices, like adding a simple undo option or one-line rationale, carried disproportionate weight in user adoption.\n\nThe key insight: enterprise AI should be about augmentation, not replacement. Logistics managers didn't want an autopilot; they wanted a copilot that handled grunt work while preserving their judgment and accountability.\n\nBy embedding explainability, reversibility, and layered transparency into the foundation, we created patterns that can scale beyond shipping to other enterprise contexts.\n\nThe experience also taught me that storytelling bridges leadership vision and user reality—reframing AI as a 'credibility challenge' rather than just a 'productivity booster' allowed us to align ambitious goals with practical adoption concerns.",
    isAIEnhanced: true
  },
  {
    id: "dv-design-system",
    title: "DV Design System",
    valueStatement: "Transforming Walmart Enterprise UX",
    thumbnail: "/Vishalmeportfolio/images/dv-design-system/thumbnail.png",
    tags: ["Design Systems", "UX", "Enterprise", "Data Visualization"],
    hero: "/Vishalmeportfolio/images/dv-design-system/hero.png",
    impactStatement: "Transformed UX and operational efficiency across Walmart's enterprise applications through a unified, scalable design framework that boosted designer productivity by 30%, enabled zero design debt for new products, and established industry-leading data visualization components.",
    screenshots: [
      "/Vishalmeportfolio/images/dv-design-system/screenshot-01.png",
      "/Vishalmeportfolio/images/dv-design-system/screenshot-02.png",
      "/Vishalmeportfolio/images/dv-design-system/screenshot-03.png",
      "/Vishalmeportfolio/images/dv-design-system/screenshot-04.png",
      "/Vishalmeportfolio/images/dv-design-system/screenshot-05.png",
      "/Vishalmeportfolio/images/dv-design-system/screenshot-06.png",
      "/Vishalmeportfolio/images/dv-design-system/screenshot-07.png",
    ],
    role: "Design Lead, System Architect, Team Collaborator, Process Innovator",
    team: "Cross-functional teams including designers, engineers, product managers, and stakeholders across multiple Walmart enterprise products",
    timeline: "11 months (Research: 1 month, Design: 6 months, Development: 4 months, Evolution: Ongoing)",
    problem: "Walmart's enterprise applications suffered from inconsistent user experience and lack of standardization across products. Each application had developed independently, creating a fragmented interface that varied significantly across different tools.\n\nThe existing Living Design framework, tailored primarily for e-commerce, didn't meet the specific needs of data-heavy enterprise applications.\n\nThis scenario demanded a comprehensive and adaptable design system to bring consistency across Walmart's suite of products while adhering to brand guidelines and supporting complex data visualization requirements.",
    process: [
      "Conducted comprehensive audit across all products to understand existing inconsistencies and gaps, establishing a clear baseline of issues and demonstrating the critical need for standardized design",
      "Led design and development of UI components with regular feedback loops from cross-functional teams to ensure practical applicability and ease of integration",
      "Established structured processes for contributing to and reviewing the design system, including regular design system office hours to promote ongoing engagement and iterative improvement",
      "Organized training sessions and workshops to educate teams and advocate for the new design system, highlighting benefits and encouraging adoption",
      "Developed comprehensive documentation covering component usage, design principles, and implementation guidelines to support designers and developers"
    ],
    keyDecisions: [
      "Proposed evidence-based migration strategies informed by comprehensive research and analysis of previous implementations within Walmart, collecting insights from teams that had integrated subsystems based on Living Design",
      "Implemented Gradual Integration Strategy for teams with deeply entrenched existing systems, recommending phased integration starting with less critical applications to minimize disruption and allow continuous iterations",
      "Established Full-Scale Adoption Strategy for teams in early stages of product development, involving comprehensive shift to new design system with extensive training and resource allocation",
      "Created suite of complex, highly flexible data visualization components (Line Graphs, Bar Charts, Donut Charts, Area Charts, Sankey Charts, Data Tables) specifically designed to handle extreme data demands while maintaining performance and aesthetic integrity",
      "Prioritized customization and flexibility in components to accommodate diverse user needs across Walmart's enterprise ecosystem"
    ],
    aiEnabled: {
      ideation: "Leveraged generative AI tools like Midjourney and ChatGPT to rapidly explore component variations and design possibilities, reducing ideation time by 40% while uncovering innovative approaches to complex data visualization challenges that traditional methods might have missed",
      research: "Deployed AI-powered analysis tools to audit existing design patterns across Walmart's 12+ product suite in days instead of weeks, automatically identifying 200+ inconsistencies and standardization opportunities that would have taken months to catalog manually",
      uiVariations: "Used AI to generate dozens of design variations for complex components in minutes, enabling rapid A/B testing and exploration of different approaches to data visualization and interaction patterns—accelerating the design iteration process by 3-4x",
      automation: "Implemented AI-driven automated documentation generation using GPT-4, reducing documentation time from 2 hours per component to 15 minutes, while maintaining consistency and comprehensiveness across all 50+ design system components",
      iteration: "Applied AI-powered sentiment analysis and feedback synthesis across 100+ stakeholder comments from designers, engineers, and product managers, condensing week-long review cycles into same-day actionable insights that informed faster, more confident design decisions"
    },
    impact: {
      metrics: [
        "30% increase in designer productivity, allowing teams to focus on user experience enhancements rather than repetitive design issues",
        "Zero design debt for new product LIMA, which launched as first full implementation of design system and served as successful proof of concept",
        "Consistent UX across all enterprise platforms, elevating user satisfaction and streamlining brand presentation across digital touchpoints",
        "Scalable and adaptable components adopted by multiple teams beyond initial scope, facilitating quicker roll-outs of new features",
        "Faster feature development for engineers through reusable component code, reducing development time and technical debt",
        "Broader organizational recognition with design system components becoming new standard for consistency and collaboration across product teams"
      ],
      results: "The DV Design System fundamentally transformed Walmart's enterprise application landscape. By establishing a unified design language and comprehensive component library, the system eliminated inconsistencies that had plagued the product suite.\n\nThe sophisticated data visualization tools—including advanced charts and interactive data tables—significantly improved decision-making processes by providing clear, accurate representations of complex datasets. Stakeholders could derive insights more efficiently and make informed decisions swiftly.\n\nThe system's success catalyzed a cultural shift within the organization, where design standardization and user-centric approaches became widely accepted and appreciated. This transformation fostered a more collaborative and innovative working environment, with the design system continuing to serve as the foundation for enterprise applications and setting benchmarks for future projects."
    },
    reflection: "This project reinforced several critical lessons about design systems at enterprise scale.\n\nPrioritization and strategic focus proved essential—balancing immediate needs with long-term goals while managing multiple stakeholders required disciplined filtering and task management. I learned that strategic objectives can be met without compromising quality when priorities are clear and well-communicated.\n\nStakeholder engagement and transparent communication were invaluable; regular updates, feedback sessions, and proactive discussions helped align the project with business goals and mitigate resistance to change. Effectively communicating the vision and incremental benefits significantly enhanced buy-in and facilitated smoother transitions.\n\nAdapting the design system to integrate with Walmart's Living Design framework while addressing unique enterprise needs taught me the importance of flexibility in design thinking—being open to evolve based on insights gained along the way.\n\nLeading this initiative deepened my understanding of leadership nuances and the power of mentorship; fostering collaboration and mentoring junior designers not only contributed to project success but built a resilient team capable of tackling future challenges.\n\nThe project pushed my technical boundaries, especially in developing complex data visualization components, sparking deeper interest in exploring innovative solutions to enhance user experience.\n\nMost importantly, I learned that successful design systems require more than great components—they need robust processes, continuous education, and cultural transformation to truly take root and deliver lasting value.",
    isAIEnhanced: true
  },
  {
    id: "customer-portal-2-0",
    title: "Customer Portal 2.0",
    valueStatement: "Maximizing system utilization for hospitals",
    thumbnail: "/Vishalmeportfolio/images/customer-portal/thumbnail.png",
    tags: ["Product Design", "UX", "Enterprise", "Healthcare", "Data Visualization"],
    hero: "/Vishalmeportfolio/images/customer-portal/hero.png",
    impactStatement: "Transformed Intuitive Surgical's Customer Portal to help hospital nurses efficiently manage robotic surgical inventory and maximize system utilization, resulting in improved user satisfaction, streamlined operations, and data-driven decision making through innovative tree map and matrix chart visualizations.",
    screenshots: [
      "/Vishalmeportfolio/images/customer-portal/screenshot-01.png",
      "/Vishalmeportfolio/images/customer-portal/screenshot-02.png",
      "/Vishalmeportfolio/images/customer-portal/screenshot-03.png",
      "/Vishalmeportfolio/images/customer-portal/screenshot-04.png",
      "/Vishalmeportfolio/images/customer-portal/screenshot-05.png",
      "/Vishalmeportfolio/images/customer-portal/screenshot-06.png",
      "/Vishalmeportfolio/images/customer-portal/screenshot-07.png",
    ],
    role: "Product Design Lead, Sr. Interaction Designer",
    team: "UX Researcher, Product Manager, Customer Onboarding Team, Engineering",
    timeline: "6 months",
    problem: "75% of users were not satisfied with how the Customer Portal supported their business needs. Hospital nurses managing Intuitive Surgical's da Vinci robotic systems faced significant challenges in running operating rooms smoothly.\n\nThey struggled to know when and how much equipment to order, had difficulty maximizing robot utilization, found navigation painful (8/10 users), discovered no valuable insights to help maximize facility utilization (7/10 users), and encountered error-prone workflows for inventory returns (7/10 users).\n\nThe portal, built in 2016, lacked core usability, actionable insights, and critical functionality needed for efficient robotic surgery program management.",
    process: [
      "Conducted comprehensive user research including usability audit of Customer Portal 1.0, user interviews with hospital staff, development of user personas focusing on busy professional nurses, and Jobs to be Done (JTBD) framework to discover usability gaps, find missing features, and record undocumented user behaviors",
      "Identified surprising user behaviors: half the users didn't scroll to discover information, most users downloaded data into Excel for offline analysis, and almost all users managed inventory par levels by gut feeling rather than data",
      "Tackled navigation and information architecture challenge by testing two approaches—Category-based (80% success, 74% directness) vs Task-based (73% success, 73% directness)—with 30 total users, conducting qualitative study to resolve inconclusive quantitative results",
      "Explored three data visualization patterns to answer key questions about system utilization (which robots do more cases, AM vs PM distribution, longest idle times) and inventory management (what's running low, most ordered items, spending patterns)",
      "Conducted usability testing with 9 users covering primary JTBD (right inventory at right time, maximize facility utilization) and 1 user for secondary JTBD (accounting), measuring ease of discovery, ease of use, task completion rate, and time on task",
      "Performed competitive study of data storytelling, identifying tree maps (composition, distribution) and matrix charts (trends, comparison) as most user-friendly data visualization options for portal insights",
      "Engaged cross-functional partners early through T-shirt sizing exercises and feasibility study to validate process readiness, data availability, and implementation capabilities, successfully mitigating development risks"
    ],
    keyDecisions: [
      "Selected Category-based Information Architecture over Task-based approach based on qualitative study revealing user confusion with task labels like 'Monitor Status' that lacked clear context",
      "Designed actionable insights using tree maps and matrix charts specifically chosen after auditing all features and existing data, pressure-testing ideas with internal users to ensure meaningful insights",
      "Implemented design refinements based on two rounds of usability findings: improved chart interaction clarity, made pie areas clickable, provided clear past order details, acknowledged user preference for data downloads, and enabled robot usage comparison",
      "Prioritized early collaboration with cross-functional partners (process, data, engineering) to ensure feasibility and mitigate surprises during development, successfully keeping project on track with some nice-to-haves added",
      "Accepted strategic trade-offs: dropped 'Inventory par levels' feature due to process limitations and put mobile implementation on hold due to business constraints, maintaining focus on high-impact deliverables"
    ],
    impact: {
      metrics: [
        "Improved core usability with Category-based navigation achieving 80% success score and 74% directness score",
        "Provided rich, actionable insights through tree maps showing inventory composition and spending patterns, plus matrix charts displaying system utilization trends",
        "Added critical functionality for tracking inventory metrics, ordering instruments, managing par levels, tracking system utilization, and reporting program efficiency to leadership",
        "Successful pilot implementation of design system, establishing reusable patterns for enterprise healthcare applications",
        "Perfect user alignment achieved through Jobs to be Done framework, ensuring features matched actual nurse workflows and priorities",
        "Successful risk mitigation through early cross-functional collaboration, delivering on-track project with added nice-to-haves"
      ],
      results: "The redesigned Customer Portal 2.0 fundamentally transformed how hospitals manage their robotic surgical programs. By addressing the core pain point that 75% of users were dissatisfied, the new portal empowered nurses to efficiently manage inventory and maximize system utilization.\n\nThe innovative data visualizations—tree maps for inventory composition and matrix charts for usage trends—replaced gut-feeling decisions with data-driven insights. Users could now quickly identify which robots performed more cases, understand AM vs PM utilization patterns, spot inventory running low, and track spending patterns.\n\nThe streamlined, intuitive workflows reduced administrative burden and minimized errors in inventory returns.\n\nHospital staff praised the transformation: 'The new data visualizations have transformed how we manage our surgical instruments. We now have clear, immediate insights that help us make informed decisions quickly,' noted a Robotics Coordinator at Sutter Health.\n\nAnother user emphasized: 'The updated workflow is a game changer. It's streamlined and intuitive, making our daily operations smoother and reducing time spent on administrative tasks.'\n\nThe portal's success demonstrated that deep user research using JTBD framework, combined with innovative data visualization and early stakeholder collaboration, can turn user frustration into satisfaction and operational excellence."
    },
    reflection: "This project delivered powerful lessons about user-centered design in complex healthcare environments.\n\nPartnering with departments having direct client contact—like Customer Onboarding—provided continuous, invaluable insights that kept the design grounded in real-world needs. I learned that corridor tests with colleagues can spot silly errors before they reach users, saving significant rework time.\n\nMost critically, early engagement with cross-functional partners across process, data, and engineering teams proved essential for mitigating risks and avoiding delays.\n\nThe Jobs to be Done framework was transformative—moving beyond surface-level feature requests to understand the underlying jobs nurses needed to accomplish (getting right inventory at right time, maximizing facility utilization) led to design decisions that truly solved problems rather than just adding features.\n\nThe qualitative follow-up after inconclusive quantitative testing taught me that numbers don't tell the whole story; understanding why users struggled with 'Monitor Status' label required conversation and observation.\n\nI also learned to embrace constraints productively; when inventory par levels couldn't be implemented due to process limitations, we focused energy on the tree map and matrix chart visualizations that became the project's most celebrated features.\n\nThe experience reinforced that successful enterprise UX requires balancing ambitious vision with pragmatic execution, continuous stakeholder communication, and deep empathy for users juggling complex, high-stakes workflows.",
    isAIEnhanced: false
  }
];
