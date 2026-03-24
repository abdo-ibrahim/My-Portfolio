export type SocialLinkItem = {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "facebook";
};

export const socialLinks: SocialLinkItem[] = [
  { name: "github", url: "https://github.com/abdo-ibrahim", icon: "github" },
  { name: "linkedin", url: "https://www.linkedin.com/in/abdo-ibrahim/", icon: "linkedin" },
  { name: "facebook", url: "https://www.facebook.com/abdo.ibrahim2002", icon: "facebook" },
];
