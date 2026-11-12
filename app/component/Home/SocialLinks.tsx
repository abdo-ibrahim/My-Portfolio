import { FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";
import { socialLinks } from "../../data/social";

export default function SocialLinks({ showFacebook = true }: { showFacebook?: boolean }) {
  const icons = { github: <FiGithub />, linkedin: <FiLinkedin />, facebook: <FiFacebook /> };
  return (
    <div className="social-links">
      {socialLinks.filter(link => showFacebook || link.icon !== "facebook").map(link => (
        <a key={link.icon} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.icon}>
          {icons[link.icon]}
        </a>
      ))}
    </div>
  );
}
