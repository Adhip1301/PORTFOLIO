import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Connections = () => {
  const socialMediaLinks = [
    { href: "https://x.com/AdhipBhattacha1", icon: faXTwitter },
    {
      href: "https://www.linkedin.com/in/adhip-bhattacharya-6980aa179/",
      icon: faLinkedin,
    },
    { href: "https://github.com/Adhip1301/", icon: faGithub },
    {
      href: "https://mail.google.com/mail/u/0/?fs=1&to=adhipbhttacharya@gmail.com&tf=cm",
      icon: faEnvelope,
    },
  ];

  return (
    <div className="flex justify-center items-center gap-2 md:gap-10 w-full h-full">
      {socialMediaLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-border w-10 h-10 md:w-12 md:h-12 bg-border hover:bg-primary rounded-full p-2 mx-2 flex items-center justify-center"
        >
          <FontAwesomeIcon icon={link.icon} size="lg" />
        </a>
      ))}
    </div>
  );
};
export default Connections;
