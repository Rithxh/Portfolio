import type { Project, Experience, Skill, SocialLink, Education } from '../types/data';

export const personalInfo = {
  name: 'Rithik Anand',
  title: 'Full Stack Developer',
  tagline: 'Building beautiful and functional web experiences',
  bio: 'I\'m a passionate full-stack developer with 5+ years of experience creating responsive web applications. I love working with modern technologies and solving complex problems.',
  email: 'rithikand24@gmail.com',
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'Operating System Development',
    description: 'Built a full Unix-style operating system with process and thread management, Virtual File System with vnode abstractions, and virtual memory subsystem with copy-on-write semantics and page-fault handling.',
    tags: ['C', 'Linux', 'x86'],
    github: 'https://github.com/Rithxh/Weenix',
    featured: true,
  },
  {
    id: '2',
    title: 'Yet Another Centralized Scheduler',
    description: 'Built a centralized master–worker scheduler simulating distributed cluster execution with slot-based resource allocation and MapReduce-style task dependencies, evaluating scheduling policies using multithreading and socket-based IPC.',
    tags: ['Python'],
    github: 'https://github.com/Rithxh/YACS',
    featured: true,
  },
  {
    id: '3',
    title: 'Notify',
    description: 'Designed a peer-to-peer file hosting platform leveraging WebRTC data channels for browser-to-browser transfer, implemented Node.js signaling server, and built backend services for tag-based search, rating aggregation, and metadata caching.',
    tags: ['React', 'WebRTC', 'Node.js'],
    github: 'https://github.com/Rithxh/Notify-2.0',
    featured: true,
  },
  {
    id: '4',
    title: 'Brain Tumor Segmentation',
    description: 'Implemented and benchmarked U-Net CNN architectures with attention mechanisms on multimodal medical imaging data, achieving mean IoU 0.758 and Dice score 0.81. Optimized preprocessing pipeline to improve underrepresented region accuracy by 15–20%.',
    tags: ['PyTorch', 'Python', 'Deep Learning'],
    paper: 'https://ieeexplore.ieee.org/abstract/document/10420003',
  },
  {
    id: '5',
    title: 'Artsy',
    description: 'Built a clean and modular UI using Angular and Java for consumer-facing web and Android applications. Engineered RESTful APIs with Node.js/Express backend serving MongoDB, implementing JWT-based authentication and optimized queries for scalable academic event platform on GCP.',
    tags: ['Angular', 'Node.js', 'MongoDB', 'GCP'],
    github: 'https://github.com/Rithxh/Artsy',
  },
];

export const education: Education[] = [
  {
    id: '1',
    school: 'University of Southern California',
    degree: 'Master of Science',
    field: 'Computer Science',
    duration: '2025 - 2026',
    gpa: '3.7/4.0',
    description: 'Coursework: Analysis of Algorithms, Operating Systems, Machine Learning, Web Technologies, Information Retrieval',
  },
  {
    id: '2',
    school: 'B. M. S. College of Engineering',
    degree: 'Bachelor of Engineering',
    field: 'Information Science and Engineering',
    duration: '2020 - 2024',
    gpa: '9.18/10.0',
    description: 'Coursework: Computer Networks, Computer Organization and Architecture, Data Structures and OOP, Operating Systems, Unix System Programming, Deep Learning, Database Systems, Cloud Computing',
  },
];

export const experience: Experience[] = [
  {
    id: '1',
    company: 'Fidelity Investments',
    position: 'Associate Software Engineer',
    duration: 'Aug 2024 - Dec 2024',
    description: 'Led the development of multiple web applications and mentored junior developers.',
    achievements: [
      {
        text: 'Completed an intensive software engineering bootcamp focused on writing production-quality code, designing scalable backend systems, and following enterprise development standards.',
        keywords: ['software engineering', 'production-quality', 'scalable', 'backend'],
      },
      {
        text: 'Designed and implemented the Savings Budget microservice from the ground up using modular backend patterns, ensuring clean separation of concerns and long-term maintainability.',
        keywords: ['microservice', 'backend patterns', 'separation of concerns', 'maintainability'],
      },
      {
        text: 'Integrated the service seamlessly with the existing Income Budgeting platform, enabling coordinated budgeting workflows across multiple financial modules.',
        keywords: ['integration', 'Income Budgeting', 'workflows', 'modules'],
      },
      {
        text: 'Built RESTful APIs to support core budgeting functionality, with an emphasis on extensibility, reliability, and clear API contracts.',
        keywords: ['RESTful APIs', 'budgeting', 'extensibility', 'reliability'],
      },
      {
        text: 'Improved system reliability and confidence before release by implementing comprehensive unit, integration, and end-to-end test suites, significantly increasing test coverage.',
        keywords: ['unit tests', 'integration tests', 'end-to-end', 'test coverage'],
      },
      {
        text: 'Worked closely with senior engineers and mentors to review design decisions, refactor implementations, and align with enterprise architectural guidelines.',
        keywords: ['code reviews', 'refactor', 'enterprise architecture', 'mentors'],
      },
      {
        text: 'Participated in agile ceremonies including sprint planning, stand-ups, code reviews, and retrospectives, gaining experience working within a large-scale engineering organization.',
        keywords: ['agile', 'sprint planning', 'code reviews', 'retrospectives'],
      },
    ],
  },
  {
    id: '2',
    company: 'Fidelity Investments',
    position: 'Software Engineering Co-op',
    duration: 'Feb 2024 - Jun 2024',
    description: 'Developed and maintained multiple client projects using React and Node.js.',
    achievements: [
      {
        text: 'Delivered multiple production-grade features for the Income Budgeting platform within an Nx-managed monorepo, collaborating with 3+ cross-functional teams including backend, QA, and product.',
        keywords: ['production-grade', 'Income Budgeting', 'monorepo', 'cross-functional'],
      },
      {
        text: 'Developed over 10 reusable Angular components, following shared design patterns and best practices to ensure consistency across the application.',
        keywords: ['Angular components', 'design patterns', 'reusable', 'consistency'],
      },
      {
        text: 'Used Apollo Angular to consume federated GraphQL schemas, enabling efficient data fetching and reducing unnecessary network calls.',
        keywords: ['Apollo Angular', 'GraphQL', 'data fetching', 'federated'],
      },
      {
        text: 'Integrated feature flags to safely roll out new functionality, enabling experimentation and gradual exposure without disrupting users.',
        keywords: ['feature flags', 'rollout', 'experimentation', 'gradual exposure'],
      },
      {
        text: 'Contributed to Jenkins-based CI/CD pipelines, ensuring automated builds, tests, and deployments across environments.',
        keywords: ['Jenkins', 'CI/CD', 'automated builds', 'deployments'],
      },
      {
        text: 'Achieved 100% JUnit test coverage for assigned components and services, improving confidence in releases supporting 1M+ monthly API calls.',
        keywords: ['JUnit', 'test coverage', 'API calls', 'releases'],
      },
      {
        text: 'Actively participated in sprint demos and cross-team discussions, gaining exposure to large-scale product development and coordination.',
        keywords: ['sprint demos', 'cross-team', 'product development', 'coordination'],
      },
    ],
  },
  {
    id: '3',
    company: 'Fidelity Investments',
    position: 'Software Engineering Intern',
    duration: 'May 2023 - Jun 2023',
    description: 'Contributed to the development of web applications and helped establish coding standards.',
    achievements: [
      {
        text: 'Designed and developed an NLP-based question-answering chatbot using the Haystack Retriever-Reader architecture, leveraging BM25 for efficient document retrieval.',
        keywords: ['NLP', 'chatbot', 'Haystack', 'Retriever-Reader', 'BM25'],
      },
      {
        text: 'Built an end-to-end pipeline for querying large regulatory document sets, enabling faster and more accurate information retrieval.',
        keywords: ['pipeline', 'regulatory documents', 'information retrieval', 'end-to-end'],
      },
      {
        text: 'Deployed the solution as a serverless application on AWS Lambda, ensuring scalability and cost efficiency.',
        keywords: ['serverless', 'AWS Lambda', 'scalability', 'cost efficiency'],
      },
      {
        text: 'Focused on modular design to allow easy replacement or extension of retrieval and reader components in the future.',
        keywords: ['modular design', 'extensible', 'replacement', 'components'],
      },
      {
        text: 'Presented the cloud-deployable NLP pipeline to senior stakeholders, demonstrating its potential to automate regulatory analysis and significantly reduce manual document search time.',
        keywords: ['cloud-deployable', 'NLP', 'regulatory analysis', 'stakeholders'],
      },
      {
        text: 'Gained early exposure to applied NLP systems and cloud-based deployment strategies in an enterprise environment.',
        keywords: ['NLP systems', 'cloud deployment', 'enterprise', 'strategies'],
      },
    ],
  },
];

export const skills: Skill[] = [
  {
    category: 'Programming Languages',
    items: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'TypeScript', 'Kotlin', 'SQL', 'HTML', 'CSS', 'Bash/Shell'],
  },
  {
    category: 'Machine Learning & Deep Learning',
    items: ['TensorFlow', 'PyTorch', 'Keras', 'scikit-learn', 'OpenCV'],
  },
  {
    category: 'Databases & Data Analytics',
    items: ['MySQL', 'PostgreSQL', 'GraphQL', 'MongoDB', 'Firebase', 'Tableau', 'Pandas', 'NumPy'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React', 'Angular', 'Node.js', 'Express', 'SpringBoot', 'Flask', 'JUnit', 'Mockito'],
  },
  {
    category: 'Cloud & DevOps Tools',
    items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Git/GitHub', 'GitHub Actions', 'Linux'],
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Rithxh',
    icon: '🔗',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rithikanand/',
    icon: '💼',
  },
  {
    name: 'Email',
    url: 'mailto:rithikand24@gmail.com',
    icon: '📧',
  },
];
