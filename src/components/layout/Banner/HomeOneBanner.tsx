import React from "react";
import Link from "next/link";
import Image from "next/image";
import thumb from "public/images/banner/thumb.png";
import after from "public/images/banner/after.png";
import one from "public/images/banner/one.png";
import two from "public/images/banner/two.png";
import three from "public/images/banner/three.png";
import four from "public/images/banner/four.png";

const HomeOneBanner = () => {
  return (
    <section className="banner bg-white">
      <div className="container">
        <div className="row justify-content-center gaper">
          <div className="col-12 col-md-10 col-xxl-11">
            <div className="banner__content">
              <p
                className="h6 "
                data-aos="fade-left"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                Get pixel perfect image editing services
              </p>
              <h1
                className="h1 "
                data-aos="fade-left"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                Photo Editing & Graphic Design Made for Everyone
              </h1>
              <div
                className="cta__group "
                data-aos="fade-left"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <Link
                  href="get-quote"
                  aria-label="create account"
                  className="btn btn--primary"
                >
                  free trail now <i className="fa-solid fa-paper-plane"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div
              className="banner__thumb "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="600"
            >
              <Image src={thumb} alt="Image" />
              <Image src={after} alt="Image" className="after" />
            </div>
          </div>
        </div>
      </div>
      <div className="banner__small-thumb">
        <Image src={one} alt="Image" className="one" />
        <Image src={two} alt="Image" className="two" />
        <Image src={three} alt="Image" className="three" />
        <Image src={four} alt="Image" className="four" />
      </div>
    </section>
  );
};

export default HomeOneBanner;
