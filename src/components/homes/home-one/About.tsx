"use client";
import VideoPopup from "@/modals/VideoPopup";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Count from "@/components/common/Count";

import about_img1 from "@/assets/img/about/about.jpg";
import about_img2 from "@/assets/img/about/border-shape.png";
import about_img3 from "@/assets/img/about/video.jpg";
import about_img4 from "@/assets/img/arrow-shape.png";
import about_img5 from "@/assets/img/fac1.jpeg";
import about_img6 from "@/assets/img/fac1R.jpeg";
import about_img7 from "@/assets/img/image4.jpeg";
import about_img8 from "@/assets/img/NewProduct.png";

interface DataType {
  sub_title: string;
  title: JSX.Element;
  desc: string;
  about_list: string[];
}

const about_data: DataType = {
  sub_title: "ABOUT TO Industril",
  title: (
    <>
      Shri Navkar Blowpack Revolutionizing Packaging Solutions
      <span style={{ color: "#ffe000" }}> Since 1984 </span>
    </>
  ),
  desc: "WShri Navkar Blowpack has been a pioneer in delivering innovative and high-quality packaging solutions for over four decades. With a strong foundation built in Ankleshwar and an expanding presence in Panoli, we serve industries that demand precision, durability, and excellence. Our journey of innovation continues as we redefine manufacturing with cutting-edge technology and unmatched expertise.",
  about_list: [
    "Decades of experience and expertise in packaging.",
    "Stringent quality control measures for defect-free products.",
    "Commitment to innovation, sustainability, and customer satisfaction.",
  ],
};

const { sub_title, title, desc, about_list } = about_data;

const About = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="about-section fix section-padding section-bg">
        <div className="container">
          <div className="about-wrapper">
            <div className="row">
              <div
                className="col-xl-6 col-lg-8 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div
                  className="about-image"
                  style={{
                    border: "4px solid white",
                    borderRadius: "10px",
                  }}
                >
                  <Image
                    src={about_img8}
                    alt="img"
                    style={{
                      border: "4px solid white",
                      borderRadius: "10px",
                    }}
                  />
                  <div
                    className="border-shape"
                    // style={{ backgroundColor: "#ffe000" }}
                  >
                    {/* <Image src={about_img2} alt="shape-img" /> */}
                  </div>
                  <div className="video-image">
                    {/* <Image src={about_img3} alt="img" /> */}
                    {/* <div className="video-box">
                      <a
                        onClick={() => setIsVideoOpen(true)}
                        style={{ cursor: "pointer" }}
                        className="video-btn ripple video-popup"
                      >
                        <i className="fa-solid fa-play"></i>
                      </a>
                    </div> */}
                  </div>
                  <div className="working-area float-bob-y">
                    <div className="inner">
                      <div className="icon-box">
                        <i className="fa-solid fa-medal"></i>
                        <h3>
                          <span className="count">
                            {/* <Count number={25} /> */}
                            40+
                          </span>{" "}
                          Years
                        </h3>
                        <p>Industrial Experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-8 mt-5 mt-xl-0">
                <div className="about-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">Navkar</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      {title}
                    </h2>
                  </div>
                  <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Shri Navkar Blowpack was established in 1984 with a vision
                    to provide high-quality packaging solutions to industries
                    that demand reliability and precision. Starting with our
                    first facility in Ankleshwar, we have expanded our
                    capabilities to include a second facility in Panoli,
                    ensuring we meet growing demands and maintain our position
                    as a leader in the industry
                  </p>
                  <ul className="wow fadeInUp" data-wow-delay=".7s">
                    {about_list.map((list, i) => (
                      <li key={i}>
                        <i
                          className="fa-solid fa-circle-check"
                          style={{ color: "#14b2f1" }}
                        ></i>
                        {list}
                      </li>
                    ))}
                  </ul>
                  <div
                    className="about-info-items wow fadeInUp"
                    data-wow-delay=".9s"
                  >
                    <Link href="/about" className="theme-btn-2">
                      know More About us
                      <span className="shape-img">
                        <Image src={about_img4} alt="shape-img" />
                      </span>
                    </Link>
                    <div className="call-area">
                      <span>or Call us</span>
                      <div className="icon">
                        <i className="fa-solid fa-phone-volume"></i>
                        <h6>
                          <Link
                            href="tel:+91-26594-302-003"
                            style={{ color: "#ffe000" }}
                          >
                            +91 2646 251639
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"Ml4XCF-JS0k"}
      />
    </>
  );
};

export default About;
