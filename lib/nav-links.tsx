import {
  IconBrandBlogger,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandX,
  IconBriefcase,
  IconHome,
  IconMail,
  IconUser,
} from "@tabler/icons-react";

export const links = [
  {
    title: "Home",
    icon: <IconHome className="h-full w-full " />,
    href: "/",
  },

  {
    title: "About Me",
    icon: <IconUser className="h-full w-full " />,
    href: "/about",
  },
  {
    title: "Portfolio",
    icon: <IconBriefcase className="h-full w-full " />,
    href: "/portfolio",
  },
  {
    title: "Blog",
    icon: <IconBrandBlogger className="h-full w-full " />,
    href: "/blog",
  },

  {
    title: "Contact Me",
    icon: <IconMail className="h-full w-full " />,
    href: "/contact",
  },
];

export const socials = [
  {
    title: "Github",
    icon: <IconBrandGithub className="w-5 h-5" />,
    href: "https://github.com/wyasyn",
  },
  {
    title: "Linkedin",
    icon: <IconBrandLinkedin className="w-5 h-5" />,
    href: "https://www.linkedin.com/in/yasin-walum",
  },
  {
    title: "X.com",
    icon: <IconBrandX className="w-5 h-5" />,
    href: "https://x.com/wyasyn",
  },
  {
    title: "WhatsApp",
    icon: <IconBrandWhatsapp className="w-5 h-5" />,
    href: `https://wa.me/${
      process.env.NEXT_PUBLIC_PHONE
    }?text=${encodeURIComponent("Hi! I'm interested in your services.")}`,
  },
  {
    title: "Mail",
    icon: <IconMail className="w-5 h-5" />,
    href: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
  },
];
