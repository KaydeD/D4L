import { useState, useEffect } from "react";
import profile from './assets/profile.png';

import styles from "./App.module.css";
import KickLogo from "./components/kick";
import InstagramLogo from "./components/instagram";
import DiscordLogo from "./components/discord";
import YoutubeLogo from "./components/youtube";
import TiktokLogo from "./components/tiktok";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set a fallback timeout in case the image doesn't load
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const socials = [
    {
      platform: "Kick",
      username: "dewrld",
      url: "https://kick.com/dewrld",
      icon: <KickLogo />,
    },
    {
      platform: "Instagram Channel",
      username: "AbYIYYVgKr0PkmbZ",
      url: "https://www.instagram.com/channel/AbYIYYVgKr0PkmbZ/",
      icon: <InstagramLogo />,
    },
    {
      platform: "Discord",
      username: "vzFmZfWsMx",
      url: "https://discord.com/invite/vzFmZfWsMx",
      icon: <DiscordLogo />,
    },
    {
      platform: "Instagram",
      username: "@dewrldlive",
      url: "https://instagram.com/dewrldlive",
      icon: <InstagramLogo />,
    },
    
    {
      platform: "X (Twitter)",
      username: "@dewrlddd",
      url: "https://x.com/dewrlddd",
      icon: "𝕏",
    },
    {
      platform: "YouTube",
      username: "@dewrld",
      url: "https://youtube.com/@dewrld",
      icon: <YoutubeLogo />,
    },
    {
      platform: "TikTok",
      username: "@dewrld",
      url: "https://www.tiktok.com/@dewwrld",
      icon: <TiktokLogo />,
    },
  ];

  return (
    <div className={styles.container}>
      {/* Animated background elements */}
      <div className={styles.bgGradient}></div>
      <div className={styles.bgNoise}></div>
      <div className={styles.floatingOrbs}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
      </div>

      {/* Profile section */}
      <div
        className={`${styles.profileSection} ${isLoaded ? styles.visible : ""}`}
      >
        <div className={styles.profileImageContainer}>
          <div className={styles.imageGlow}></div>
          <img
            src={profile}
            alt="D4L Profile"
            className={styles.profileImage}
            onLoad={handleImageLoad}
          />
        </div>

        <div className={styles.logoContainer}>
          <h1 className={styles.logo}>D4L</h1>
          <div className={styles.logoGlow}></div>
        </div>

        <p className={styles.tagline}>DEWRLD LIVE • DEWRLDDD</p>
      </div>

      {/* Social links */}
      <div className={styles.linksContainer}>
        {socials.map((social, index) => (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.linkCard} ${isLoaded ? styles.visible : ""}`}
            style={{ animationDelay: `${0.3 + index * 0.1}s` }}
          >
            <div className={styles.linkGlow}></div>
            <span className={styles.linkIcon}>{social.icon}</span>
            <div className={styles.linkContent}>
              <span className={styles.linkPlatform}>{social.platform}</span>
              <span className={styles.linkUsername}>{social.username}</span>
            </div>
            <span className={styles.linkArrow}>→</span>
          </a>
        ))}
      </div>

      {/* Footer */}
      <div className={`${styles.footer} ${isLoaded ? styles.visible : ""}`}>
        <p className={styles.businessInquiry}>
          2025 is the year to lock in chat 💯 ALL BUSINESS INQUIRIES -
          dewrldbusiness@gmail.com
        </p>
        <p className={styles.copyright}>© 2026 D4L • All Rights Reserved</p>
      </div>
    </div>
  );
};

export default App;