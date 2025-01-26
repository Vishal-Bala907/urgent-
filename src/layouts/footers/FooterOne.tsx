import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/img/logo/logo.svg";

const FooterOne = () => {
  return (
    <footer
      className="footer-section fix bg-cover"
      style={{ backgroundImage: `url(/assets/img/footer-bg.jpg)` }}
    >
      <div className="container">
        <div className="footer-widgets-wrapper">
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <Link href="/">
                    <Image src={logo} alt="logo-img" />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                    F-7, Arunoday Complex, Opp. Little Hut, GIDC Estate
                    Ankleshwar.
                  </p>
                  <ul className="contact-info">
                    <li>
                      <i className="fas fa-map-marker-alt"></i>
                      6391 Elgin St. Celina, USA
                    </li>
                    <li>
                      <i className="fa-solid fa-phone-volume"></i>
                      <Link href="tel:2086660112">+208-666-0112</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Quick Link</h4>
                </div>
                <ul className="list-area">
                  <li>
                    <Link href="/about">
                      <i className="fa-solid fa-chevron-right"></i>About
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing">
                      <i className="fa-solid fa-chevron-right"></i>Pricing Plan
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">
                      <i className="fa-solid fa-chevron-right"></i>Faq
                    </Link>
                  </li>
                  <li>
                    <Link href="/news-details">
                      <i className="fa-solid fa-chevron-right"></i>Our Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="fa-solid fa-chevron-right"></i> Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-2 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Latest Post</h4>
                </div>
                <div className="footer-post">
                  <div className="single-post-item mb-4">
                    <div
                      className="thumb bg-cover"
                      style={{
                        backgroundImage: `url(/assets/img/news/pp1.jpg)`,
                      }}
                    ></div>
                    <div className="post-content">
                      <div className="post-date">
                        <i className="far fa-calendar-alt"></i>15 Dec, 2024
                      </div>
                      <h6>
                        <Link href="/news-details">
                          Energetically Envisioned Is User Friendly
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="single-post-item">
                    <div
                      className="thumb bg-cover"
                      style={{
                        backgroundImage: `url(/assets/img/news/pp2.jpg)`,
                      }}
                    ></div>
                    <div className="post-content">
                      <div className="post-date">
                        <i className="far fa-calendar-alt"></i>29 Feb, 2024
                      </div>
                      <h6>
                        <Link href="/news-details">
                          Construction Site Security Guide Lide
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp"
              data-wow-delay=".9s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Newsletters</h4>
                </div>
                <div className="footer-content">
                  <p>
                    {" "}
                    Sing Up For News & Get 30% Off <br />
                    Your Next Course.
                  </p>
                  <div className="footer-input">
                    <input
                      type="email"
                      id="email"
                      placeholder="Your email address"
                    />
                    <button className="theme-btn" type="submit">
                      Subscribe Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-wrapper">
            <p>
              © All Copyright 2024 by <Link href="/">EaglesThemes</Link>
            </p>
            <ul>
              <li>
                <Link href="/contact">Terms & Condition</Link>
              </li>
              <li>
                <Link href="/contact"> Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
