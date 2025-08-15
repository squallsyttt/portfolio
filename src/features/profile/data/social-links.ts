import dailydotdevIcon from "@/assets/social/dailydotdev.webp";
import githubIcon from "@/assets/social/github.webp";
import linkedinIcon from "@/assets/social/linkedin.webp";
import xIcon from "@/assets/social/x.webp";
import youtubeIcon from "@/assets/social/youtube.webp";

import type { SocialLink } from "../types/social-links";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: linkedinIcon.src,
    title: "LinkedIn",
    description: "Griffith",
    href: "",
  },
  {
    icon: githubIcon.src,
    title: "GitHub",
    description: "Griffith",
    href: "https://github.com/squallsyttt",
  },
  {
    icon: xIcon.src,
    title: "X",
    description: "Griffith",
    href: "",
  },
  {
    icon: dailydotdevIcon.src,
    title: "daily.dev",
    description: "Griffith",
    href: "",
  },
  {
    icon: youtubeIcon.src,
    title: "YouTube",
    description: "Griffith",
    href: "",
  },
];
