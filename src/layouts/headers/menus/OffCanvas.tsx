import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/img/logo.jpeg";
import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";

const OffCanvas = ({ offCanvas, setOffCanvas }: any) => {
  return (
    <>
      <div className="fix-area">
        <div className={`offcanvas__info ${offCanvas ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  {/* <Link href="/">
                    <Image height={90} width={10} src={logo} alt="logo-img" />
                  </Link> */}
                </div>
                <div className="offcanvas__close">
                  <button onClick={() => setOffCanvas(false)}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <p className="text d-none d-lg-block">
                Shri Navkar Blowpack was established in 1984 with a vision to
                provide high-quality packaging solutions to industries that
                demand reliability and precision. Starting with our first
                facility in Ankleshwar, we have expanded our capabilities to
                include a second facility in Panoli, ensuring we meet growing
                demands and maintain our position as a leader in the industry.
              </p>
              <div className="mobile-menu fix mb-5 mean-container d-block d-lg-none">
                <div className="mean-bar">
                  <div className="mean-nav">
                    <MobileMenu />
                  </div>
                </div>
              </div>
              <div className="offcanvas__contact">
                <h5>Contact Info</h5>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link target="_blank" href="#">
                      F-7, Arunoday Complex, Opp. Little Hut, GIDC Estate Ankleshwar.
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link href="tel:+013-003-003-9993">
                        <span className="mailto:info@enofik.com">
                          info@shrinavkarblowpack.com
                        </span>
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link target="_blank" href="#">
                        Monday to Saturday: 9:00 AM to 6:00 PM
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link href="tel:+11002345909">+91 2646 251639</Link>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-5">
                  <Link href="/contact" className="theme-btn text-center">
                    Get A Quote
                  </Link>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <Link href="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>

                  <Link href="#">
                    <i className="fab fa-twitter"></i>
                  </Link>

                  <Link href="#">
                    <i className="fab fa-youtube"></i>
                  </Link>

                  <Link href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => setOffCanvas(false)}
        className={`offcanvas__overlay ${offCanvas ? "overlay-open" : ""}`}
      ></div>
    </>
  );
};

export default OffCanvas;
