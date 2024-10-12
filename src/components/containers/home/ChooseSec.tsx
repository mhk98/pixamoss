import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Before from "public/images/choose/before.png";
import chooseThumb from "public/images/choose/thumb.png";
import iconone from "public/images/choose/icon-one.png";
import icontwo from "public/images/choose/icon-two.png";
import iconthree from "public/images/choose/icon-three.png";
import YoutubeEmbed from "@/components/layout/youtube/YoutubeEmbed";

const ChooseSec = () => {
  const [videoActive, setVideoActive] = useState(false);

  return (
    <>
      <section className="section choose-section">
        <div className="container">
          <div className="row gaper align-items-center">
            <div className="col-12 col-lg-6">
              <div
                className="choose-section__thumb "
                data-aos="fade-left"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <Image src={Before} alt="Image" />
                <div className="video-wrap d-block d-xl-none">
                  <a
                    target="_blank"
                    title="video Player"
                    className="video-btn"
                    onClick={() => setVideoActive(true)}
                  >
                    <i className="icon-play"></i>
                  </a>
                </div>
                <div className="choose-section__thumb-video">
                  <Image src={chooseThumb} alt="Image" className="cbv" />
                  <div className="video-wrap d-none d-xl-block">
                    <a
                      title="video Player"
                      className="video-btn"
                      onClick={() => setVideoActive(true)}
                    >
                      <i className="icon-play"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xxl-5">
              <div className="section__content choose-section__content">
                <p
                  className="h6 sub-title "
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="100"
                >
                  why choose us
                </p>
                <h2
                  className="h2 title "
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="100"
                >
                  why we are special
                </h2>
                <ul>
                  <li
                    className=""
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="100"
                  >
                    <div className="thumb">
                      <Image src={iconone} alt="Image" />
                    </div>
                    <div className="content">
                      <p className="h5">Automatic & Quick Results</p>
                      <p>
                        Clipping Path Could be a process by which photo editor
                      </p>
                    </div>
                  </li>
                  <li
                    className=""
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="100"
                  >
                    <div className="thumb">
                      <Image src={icontwo} alt="Image" />
                    </div>
                    <div className="content">
                      <p className="h5">Increase Resolution</p>
                      <p>
                        Clipping Path Could be a process by which photo editor
                      </p>
                    </div>
                  </li>
                  <li
                    className=""
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="100"
                  >
                    <div className="thumb">
                      <Image src={iconthree} alt="Image" />
                    </div>
                    <div className="content">
                      <p className="h5">Retain Details</p>
                      <p>
                        Clipping Path Could be a process by which photo editor
                      </p>
                    </div>
                  </li>
                </ul>
                <div
                  className="cta__group "
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="100"
                >
                  <Link href="sign-in" aria-label="create account">
                    <i className="icon-arrow-right"></i>start free trail
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
        onClick={() => setVideoActive(false)}
      >
        <div className="video-inner">
          <div
            className="video-container"
            onClick={(e: any) => e.stopPropagation()}
          >
            {videoActive && <YoutubeEmbed embedId="fSv6UgCkuTU" />}
            <button
              aria-label="close video popup"
              className="close-video-popup"
              onClick={() => setVideoActive(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseSec;
