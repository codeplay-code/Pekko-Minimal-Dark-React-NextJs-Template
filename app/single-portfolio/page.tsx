"use client";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Images
import item01img from "@/assets/images/portfolio-item/item_01.jpg";
import item02img from "@/assets/images/portfolio-item/item_02.jpg";
import item03img from "@/assets/images/portfolio-item/item_03.jpg";

// ------------

function SinglePortfolio() {
  return (
    <main className="page-background single single-portfolio">
      <div id="content" className="site-content">
        <div className="content-holder center-relative content-1170">
          <h1 className="entry-title page-title center-text">
            Art of the Camera
          </h1>

          <Swiper
            pagination={{ clickable: true }}
            loop={false}
            speed={750}
            autoplay
            modules={[Pagination, Autoplay]}
            autoHeight
            id="single-portfolio-slider"
            className="slider single-portfolio-slider relative swiper-container"
          >
            <SwiperSlide className="swiper-slide">
              <img src={item01img.src} alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src={item02img.src} alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src={item03img.src} alt="" />
            </SwiperSlide>
          </Swiper>

          <div className="two_third">
            <div className="medium-text">
              Bearable only through love hydrogen atoms bits of moving fluff
              culture shores of the cosmic ocean roxysm of global death rich in
              heavy atoms with miles away from sun.
            </div>
            <br />
            <p>
              Bearable only through love hydrogen atoms bits of moving fluff
              culture shores of the cosmic ocean paroxysm of global death rich
              in heavy atoms with pretty stories for which there’s little good
              evidence something incredible is waiting to be known not a sunrise
              but a galaxyrise shores of the cosmic ocean inconspicuous motes of
              rock.
            </p>
          </div>

          <div className="one_third last">
            <div className="info-code">
              <p className="info-code-title">PROJECT</p>
              <p className="info-code-content">Corporate Branding</p>
            </div>
            <div className="info-code">
              <p className="info-code-title">CLIENT</p>
              <p className="info-code-content">Envato Studio</p>
            </div>
            <div className="info-code">
              <p className="info-code-title">DATE</p>
              <p className="info-code-content">September 2018</p>
            </div>
            <div className="info-code">
              <p className="info-code-title">DESIGNER</p>
              <p className="info-code-content">John Petters</p>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </main>
  );
}

export default SinglePortfolio;
