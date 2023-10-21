"use client";
import { useState } from "react";

// Plugins
import { motion } from "framer-motion";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import Link from "next/link";

// Images
import img01 from "@/assets/images/home/home_01.jpg";
import img02 from "@/assets/images/home/home_02.jpg";
import img02B from "@/assets/images/home/home_02B.jpg";
import img03 from "@/assets/images/home/home_03.jpg";
import img04 from "@/assets/images/home/home_04.jpg";
import img05 from "@/assets/images/home/home_05.jpg";
import img06 from "@/assets/images/home/home_06.jpg";
import img07 from "@/assets/images/home/home_07.jpg";
import img08 from "@/assets/images/home/home_08.jpg";
import closeIcon from "@/assets/images/close.png";

// ------------

function Home() {
  const [openPortfolio, setOpenPortfolio] = useState<number>(0);

  /**
   * Open a popup of the item with the given number passed to the function
   *
   * @param num Pop up item number to be open
   */
  const handleOpenPopup = (num: number) => {
    setOpenPortfolio(num);
  };

  /**
   * Closed the opened items by reseting the {openPortfolio} variable to 0
   */
  const handleClosePopup = () => {
    setOpenPortfolio(0);
  };

  return (
    <>
      <main className="page-background">
        <div id="content" className="site-content">
          <div className="content-holder center-relative content-1170">
            <div id="portfolio-wrapper">
              <div className="our-grid">
                <motion.div
                  className="our-grid-item d-1x2 animate"
                  initial={{ opacity: 0, transform: `translateY(50px)` }}
                  whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                  viewport={{ once: true }}
                >
                  <Link className="item-link" href="/single-portfolio">
                    <img src={img01.src} alt="" />
                    <div className="portfolio-text-holder">
                      <p className="portfolio-title">PHOTOGRAPHY</p>
                    </div>
                  </Link>
                </motion.div>

                <motion.div
                  className="our-grid-item d-1x1 animate"
                  initial={{ opacity: 0, transform: `translateY(50px)` }}
                  whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                  viewport={{ once: true }}
                >
                  <a className="item-link" onClick={() => handleOpenPopup(1)}>
                    <img src={img02.src} alt="" />
                    <div className="portfolio-text-holder">
                      <p className="portfolio-title">MOCKUP</p>
                    </div>
                  </a>
                </motion.div>

                <motion.div
                  className="our-grid-item d-1x1 animate"
                  initial={{ opacity: 0, transform: `translateY(50px)` }}
                  whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                  viewport={{ once: true }}
                >
                  <a className="item-link" onClick={() => handleOpenPopup(2)}>
                    <img src={img03.src} alt="" />
                    <div className="portfolio-text-holder">
                      <p className="portfolio-title">SNEAKERS</p>
                    </div>
                  </a>
                </motion.div>

                <motion.div
                  className="our-grid-item d-2x1 animate"
                  initial={{ opacity: 0, transform: `translateY(50px)` }}
                  whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                  viewport={{ once: true }}
                >
                  <a className="item-link" onClick={() => handleOpenPopup(3)}>
                    <img src={img04.src} alt="" />
                    <div className="portfolio-text-holder">
                      <p className="portfolio-title">ARCHITECTURE</p>
                    </div>
                  </a>
                </motion.div>

                <motion.div
                  className="our-grid-item d-1x1 animate"
                  initial={{ opacity: 0, transform: `translateY(50px)` }}
                  whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                  viewport={{ once: true }}
                >
                  <Link className="item-link" href="/single-portfolio">
                    <img src={img05.src} alt="" />
                    <div className="portfolio-text-holder">
                      <p className="portfolio-title">ART</p>
                    </div>
                  </Link>
                </motion.div>

                <motion.div
                  className="our-grid-item d-1x2 animate"
                  initial={{ opacity: 0, transform: `translateY(50px)` }}
                  whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                  viewport={{ once: true }}
                >
                  <a className="item-link" onClick={() => handleOpenPopup(4)}>
                    <img src={img06.src} alt="" />
                    <div className="portfolio-text-holder">
                      <p className="portfolio-title">OFFICE</p>
                    </div>
                  </a>
                </motion.div>

                <motion.div
                  className="our-grid-item d-1x2 animate"
                  initial={{ opacity: 0, transform: `translateY(50px)` }}
                  whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                  viewport={{ once: true }}
                >
                  <Link className="item-link" href="/single-portfolio">
                    <img src={img07.src} alt="" />
                    <div className="portfolio-text-holder">
                      <p className="portfolio-title">MODEL</p>
                    </div>
                  </Link>
                </motion.div>

                <motion.div
                  className="our-grid-item d-1x1 animate"
                  initial={{ opacity: 0, transform: `translateY(50px)` }}
                  whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                  viewport={{ once: true }}
                >
                  <Link className="item-link" href="/single-portfolio">
                    <img src={img08.src} alt="" />
                    <div className="portfolio-text-holder">
                      <p className="portfolio-title">MOCKUP</p>
                    </div>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Popups */}
      <Popup
        open={openPortfolio !== 0}
        closeOnDocumentClick
        onClose={handleClosePopup}
        modal
      >
        <div className="my-popup">
          <div
            className="close-popup-btn"
            role="button"
            onClick={handleClosePopup}
          >
            <img src={closeIcon.src} alt="close icon" />
          </div>
          {openPortfolio === 1 ? (
            <div className="popup-image-box">
              <img src={img02B.src} alt="portfolio image" />
            </div>
          ) : openPortfolio === 2 ? (
            <p className="video-framer poped-up-item" onClick={close}>
              <iframe
                src="https://player.vimeo.com/video/199192931"
                width="100%"
                allow="autoplay; fullscreen"
              ></iframe>
            </p>
          ) : openPortfolio === 3 ? (
            <div className="popup-image-box">
              <img src={img04.src} alt="portfolio image" />
            </div>
          ) : openPortfolio === 4 ? (
            <p className="video-framer poped-up-item" onClick={close}>
              <iframe
                src="https://player.vimeo.com/video/199192931"
                width="100%"
                allow="autoplay; fullscreen"
              ></iframe>
            </p>
          ) : (
            <></>
          )}
        </div>
      </Popup>
    </>
  );
}

export default Home;
