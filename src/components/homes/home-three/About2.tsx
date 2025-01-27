import Image from "next/image";
import Count from "@/components/common/Count";
import Link from "next/link";

import about_thumb from "@/assets/img/about/about-3.jpg";
import image from "@/assets/img/smallbg.jpeg";
import about_arrow from "@/assets/img/arrow-shape.png";

interface ContentType {
  sub_title: string;
  title: string;
  desc_1: JSX.Element;
  desc_2: JSX.Element;
  list: string[];
}

const about_content: ContentType = {
  sub_title: "ABOUT TO industry",
  title: "We Are Here to Increase Your Knowledge With Experience",
  desc_1: (
    <>
      We have facility to produce advance work various industrial applications
      based on specially developed technol-ogy. We are also ready to
      developement by according to users changing needs. Infrastructure related
      installation projects.
    </>
  ),
  desc_2: (
    <>
      Years of Experience according to users <br /> changing needs.
      Infrastructure
    </>
  ),
  list: [
    "Consectetur adipiscing elit, sed do euism onsectetur adipiscing",
    "developement by according to users changing needs.",
    "Infrastructure related installation projects.",
  ],
};

const { sub_title, title, desc_1, desc_2, list } = about_content;

const About2 = () => {
  return (
    <section className="about-section fix section-padding">
      <div className="container">
        <div className="about-wrapper-3">
          <div className="row">
            <div
              className="col-xl-6 col-lg-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="about-image">
                <Image
                  src={image}
                  alt="about-img"
                  style={{
                    borderRadius: "10px",
                    border: "4px solid white",
                  }}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 mt-5 mt-lg-0">
              <div className="about-content">
                <div className="section-title">
                  <span className="wow fadeInUp">{sub_title}</span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    {title}
                  </h2>
                </div>
                <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  {desc_1}
                </p>
                <ul className="about-list wow fadeInUp" data-wow-delay=".7s">
                  {list.map((list, i) => (
                    <li key={i} style={{ color: "#ffe000s" }}>
                      <i
                        className="fa-regular fa-circle-check"
                        style={{ color: "#14b2f1" }}
                      ></i>
                      {list}
                    </li>
                  ))}
                </ul>
                <div
                  className="about-info"
                  style={{
                    flexDirection: "row-reverse",
                    justifyContent: "space-around",
                  }}
                >
                  <div
                    className="info-left wow fadeInUp"
                    style={{ alignSelf: "end" }}
                    data-wow-delay=".8s"
                  >
                    {/* <div className="content">
                      <h2>
                        <span className="count">
                          <Count number={30} />{" "}
                        </span>
                        +
                      </h2>
                      <p>{desc_2}</p>
                    </div> */}
                    <Link href="/about" className="theme-btn-2">
                      know More About us
                      <span className="shape-img">
                        <Image src={about_arrow} alt="shape-img" />
                      </span>
                    </Link>
                  </div>
                  <div
                    className="info-right wow fadeInUp"
                    data-wow-delay=".9s"
                    // style={{ backgroundColor: "#ffe000" }}
                  >
                    <div className="icon ripple" style={{ color: "#ffe000" }}>
                      <i
                        className="fa-solid fa-phone-volume"
                        style={{ color: "#ffe000" }}
                      ></i>
                    </div>
                    <h4>
                      <Link href="tel:+91-02646221638">02646221638</Link>
                    </h4>
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

export default About2;
