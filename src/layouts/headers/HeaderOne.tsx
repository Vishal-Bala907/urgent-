"use client";
import Image from "next/image";
import HeaderTop from "./menus/HeaderTop";
import NavMenu from "./menus/NavMenu";
import Link from "next/link";
import OffCanvas from "./menus/OffCanvas";
import { useState } from "react";
import UseSticky from "@/hooks/UseSticky";

import logo from "@/assets/img/logo/logo.svg";
import dot_icon from "@/assets/img/dot.png";

const HeaderOne = ({ headerTop }: any) => {
  const { sticky } = UseSticky();
  const [offCanvas, setOffCanvas] = useState<boolean>(false);

  return (
    <>
      <header>
        {headerTop && <HeaderTop />}
        <div
          id="header-sticky"
          className={`header-1 ${headerTop ? "" : "style-2"} ${
            sticky ? "sticky" : ""
          }`}
        >
          <div className="container">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="header-left">
                  <div className="logo">
                    <Link href="/" className="header-logo">
                      <Image src={logo} alt="logo-img" />
                    </Link>
                  </div>
                  <div className="mean__menu-wrapper d-none d-lg-block">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        <NavMenu />
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                  <div className="header-contact">
                    <div className="icon">
                      <i className="fa-solid fa-phone-volume"></i>
                    </div>
                    <a href="tel:912659302003">+91 2646 251639</a>
                  </div>
                  <div className="header__hamburger d-xl-block my-auto">
                    <div
                      onClick={() => setOffCanvas(true)}
                      className="sidebar__toggle"
                    >
                      <Image src={dot_icon} alt="img" />
                      <Link className="bar-icon d-lg-none my-auto" href="#">
                        <i className="fas fa-bars"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <OffCanvas offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
    </>
  );
};

export default HeaderOne;
