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
    id: "ai-design-assistant",
    title: "AI Design Assistant",
    valueStatement: "Empowering designers with intelligent automation and creative insights",
    thumbnail: "https://images.unsplash.com/photo-1758626038030-96f813504d15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY2MzkyMDQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["AI Workflow", "UX", "Product Strategy", "Design Systems"],
    hero: "https://images.unsplash.com/photo-1758626038030-96f813504d15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY2MzkyMDQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    impactStatement: "Reduced design iteration time by 60% while improving design quality and consistency across 200+ screens",
    role: "Lead UX Designer & AI Integration Specialist",
    team: "3 Designers, 4 Engineers, 1 Product Manager",
    timeline: "6 months (Jan 2024 - Jun 2024)",
    problem: "Design teams were spending excessive time on repetitive tasks, leading to slower iteration cycles and inconsistent design patterns across products. The need for rapid prototyping conflicted with maintaining quality standards.",
    process: [
      "Conducted comprehensive user research with 50+ designers across 3 companies",
      "Mapped existing workflows and identified automation opportunities",
      "Prototyped AI-assisted design generation and validation tools",
      "Iterated on feedback through 12 rounds of user testing",
      "Implemented design system integration for consistency"
    ],
    keyDecisions: [
      "Chose to focus on augmentation rather than replacement of designer workflows",
      "Implemented a feedback loop that learns from designer preferences",
      "Created guardrails to ensure AI suggestions align with brand guidelines",
      "Built transparency into AI decision-making to maintain designer trust"
    ],
    aiEnabled: {
      ideation: "Used GPT-4 to generate diverse concept variations based on design briefs, reducing initial brainstorming time from days to hours",
      research: "Leveraged AI to analyze 10,000+ user interviews and surface key patterns, identifying pain points 3x faster than manual analysis",
      uiVariations: "Generated 50+ layout alternatives using Stable Diffusion, allowing rapid exploration of design directions",
      automation: "Automated component documentation and design spec generation, saving 15 hours per week per designer",
      iteration: "AI-powered A/B testing predictions helped prioritize which designs to test, improving conversion rates by 40%"
    },
    impact: {
      metrics: [
        "60% reduction in design iteration time",
        "40% improvement in design-to-development handoff accuracy",
        "200+ screens delivered with consistent design patterns",
        "95% designer satisfaction score"
      ],
      results: "The AI Design Assistant transformed our team's workflow, enabling us to move from concept to production in half the time while maintaining higher quality standards. The tool has been adopted by 3 additional teams across the organization."
    },
    reflection: "This project taught me the importance of designing AI tools that amplify human creativity rather than replace it. The key success factor was continuous collaboration with designers to ensure the AI augmented their expertise rather than dictating design decisions. Moving forward, I'm excited to explore how AI can further enhance collaborative design processes.",
    isAIEnhanced: true
  },
  {
    id: "enterprise-design-system",
    title: "Enterprise Design System",
    valueStatement: "Scaling design excellence across a global organization",
    thumbnail: "https://images.unsplash.com/photo-1698440050363-1697e5f0277c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc2NjM2OTE0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Design Systems", "UX", "Leadership", "Accessibility"],
    hero: "https://images.unsplash.com/photo-1698440050363-1697e5f0277c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc2NjM2OTE0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    impactStatement: "Unified design language across 50+ products, reducing design debt by 70% and accelerating product development",
    role: "Design Systems Lead",
    team: "5 Designers, 6 Engineers, 2 Product Managers",
    timeline: "12 months (Jan 2023 - Dec 2023)",
    problem: "The organization had grown rapidly through acquisitions, resulting in 15+ inconsistent design languages across products. This created poor user experiences, high maintenance costs, and slow product development cycles.",
    process: [
      "Conducted comprehensive audit of existing products and design patterns",
      "Led workshops with stakeholders across 12 product teams",
      "Established design principles and governance model",
      "Built component library with 150+ reusable components",
      "Created comprehensive documentation and adoption guidelines"
    ],
    keyDecisions: [
      "Prioritized accessibility (WCAG 2.1 AA) from day one rather than retrofitting",
      "Built gradual adoption path allowing teams to migrate at their own pace",
      "Created design tokens for theming to support white-label products",
      "Established dedicated support team for system adoption"
    ],
    aiEnabled: {
      ideation: "Used AI to analyze existing UI patterns across products and identify common elements, reducing audit time by 50%",
      research: "Leveraged machine learning to analyze user feedback across products and identify consistency pain points",
      uiVariations: "Generated component variations for different use cases using AI, expanding coverage by 30%",
      automation: "Automated design token generation and documentation updates, maintaining system consistency",
      iteration: "AI-powered testing identified accessibility issues early, catching 85% of problems before user testing"
    },
    impact: {
      metrics: [
        "70% reduction in design debt across product portfolio",
        "3x faster component development time",
        "100% WCAG 2.1 AA compliance",
        "50+ products successfully migrated to new system"
      ],
      results: "The design system became the foundation for all product development, enabling consistent user experiences and significantly faster time-to-market. The system has been recognized as a best-in-class example within the industry."
    },
    reflection: "Building a design system is as much about people and process as it is about components. The key to success was creating a culture of contribution and establishing clear governance that balanced consistency with team autonomy. The investment in AI-powered tools accelerated development while maintaining quality standards.",
    isAIEnhanced: true
  },
  {
    id: "mobile-banking-redesign",
    title: "Mobile Banking Redesign",
    valueStatement: "Transforming complex financial services into intuitive mobile experiences",
    thumbnail: "https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY2MzUyMDg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Product Strategy", "UX", "Mobile", "User Research"],
    hero: "https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY2MzUyMDg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    impactStatement: "Increased user engagement by 145% and reduced support calls by 60% through streamlined mobile experience",
    role: "Lead Product Designer",
    team: "4 Designers, 8 Engineers, 2 Product Managers, 1 User Researcher",
    timeline: "9 months (Mar 2023 - Nov 2023)",
    problem: "Users found the existing mobile banking app confusing and difficult to navigate, leading to high abandonment rates and increased support costs. The app hadn't been updated in 3 years and failed to meet modern user expectations.",
    process: [
      "Conducted user research with 100+ customers through interviews and usability testing",
      "Analyzed behavioral data from 50,000+ sessions to identify friction points",
      "Created personas and journey maps for key user segments",
      "Designed and tested 5 rounds of prototypes with users",
      "Implemented phased rollout with continuous feedback collection"
    ],
    keyDecisions: [
      "Simplified navigation from 7 tabs to 4 primary sections based on user mental models",
      "Introduced predictive features that surface relevant actions based on user behavior",
      "Redesigned transaction flow to reduce steps from 8 to 3",
      "Created progressive disclosure pattern to manage complexity for power users"
    ],
    impact: {
      metrics: [
        "145% increase in daily active users",
        "60% reduction in customer support calls",
        "4.7★ App Store rating (up from 2.8★)",
        "3x increase in mobile transaction volume"
      ],
      results: "The redesigned mobile app transformed the user experience, making banking tasks intuitive and efficient. Customer satisfaction scores reached all-time highs, and the app became a competitive differentiator for customer acquisition."
    },
    reflection: "This project reinforced the importance of deeply understanding user needs rather than making assumptions. The success came from ruthlessly simplifying complex features while maintaining power user functionality through thoughtful progressive disclosure. Traditional research methods combined with behavioral analytics provided the insights needed to make confident design decisions.",
    isAIEnhanced: false
  }
];
