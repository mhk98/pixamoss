import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import slideone from "public/images/services/slide-one.png";
import slidetwo from "public/images/services/slide-two.png";
import slidethree from "public/images/services/slide-three.png";
import slidefour from "public/images/services/slide-four.png";
import slidefive from "public/images/services/slide-five.png";

const Services = () => {
  return (
    <section className="section services bg-grey">
      <div className="container">
        <div className="row align-items-center section__header--alt">
          <div className="col-12 col-lg-7 col-xxl-5">
            <div
              className="section__header "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <p className="h6 sub-title">photodit&apos;s service</p>
              <h2 className="h2 title">
                Clipping Path Services for professional images
              </h2>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xxl-7">
            <div className="services-pagination slick-pagination justify-content-lg-end"></div>
          </div>
        </div>
      </div>
      <div className="services__slider-wrapper">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          speed={1200}
          loop={true}
          roundLengths={true}
          centeredSlides={true}
          centeredSlidesBounds={true}
          modules={[Autoplay, Pagination]}
          pagination={{
            el: ".services-pagination",
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            1440: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 3,
            },
            576: {
              slidesPerView: 2,
            },
          }}
          className="services__slider"
        >
          <SwiperSlide>
            <div className="services__slider-single on">
              <Image src={slideone} alt="Image" />
              <div className="services__slider-single__content">
                <h4 className="h4">Clipping path services</h4>
                <Link href="service-details">
                  <i className="icon-arrow-up"></i>
                </Link>
                <div className="price-tag">
                  <p>
                    starting at <span>$0.39 Only</span>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services__slider-single fi">
              <Image src={slidetwo} alt="Image" />
              <div className="services__slider-single__content">
                <h4 className="h4">Clipping path services</h4>
                <Link href="service-details">
                  <i className="icon-arrow-up"></i>
                </Link>
                <div className="price-tag">
                  <p>
                    starting at <span>$0.39 Only</span>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services__slider-single tw">
              <Image src={slidethree} alt="Image" />
              <div className="services__slider-single__content">
                <h4 className="h4">Clipping path services</h4>
                <Link href="service-details">
                  <i className="icon-arrow-up"></i>
                </Link>
                <div className="price-tag">
                  <p>
                    starting at <span>$0.39 Only</span>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services__slider-single th">
              <Image src={slidefour} alt="Image" />
              <div className="services__slider-single__content">
                <h4 className="h4">Clipping path services</h4>
                <Link href="service-details">
                  <i className="icon-arrow-up"></i>
                </Link>
                <div className="price-tag">
                  <p>
                    starting at <span>$0.39 Only</span>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services__slider-single fo">
              <Image src={slidefive} alt="Image" />
              <div className="services__slider-single__content">
                <h4 className="h4">Clipping path services</h4>
                <Link href="service-details">
                  <i className="icon-arrow-up"></i>
                </Link>
                <div className="price-tag">
                  <p>
                    starting at <span>$0.39 Only</span>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services__slider-single on">
              <Image src={slideone} alt="Image" />
              <div className="services__slider-single__content">
                <h4 className="h4">Clipping path services</h4>
                <Link href="service-details">
                  <i className="icon-arrow-up"></i>
                </Link>
                <div className="price-tag">
                  <p>
                    starting at <span>$0.39 Only</span>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services__slider-single fi">
              <Image src={slidetwo} alt="Image" />
              <div className="services__slider-single__content">
                <h4 className="h4">Clipping path services</h4>
                <Link href="service-details">
                  <i className="icon-arrow-up"></i>
                </Link>
                <div className="price-tag">
                  <p>
                    starting at <span>$0.39 Only</span>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services__slider-single tw">
              <Image src={slidethree} alt="Image" />
              <div className="services__slider-single__content">
                <h4 className="h4">Clipping path services</h4>
                <Link href="service-details">
                  <i className="icon-arrow-up"></i>
                </Link>
                <div className="price-tag">
                  <p>
                    starting at <span>$0.39 Only</span>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services__slider-single th">
              <Image src={slidefour} alt="Image" />
              <div className="services__slider-single__content">
                <h4 className="h4">Clipping path services</h4>
                <Link href="service-details">
                  <i className="icon-arrow-up"></i>
                </Link>
                <div className="price-tag">
                  <p>
                    starting at <span>$0.39 Only</span>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services__slider-single fo">
              <Image src={slidefive} alt="Image" />
              <div className="services__slider-single__content">
                <h4 className="h4">Clipping path services</h4>
                <Link href="service-details">
                  <i className="icon-arrow-up"></i>
                </Link>
                <div className="price-tag">
                  <p>
                    starting at <span>$0.39 Only</span>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
