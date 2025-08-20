import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "jiuyi",
    companyName: "Jiangsu Jiuyi Network Technology Co., Ltd.",
    positions: [
      {
        id: "jiuyi-senior-php",
        title: "Senior PHP Engineer",
        employmentPeriod: {
          start: "2020",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Lead development of e-commerce platforms for overseas markets
- Design and implement company internal CRM systems
- Develop custom customer service systems for internal use
- Integrate with third-party e-commerce platforms and APIs
- Architect scalable solutions for international business requirements
- Optimize system performance and database operations
- Mentor junior developers and conduct code reviews`,
        skills: [
          "PHP",
          "Laravel",
          "MySQL",
          "Redis",
          "Next.js",
          "TypeScript",
          "React",
          "API Integration",
          "CRM Development",
          "E-commerce",
          "Customer Service Systems",
          "System Architecture",
          "Team Leadership",
          "Code Review",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "houjian",
    companyName: "Nanjing Houjian Network Technology Co., Ltd.",
    positions: [
      {
        id: "houjian-php-dev",
        title: "PHP Developer",
        employmentPeriod: {
          start: "2019",
          end: "2020",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Developed local streaming media app news management system
- Built content management features for news publishing
- Implemented user authentication and authorization systems
- Optimized database performance and query efficiency
- Collaborated with mobile app development team
- Maintained and enhanced existing PHP applications`,
        skills: [
          "PHP",
          "MySQL",
          "JavaScript",
          "HTML/CSS",
          "Content Management",
          "Database Optimization",
          "API Development",
          "Team Collaboration",
        ],
      },
    ],
  },
  {
    id: "luochen",
    companyName: "Nanjing Luochen Interactive Entertainment Co., Ltd.",
    positions: [
      {
        id: "luochen-php-dev",
        title: "PHP Developer",
        employmentPeriod: {
          start: "2017",
          end: "2019",
        },
        employmentType: "Full-time",
        description: `- Developed novel copyright management system
- Built content licensing and distribution platform
- Implemented author royalty calculation system
- Created administrative dashboard for content management
- Developed user authentication and role-based access control
- Optimized database queries for large-scale content operations`,
        icon: "code",
        skills: [
          "PHP",
          "MySQL",
          "jQuery",
          "Bootstrap",
          "Copyright Management",
          "Content Management System",
          "Database Design",
          "User Authentication",
          "Admin Dashboard",
        ],
      },
    ],
  },
];
