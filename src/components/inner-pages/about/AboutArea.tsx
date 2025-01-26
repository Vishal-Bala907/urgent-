import Link from "next/link";
import Image from "next/image";

import about_arrow from "@/assets/img/arrow-shape.png";
import about_thumb from "@/assets/img/about/about-2.jpg";

interface ContentType {
  sub_title: string;
  title: string;
  desc_1: JSX.Element;
  desc_2: JSX.Element;
  list: JSX.Element[];
}

const about_content: ContentType = {
  sub_title: "ABOUT TO industry",
  title: "We Are Here to Increase Your Knowledge With Experience",
  desc_1: (
    <>
      At Shri Navkar Blowpack, we are proud to be a trusted name in the
      packaging industry. Established in 1984 by Suresh Nahar Ji, our journey
      began with a vision to revolutionize packaging solutions for industries
      across the globe. Under the leadership of our current Managing Director,
      Deepak Nahar Ji, we have grown into a leading manufacturer of Blow and
      Injection moulded plastic products.
    </>
  ),
  desc_2: (
    <>
      With manufacturing facilities in Ankleshwar and Panoli, we specialize in
      providing custom-made and industry-standard packaging solutions for
      Agrochemicals, Pesticides, Fungicides, Bio-nutrients, Farm Chemicals, and
      more.
    </>
  ),
  list: [
    <>Weight Check</>,
    <>
      Uniform Thickness <br /> Measurement
    </>,
    <>
      Leakage <br /> Testing
    </>,
    <>
      Drop <br /> Testing
    </>,
  ],
};

const { sub_title, title, desc_1, desc_2, list } = about_content;

const AboutArea = () => {
  return (
    <section className="about-section fix section-padding">
      <div className="container">
        <div className="about-wrapper-2">
          <div className="row align-items-center">
            <div
              className="col-xl-6 col-lg-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="about-image style-2">
                <Image src={about_thumb} alt="about-img" />
                <h4 className="title-text">40+ Years Experieance</h4>
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
                <p className="mt-2 wow fadeInUp" data-wow-delay=".7s">
                  {desc_2}
                </p>
                <ul className="wow fadeInUp" data-wow-delay=".8s">
                  {list.map((list, i) => (
                    <li key={i}>{list}</li>
                  ))}
                </ul>
                <Link
                  href="/about"
                  className="theme-btn-2 mt-5 wow fadeInUp"
                  data-wow-delay=".9s"
                >
                  know More About us
                  <span className="shape-img">
                    <Image src={about_arrow} alt="shape-img" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArea;
