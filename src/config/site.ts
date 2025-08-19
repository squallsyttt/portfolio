import {
  REPOSITORY_INFO,
  THEME_CONFIG,
  USER,
  UTM_PARAMS as PERSONAL_UTM_PARAMS,
} from "@/config/personal";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || REPOSITORY_INFO.currentProject.homepage,
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = THEME_CONFIG.metaThemeColors;

export const MAIN_NAV: NavItem[] = [
  {
    title: "Griffithfolio",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Components",
    href: "/components",
  },
];

export const SOURCE_CODE_GITHUB_REPO =
  REPOSITORY_INFO.currentProject.githubRepo;
export const SOURCE_CODE_GITHUB_URL = REPOSITORY_INFO.currentProject.githubUrl;

export const UTM_PARAMS = PERSONAL_UTM_PARAMS;
