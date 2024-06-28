import Link from "next/link";

import {
  Notion,
  FacebookDark,
  GitHubIcon,
  InstagramBlack,
  YouTubeBlack,
  TicTocBlack,
  LinkedIn,
} from "@/icon/";

const SocialMediaBar = () => {
  const socialLinks = [
    {
      href: "https://stellar-milk-051.notion.site/f6e3585b959b4855952912000442427d?v=a58c2e7dc95d4e0482e2be5bc2ae2dad",
      icon: Notion,
      label: "Notion",
    },
    //{
    //   href: "https://www.instagram.com/devstock.pl/",
    //   icon: InstagramBlack,
    //   label: "Instagram",
    // },
    {
      href: "https://www.linkedin.com/in/przemysław-woźniak-b71a13217",
      icon: LinkedIn,
      label: "LinkedIn",
    },
    // {
    //   href: "https://www.youtube.com/@devstock",
    //   icon: YouTubeBlack,
    //   label: "YouTube",
    // },
    {
      href: "https://github.com/Prabeton",
      icon: GitHubIcon,
      label: "GitHub",
    },
  ];

  return (
    <div className="box-border flex justify-center w-screen h-10 p-0 m-0 bg-sky-950">
      <div className="box-border flex items-center justify-end w-full h-10 pr-8">
        <div className="box-border flex items-center justify-end h-5 gap-6 p-6 w-72">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}>
              <Icon size="20" stroke="#FFFFFF" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SocialMediaBar;
