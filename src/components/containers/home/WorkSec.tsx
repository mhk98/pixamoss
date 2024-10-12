import React from "react";
import Image from "next/image";
import workThumb from "public/images/work-thumb.png";

const WorkSec = () => {
  return (
    <section className="work-section section pt-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="work-section__inner">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-6 col-xxl-5">
                  <div className="work-section__content">
                    <div className="section__header">
                      <p
                        className="h6 sub-title "
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="100"
                      >
                        how we works
                      </p>
                      <h2
                        className="h2 title "
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="100"
                      >
                        How it works
                      </h2>
                    </div>
                    <ul>
                      <li
                        className=""
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="100"
                      >
                        <div className="thumb">
                          <span>01</span>
                        </div>
                        <p>
                          Request a quote for the images you need edited — we&apos;ll
                          get back to you within 45 minutes
                        </p>
                      </li>
                      <li
                        className=""
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="100"
                      >
                        <div className="thumb">
                          <span>02</span>
                        </div>
                        <p>
                          Request a quote for the images you need edited — we&apos;ll
                          get back to you within 45 minutes
                        </p>
                      </li>
                      <li
                        className=""
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="100"
                      >
                        <div className="thumb">
                          <span>03</span>
                        </div>
                        <p>
                          Request a quote for the images you need edited — we&apos;ll
                          get back to you within 45 minutes
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-xxl-6 offset-xxl-1">
                  <div
                    className="work-section__thumb "
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="100"
                  >
                    <Image src={workThumb} alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSec;
