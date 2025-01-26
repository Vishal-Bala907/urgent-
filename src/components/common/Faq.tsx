"use client";
import { useState } from "react";
import faq_img from "@/assets/img/faq.jpg";
import Image from "next/image";

interface DataType {
  id: number;
  title: string;
  desc: JSX.Element;
  space?: string;
  data_wow_delay: string;
}
[];

const faq_data: DataType[] = [
  {
    id: 1,
    data_wow_delay: ".3s",
    space: "mb-3",
    title: "Do you provide customized packaging solutions?",
    desc: (
      <>
        Yes, we specialize in designing and manufacturing custom bottles, caps,
        closures, and measuring cups tailored to your specific needs.
      </>
    ),
  },
  {
    id: 2,
    data_wow_delay: ".5s",
    space: "mb-3",
    title: " How do you ensure the quality of your products?",
    desc: (
      <>
        We perform rigorous quality checks, including weight measurement,
        leakage tests, drop tests, and thickness inspections using advanced
        equipment like Digital Microscopes.
      </>
    ),
  },
  {
    id: 3,
    data_wow_delay: ".7s",
    space: "mb-3",
    title: " What industries do you serve?",
    desc: (
      <>
        We cater to agrochemicals, pesticides, fungicides, bio-nutrients, farm
        chemicals, and other industries requiring reliable liquid and powder
        packaging.
      </>
    ),
  },
  {
    id: 4,
    data_wow_delay: ".9s",
    title: "What is the maximum capacity of bottles you manufacture?",
    desc: (
      <>
        We produce rigid packaging solutions for bottles and containers up to 5
        liters in capacity.
      </>
    ),
  },
  {
    id: 5,
    data_wow_delay: ".9s",
    title: " How can I get in touch for a quote or support?",
    desc: (
      <>
        You can contact us at +91 2646 251639 or email us at
        info@shrinavkarblowpack.com for inquiries or assistance.
      </>
    ),
  },
];

const Faq = ({ style }: any) => {
  const [activeId, setActiveId] = useState<number>(1);

  const toggleAccordion = (id: number) => {
    setActiveId((prevActiveId) => (prevActiveId === id ? -1 : id));
  };

  return (
    <>
      {faq_data.map((item) => (
        <div
          key={item.id}
          className={`accordion-item ${style ? "mb-3" : ""} ${
            item.space
          } wow fadeInUp`}
          data-wow-delay={item.data_wow_delay}
        >
          <h5 className="accordion-header">
            <button
              onClick={() => toggleAccordion(item.id)}
              className={`accordion-button ${
                activeId !== item.id ? "collapsed" : ""
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#faq${item.id}`}
              aria-expanded="false"
              aria-controls={`${item.id}`}
            >
              {item.title}
            </button>
          </h5>
          <div
            id={`${item.id}`}
            className={`accordion-collapse collapse ${
              activeId === item.id ? "show" : ""
            }`}
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">{item.desc}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Faq;
