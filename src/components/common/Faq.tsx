"use client"
import { useState } from "react"
import faq_img from "@/assets/img/faq.jpg"
import Image from "next/image";

interface DataType {
   id: number;
   title: string;
   desc: JSX.Element;
   space?: string;
   data_wow_delay: string;
}[];

const faq_data: DataType[] = [
   {
      id: 1,
      data_wow_delay: ".3s",
      space: "mb-3",
      title: "construction do you specialize in?",
      desc: (<>We have facility to produce advance work various industrial applications based on specially developed technol-ogy. We are also ready to developement by according to users changing needs. Infrastructure related installation projects.</>),
   },
   {
      id: 2,
      data_wow_delay: ".5s",
      space: "mb-3",
      title: "What happens my free trial?",
      desc: (<>We have facility to produce advance work various industrial applications based on specially developed technol-ogy. We are also ready to developement by according to users changing needs. Infrastructure related installation projects.</>),
   },
   {
      id: 3,
      data_wow_delay: ".7s",
      space: "mb-3",
      title: " What is included in your services?",
      desc: (<>We have facility to produce advance work various industrial applications based on specially developed technol-ogy. We are also ready to developement by according to users changing needs. Infrastructure related installation projects.</>),
   },
   {
      id: 4,
      data_wow_delay: ".9s",
      title: "What type of company is measured?",
      desc: (<>We have facility to produce advance work various industrial applications based on specially developed technol-ogy. We are also ready to developement by according to users changing needs. Infrastructure related installation projects.</>),
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
            <div key={item.id} className={`accordion-item ${style ? "mb-3" : ""} ${item.space} wow fadeInUp`} data-wow-delay={item.data_wow_delay}>
               <h5 className="accordion-header">
                  <button onClick={() => toggleAccordion(item.id)} className={`accordion-button ${activeId !== item.id ? "collapsed" : ""}`} type="button" data-bs-toggle="collapse" data-bs-target={`#faq${item.id}`} aria-expanded="false" aria-controls={`${item.id}`}>
                     {item.title}
                  </button>
               </h5>
               <div id={`${item.id}`} className={`accordion-collapse collapse ${activeId === item.id ? "show" : ""}`} data-bs-parent="#accordion">
                  <div className="accordion-body">
                     {item.desc}
                  </div>
               </div>
            </div>
         ))}
      </>
   )
}

export default Faq
