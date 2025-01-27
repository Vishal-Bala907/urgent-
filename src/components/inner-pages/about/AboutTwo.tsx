import Image from "next/image";
import Link from "next/link";

import about_img1 from "@/assets/img/arrow-shape.png";
import about_img2 from "@/assets/img/about/about-2.jpg";

const AboutTwo = () => {
  return (
    <section className="about-section fix section-padding">
      <div className="container">
        <div className="about-wrapper-2 style-2">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <span className="wow fadeInUp">FOCUSED AND FUTURE READY</span>
                  <h3>Our Missoin</h3>
                  <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".3s">
                    To be recognized as a company committed to continuous
                    improvement, fostering excellent relationships with
                    customers, employees, and the community.
                  </p>
                </div>
                <h3>Our Vision</h3>
                <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  To provide exceptional services with the highest standards of
                  ethics, morals, and values, ensuring customer delight through
                  innovative solutions
                </p>
                {/* <ul className="wow fadeInUp" data-wow-delay=".7s">
                  <li>
                    We have a combination of skilled and experienced workforce
                    to look after the production of high end products.
                  </li>
                  <li>We untiringly strive for zero defects</li>
                  <li>
                    All our employees share responsibility to continuously
                    improve our products
                  </li>
                </ul> */}
                <h3 style={{ marginTop: "30px" }}>What We Do</h3>
                <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  We specialize in the design and manufacturing of Blow and
                  Injection moulded plastic products. Our range includes:
                </p>
                <ul className="" data-wow-delay=".7s" style={{ margin: 0 }}>
                  <li>Monolayer and Multilayer bottles and containers.</li>
                  <li>
                    Industry-standard and customized bottles, caps, closures,
                    and measuring cups
                  </li>
                  <li>Rigid packaging solutions for liquids and powders</li>
                </ul>
                <h3
                  style={{ marginTop: "30px ! important" }}
                  className="mt-4 mt-md-0 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  Our facilities are equipped with:
                </h3>
                <ul
                  className="wow fadeInUp"
                  data-wow-delay=".7s"
                  style={{ margin: 0 }}
                >
                  <li>
                    Fully automatic Blow Moulding Machines for Multilayer Coex
                    Bottles.
                  </li>
                  <li>
                    Online De-flashing, Trimming, and Leak Testing capabilities.
                  </li>
                  <li>
                    Injection Blow Moulding and Injection Moulding machines.
                  </li>
                </ul>
                <Link
                  href="/about"
                  className="theme-btn-2 mt-5 wow fadeInUp"
                  data-wow-delay=".9s"
                >
                  know More About us
                  <span className="shape-img">
                    <Image src={about_img1} alt="shape-img" />
                  </span>
                </Link>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 mt-5 mt-lg-0 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="about-image">
                <Image src={about_img2} alt="about-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
