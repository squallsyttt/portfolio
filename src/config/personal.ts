/**
 * 个人信息统一配置文件
 * Personal information configuration file
 *
 * 该文件包含项目中所有与个人信息相关的配置，
 * 包括基本信息、社交媒体、项目仓库等
 */

// ========================================
// 基本个人信息 / Personal Basic Information
// ========================================
export const PERSONAL_INFO = {
  // 姓名信息 / Name Information
  firstName: "Griffith",
  lastName: "Syt",
  displayName: "Griffith",
  username: "Griffith", // 通用用户名 / Common username

  // 性别和代词 / Gender and pronouns
  gender: "male",
  pronouns: "he/him",

  // 联系方式 / Contact Information
  email: "ZGFpQGNoYW5oZGFpLmNvbQ==", // base64 encoded: dai@chanhdai.com
  phoneNumber: "Kzg0Nzc3ODg4MTQ4", // E.164 format, base64 encoded
  address: "Nantong,JiangSu,China",

  // 简介信息 / Bio Information
  bio: "chill dude",
  flipSentences: [
    "Dota2 Player",
    "Full Stack Engineer",
    "9 years dev experience",
  ],

  // 详细简介 / Detailed About
  about: `
Hello, World! I'm Griffith — a passionate Full Stack Developer from China with 9+ years of experience building reliable, user-friendly software solutions.

As an experienced and reliable developer, I pride myself on being friendly and easy to communicate with. My technical expertise is primarily rooted in **PHP** and **Python**, with extensive experience in modern web technologies and system architecture.

**Core Specializations:**
- **WordPress Development**: Extensive experience in custom theme development, plugin creation, and site maintenance
- **CRM Systems**: Deep expertise in customer relationship management solutions
- **Real-time Communication**: Specialized in private deployment of **Workerman-based socket customer service systems**
- **Full Stack Development**: Proficient in both frontend and backend technologies

Beyond coding, I'm an avid **Dota2** player and a longtime fan of souls-like games — you could call me an old Assassin's Creed veteran! These gaming experiences have actually enhanced my problem-solving skills and attention to detail in development.

I'm currently expanding my business internationally and actively seeking new opportunities to collaborate with teams worldwide. I believe that great software comes from great teamwork, and I'm always excited to connect with fellow developers and entrepreneurs.

**Let's build something amazing together!** 🚀
  `,

  // SEO 相关 / SEO Related
  keywords:
    "griffith, griffith syt, full stack developer, php developer, python developer, wordpress developer, crm systems, workerman socket, dota2 player, china developer, 中国开发者",
  dateCreated: "2024-01-01", // YYYY-MM-DD
} as const;

// ========================================
// 职业信息 / Professional Information
// ========================================
export const PROFESSIONAL_INFO = {
  jobTitle: "Design Engineer",
  jobs: [
    {
      title: "Senior Frontend Developer & UI Design Lead",
      company: "Simplamo",
      website: "https://simplamo.com?ref=IN-926722",
    },
    {
      title: "Founder",
      company: "Quaric",
      website: "https://quaric.com",
    },
  ],
} as const;

// ========================================
// 网站和域名信息 / Website and Domain Information
// ========================================
export const WEBSITE_INFO = {
  // 主域名 / Primary Domain
  primaryDomain: "https://chanhdai.com",

  // 其他域名 / Other Domains
  otherWebsites: [
    "https://dai.ng",
    "https://dai.so",
    "https://d.io.vn",
    "https://d.id.vn",
    "https://dai.io.vn",
    "https://dai.id.vn",
    "https://chanhdai.io.vn",
    "https://chanhdai.id.vn",
    "https://ncdai.vn",
    "https://ncdai.net",
    "https://dai.is-a.dev",
  ],

  // 资源链接 / Asset Links
  avatar: "https://assets.chanhdai.com/images/chanhdai-avatar-ghibli.jpeg",
  ogImage: "https://assets.chanhdai.com/images/screenshot-og-image-dark.png",
  // namePronunciationUrl: "https://assets.chanhdai.com/audio/chanhdai.mp3", // 已禁用语音发音功能
} as const;

// ========================================
// 社交媒体信息 / Social Media Information
// ========================================
export const SOCIAL_MEDIA = {
  github: {
    username: "ncdai",
    profile: "https://github.com/ncdai",
  },
  twitter: {
    username: "iamncdai",
    profile: "https://x.com/iamncdai",
  },
  // 可以根据需要添加更多社交媒体
  // Add more social media platforms as needed
} as const;

// ========================================
// 项目仓库信息 / Project Repository Information
// ========================================
export const REPOSITORY_INFO = {
  // 当前项目仓库 / Current Project Repository
  currentProject: {
    name: "chanhdai.com",
    description: "A minimal portfolio, component registry, and blog.",
    githubRepo: "ncdai/chanhdai.com",
    githubUrl: "https://github.com/ncdai/chanhdai.com",
    homepage: "https://chanhdai.com",
  },

  // 作者信息 (用于 package.json) / Author Info (for package.json)
  author: {
    name: "Nguyen Chanh Dai",
    email: "dai@chanhdai.com",
    url: "https://github.com/ncdai",
  },

  // GitHub 赞助 / GitHub Sponsorship
  githubSponsor: "ncdai",
} as const;

// ========================================
// UTM 参数配置 / UTM Parameters Configuration
// ========================================
export const UTM_PARAMS = {
  utm_source: "chanhdai.com",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
} as const;

// ========================================
// 主题配置 / Theme Configuration
// ========================================
export const THEME_CONFIG = {
  metaThemeColors: {
    light: "#ffffff",
    dark: "#09090b",
  },
} as const;

// ========================================
// 导出用户对象 (向后兼容) / Export USER object (backward compatibility)
// ========================================
export const USER = {
  ...PERSONAL_INFO,
  ...PROFESSIONAL_INFO,
  website: WEBSITE_INFO.primaryDomain,
  otherWebsites: WEBSITE_INFO.otherWebsites,
  avatar: WEBSITE_INFO.avatar,
  ogImage: WEBSITE_INFO.ogImage,
  // namePronunciationUrl: WEBSITE_INFO.namePronunciationUrl, // 已禁用语音发音功能
} as const;
