"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Images
import logo from "@/assets/images/logo.png";

// --------------

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const pathname: string = usePathname();

  const toggleNav = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Header */}
      <div className={"menu-holder-front " + (menuOpen && "open")}>
        <div className="header-logo">
          <Link href="/">
            <img src={logo.src} alt="Pekko" />
          </Link>
        </div>

        <div className="toggle-holder">
          <div
            id="toggle"
            className={"all-loaded " + (menuOpen && "on")}
            onClick={toggleNav}
          >
            <div className="menu-line"></div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menu-holder-back"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="menu-holder-back"
          >
            <motion.div
              key="nav-holder"
              initial={{ transform: `translateY(50px)` }}
              animate={{ transform: `translateY(0px)` }}
              exit={{ transform: `translateY(50px)` }}
              className="menu-wrapper-back"
            >
              <nav id="header-main-menu">
                <ul className="main-menu sm sm-clean">
                  <li>
                    <span className="menu-num">01</span>
                    <Link
                      href="/"
                      className={pathname === "/" ? "current" : ""}
                      onClick={handleCloseMenu}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <span className="menu-num">02</span>
                    <Link
                      href="/about"
                      className={pathname === "/about/" ? "current" : ""}
                      onClick={handleCloseMenu}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <span className="menu-num">03</span>
                    <Link
                      href="/blog"
                      className={pathname === "/blog/" ? "current" : ""}
                      onClick={handleCloseMenu}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <span className="menu-num">04</span>
                    <Link
                      href="/contact"
                      className={pathname === "/contact/" ? "current" : ""}
                      onClick={handleCloseMenu}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="menu-right-text">
                <p className="menu-text-title">EMAIL</p>
                <div className="menu-text">hello@yourwebsite.com</div>
                <br />
                <p className="menu-text-title">PHONE</p>
                <div className="menu-text">+988 345 783 174</div>
                <br />
                <p className="menu-text-title">LOCATION</p>
                <div className="menu-text">
                  2546 Some Street, <br />
                  US Based Left 5,
                  <br />
                  United States, New York
                </div>
                <br />
                <div className="social-holder">
                  <a className="social-text" href="https://www.twitter.com/">
                    TWITTER
                  </a>
                  <a className="social-text" href="https://www.facebook.com/">
                    FACEBOOK
                  </a>
                  <a className="social-text" href="https://www.instagram.com/">
                    INSTAGRAM
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

<div className="menu-holder-back">
  <div className="menu-wrapper-back">
    <nav id="header-main-menu">
      <ul className="main-menu sm sm-clean">
        <li>
          <span className="menu-num">01</span>
          <a href="index.html">Home</a>
        </li>
        <li>
          <span className="menu-num">02</span>
          <a href="about.html">About</a>
        </li>
        <li>
          <span className="menu-num">03</span>
          <a href="blog.html">Blog</a>
        </li>
        <li>
          <span className="menu-num">04</span>
          <a href="contact.html">Contact</a>
        </li>
      </ul>
    </nav>

    <div className="menu-right-text">
      <p className="menu-text-title">EMAIL</p>
      <div className="menu-text">hello@yourwebsite.com</div>
      <br />
      <p className="menu-text-title">PHONE</p>
      <div className="menu-text">+988 345 783 174</div>
      <br />
      <p className="menu-text-title">LOCATION</p>
      <div className="menu-text">
        2546 Some Street, <br />
        US Based Left 5,
        <br />
        United States, New York
      </div>
      <br />
      <div className="social-holder">
        <a className="social-text" href="#">
          TWITTER
        </a>
        <a className="social-text" href="#">
          FACEBOOK
        </a>
        <a className="social-text" href="#">
          INSTAGRAM
        </a>
      </div>
    </div>
  </div>
</div>;
