"use client";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import avatar_1 from "@/assets/img/testimonial/07.jpg";

interface DataType {
  id: number;
  desc_1: JSX.Element;
  desc_2: JSX.Element;
  avatar: StaticImageData;
  name: string;
  designation: string;
}
[];

const testi_data: DataType[] = [
  {
    id: 1,
    desc_1: (
      <>
        The personalized guidance I received was exceptional. They helped me
        navigate through the complex admission process with ease
      </>
    ),
    desc_2: (
      <>
        hanks to their support, I got into my dream university in the USA.
        Highly recommended!
      </>
    ),
    avatar: avatar_1,
    name: "Rohit Sharma, Bengaluru",
    designation: "Senior engineer",
  },
  {
    id: 2,
    desc_1: (
      <>
        The team was incredibly efficient and patient in handling my visa
        application. They provided clear instructions and updates at every
        stage.
      </>
    ),
    desc_2: (
      <>
        My visa approval process was smooth and stress-free. Kudos to the entire
        team!
      </>
    ),
    avatar: avatar_1,
    name: "Neha Verma, Mumbai",
    designation: "Senior engineer",
  },
  {
    id: 3,
    desc_1: (
      <>
        The quality of the products exceeded my expectations. The delivery was
        quick, and the customer service team was very responsive.
      </>
    ),
    desc_2: (
      <>
        It &apos; s great to have a reliable online shopping platform like this.
      </>
    ),
    avatar: avatar_1,
    name: "Pooja Reddy, Hyderabad",
    designation: "Senior engineer",
  },
  {
    id: 4,
    desc_1: (
      <>
        From booking the appointment to the consultation, everything was
        seamless. The doctors were professional and attentive, and I felt cared
        for throughout my treatment.
      </>
    ),
    desc_2: <>Truly world-class healthcare.</>,
    avatar: avatar_1,
    name: "Amit Jain, Delhi",
    designation: "Senior engineer",
  },
];

const setting = {
  spaceBetween: 30,
  speed: 1500,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".dot-2",
    clickable: true,
  },
  breakpoints: {
    1199: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

const Testimonial = ({ padding }: any) => {
  return (
    <section
      className={`testimonial-section-2 fix ${
        padding ? "" : "section-padding pt-0"
      }`}
      style={{ paddingTop: "130px" }}
    >
      <div className="container">
        <div className="section-title text-center">
          <span className="wow fadeInUp">PUBLIC TESTIMONIAL</span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            public feedback about Industril
          </h2>
        </div>
        <Swiper
          {...setting}
          modules={[Pagination, Autoplay]}
          className="swiper testimonial-slider-2"
        >
          {testi_data.map((item) => (
            <SwiperSlide key={item.id} className="swiper-slide">
              <div className="testimonial-card-items">
                <div className="testimonial-content">
                  <div className="icon">
                    <i className="fa-solid fa-quote-right"></i>
                  </div>
                  <p className="text">{item.desc_1}</p>
                  <p className="text-2">{item.desc_2}</p>
                </div>
                <div className="client-info">
                  <div className="client-image">
                    <Image src={item.avatar} alt="client-img" />
                  </div>
                  <div className="client-content">
                    <h5>{item.name}</h5>
                    <p>{item.designation}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-dot pt-5 text-center">
            <div className="dot-2"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
