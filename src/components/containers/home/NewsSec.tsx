import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "public/images/news/one.png";
import two from "public/images/news/two.png";
import three from "public/images/news/three.png";

const NewsSec = () => {
  return (
    <section className="section news-section">
      <div className="container">
        <div className="row align-items-center section__header--alt">
          <div className="col-12 col-lg-7 col-xxl-5">
            <div className="section__header">
              <p
                className="h6 sub-title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                latest news
              </p>
              <h2
                className="h2 title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                news form photodit
              </h2>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xxl-7">
            <div className="news-pagination slick-pagination justify-content-lg-end"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="news__slider-wrapper">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={1200}
                loop={true}
                roundLengths={false}
                centeredSlides={true}
                centeredSlidesBounds={false}
                modules={[Autoplay, Pagination]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                pagination={{
                  el: ".news-pagination",
                  clickable: true,
                }}
                breakpoints={{
                  1440: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                }}
                className="news__slider"
              >
                <SwiperSlide>
                  <div className="news__slider-item">
                    <div className="thumb">
                      <Link href="blog-single">
                        <Image src={one} priority alt="Image" />
                      </Link>
                      <div className="publish-date">
                        <h4 className="h4">21</h4>
                        <p>JAN</p>
                      </div>
                    </div>
                    <div className="content">
                      <div className="tag">
                        <Link href="blog-single">Shadow</Link>
                      </div>
                      <h4 className="h4">
                        <Link href="blog-single">
                          Easy Tips on Creating an Online New Year&apos;s Vision
                          Board
                        </Link>
                      </h4>
                      <div className="cta">
                        <Link href="blog-single">
                          <i className="icon-arrow-top"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="news__slider-item">
                    <div className="thumb">
                      <Link href="blog-single">
                        <Image src={two} priority alt="Image" />
                      </Link>
                      <div className="publish-date">
                        <h4 className="h4">21</h4>
                        <p>JAN</p>
                      </div>
                    </div>
                    <div className="content">
                      <div className="tag">
                        <Link href="blog-single">Shadow</Link>
                      </div>
                      <h4 className="h4">
                        <Link href="blog-single">
                          personal touch that&apos;s way more heartfelt than a gift
                          shop
                        </Link>
                      </h4>
                      <div className="cta">
                        <Link href="blog-single">
                          <i className="icon-arrow-top"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="news__slider-item">
                    <div className="thumb">
                      <Link href="blog-single">
                        <Image src={three} priority alt="Image" />
                      </Link>
                      <div className="publish-date">
                        <h4 className="h4">21</h4>
                        <p>JAN</p>
                      </div>
                    </div>
                    <div className="content">
                      <div className="tag">
                        <Link href="blog-single">Shadow</Link>
                      </div>
                      <h4 className="h4">
                        <Link href="blog-single">
                          ower of a great photo backdrop — in just a few steps
                        </Link>
                      </h4>
                      <div className="cta">
                        <Link href="blog-single">
                          <i className="icon-arrow-top"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="news__slider-item">
                    <div className="thumb">
                      <Link href="blog-single">
                        <Image src={one} priority alt="Image" />
                      </Link>
                      <div className="publish-date">
                        <h4 className="h4">21</h4>
                        <p>JAN</p>
                      </div>
                    </div>
                    <div className="content">
                      <div className="tag">
                        <Link href="blog-single">Shadow</Link>
                      </div>
                      <h4 className="h4">
                        <Link href="blog-single">
                          Easy Tips on Creating an Online New Year&apos;s Vision
                          Board
                        </Link>
                      </h4>
                      <div className="cta">
                        <Link href="blog-single">
                          <i className="icon-arrow-top"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="news__slider-item">
                    <div className="thumb">
                      <Link href="blog-single">
                        <Image src={two} priority alt="Image" />
                      </Link>
                      <div className="publish-date">
                        <h4 className="h4">21</h4>
                        <p>JAN</p>
                      </div>
                    </div>
                    <div className="content">
                      <div className="tag">
                        <Link href="blog-single">Shadow</Link>
                      </div>
                      <h4 className="h4">
                        <Link href="blog-single">
                          personal touch that&apos;s way more heartfelt than a gift
                          shop
                        </Link>
                      </h4>
                      <div className="cta">
                        <Link href="blog-single">
                          <i className="icon-arrow-top"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="news__slider-item">
                    <div className="thumb">
                      <Link href="blog-single">
                        <Image src={three} priority alt="Image" />
                      </Link>
                      <div className="publish-date">
                        <h4 className="h4">21</h4>
                        <p>JAN</p>
                      </div>
                    </div>
                    <div className="content">
                      <div className="tag">
                        <Link href="blog-single">Shadow</Link>
                      </div>
                      <h4 className="h4">
                        <Link href="blog-single">
                          ower of a great photo backdrop — in just a few steps
                        </Link>
                      </h4>
                      <div className="cta">
                        <Link href="blog-single">
                          <i className="icon-arrow-top"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSec;
