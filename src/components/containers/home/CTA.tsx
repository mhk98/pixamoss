import React from "react";
import Image from "next/image";
import Link from "next/link";
import ctaThumb from "public/images/cta-thumb.png";
import upload from "public/images/upload.png";

const CTA = () => {
  return (
    <section className="try-cta bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xxl-10">
            <div className="try-cta__inner">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-6">
                  <div className="try-cta__thumb ">
                    <Image src={ctaThumb} alt="Image" />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="try-cta__content section__content">
                    <p className="h6 sub-title ">try free now</p>
                    <h2 className="h2 title ">Remove Image Background</h2>
                    <div className="paragraph ">
                      <p>
                        Clipping Path Could be a process by which photo editors
                        make a vector path to pick.
                      </p>
                    </div>
                    <div className="cta__group ">
                      <Link href="get-quote" className="btn btn--secondary">
                        <Image src={upload} alt="Image" /> upload images
                      </Link>
                    </div>
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

export default CTA;
