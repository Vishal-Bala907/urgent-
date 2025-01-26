import { StaticImageData } from "next/image";

import service_Icon1 from "@/assets/img/service/icon.svg";
import service_Icon2 from "@/assets/img/service/icon-2.svg";
import service_Icon3 from "@/assets/img/service/icon-3.svg";
import service_Icon4 from "@/assets/img/service/icon-4.svg";
import service_Icon5 from "@/assets/img/service/icon-5.svg";
import service_Icon6 from "@/assets/img/service/icon-6.svg";

import service_thumb1 from "@/assets/img/service/05.jpg";
import service_thumb2 from "@/assets/img/service/06.jpg";
import service_thumb3 from "@/assets/img/service/07.jpg";
import service_thumb4 from "@/assets/img/service/08.jpg";
import service_thumb5 from "@/assets/img/service/09.jpg";
import service_thumb6 from "@/assets/img/service/10.jpg";

interface DataType {
  id: number;
  page: string;
  icon: StaticImageData;
  title: string;
  desc: string;
  data_wow_delay?: string;
}
[];

const service_data: DataType[] = [
  {
    id: 1,
    page: "home_1",
    data_wow_delay: "0.3s",
    icon: service_Icon4,
    title: "Packaging Solutions",
    desc: "We offer industry-leading packaging solutions that cater to diverse needs:",
  },
  {
    id: 2,
    page: "home_1",
    data_wow_delay: "0.5s",
    icon: service_Icon5,
    title: "Technical Support",
    desc: "Our team provides complete support to clients, including:",
  },
  {
    id: 3,
    page: "home_1",
    data_wow_delay: "0.7s",
    icon: service_Icon6,
    title: "Quality Control",
    desc: "At Shri Navkar Blowpack, quality is at the heart of everything we do. Our quality control measures include",
  },
  //   {
  //     id: 4,
  //     page: "home_1",
  //     data_wow_delay: "0.3s",
  //     icon: service_Icon4,
  //     title: "Metal Roofing",
  //     desc: "We have facility to produce advance work various industrial applications based on specially developed technol-ogy.",
  //   },
  //   {
  //     id: 5,
  //     page: "home_1",
  //     data_wow_delay: "0.5s",
  //     icon: service_Icon5,
  //     title: "House Renovation",
  //     desc: "We have facility to produce advance work various industrial applications based on specially developed technol-ogy.",
  //   },
  //   {
  //     id: 6,
  //     page: "home_1",
  //     data_wow_delay: "0.7s",
  //     icon: service_Icon6,
  //     title: "Green Building",
  //     desc: "We have facility to produce advance work various industrial applications based on specially developed technol-ogy.",
  //   },

  // home_3

  {
    id: 1,
    page: "home_3",
    icon: service_thumb1,
    title: "Power & Energy Sector",
    desc: "We have facility to produce advance work the is various industrial applications based on.",
  },
  {
    id: 2,
    page: "home_3",
    icon: service_thumb2,
    title: "Petroleum Refinery",
    desc: "We have facility to produce advance work the is various industrial applications based on.",
  },
  {
    id: 3,
    page: "home_3",
    icon: service_thumb3,
    title: "Mechanical Engineering",
    desc: "We have facility to produce advance work the is various industrial applications based on.",
  },
  {
    id: 4,
    page: "home_3",
    icon: service_thumb2,
    title: "Petroleum Refinery",
    desc: "We have facility to produce advance work the is various industrial applications based on.",
  },

  // inner_page

  {
    id: 1,
    page: "inner_page",
    data_wow_delay: ".3s",
    icon: service_thumb1,
    title: "Power & Energy Sector",
    desc: "We have facility to produce advance work the is various industrial applications based on.",
  },
  {
    id: 2,
    page: "inner_page",
    data_wow_delay: ".5s",
    icon: service_thumb2,
    title: "Petroleum Refinery",
    desc: "We have facility to produce advance work the is various industrial applications based on.",
  },
  {
    id: 3,
    page: "inner_page",
    data_wow_delay: ".7s",
    icon: service_thumb3,
    title: "Mechanical Engineering",
    desc: "We have facility to produce advance work the is various industrial applications based on.",
  },
  {
    id: 4,
    page: "inner_page",
    data_wow_delay: ".3s",
    icon: service_thumb4,
    title: "Green Building",
    desc: "We have facility to produce advance work the is various industrial applications based on.",
  },
  {
    id: 5,
    page: "inner_page",
    data_wow_delay: ".5s",
    icon: service_thumb5,
    title: "House Renovation",
    desc: "We have facility to produce advance work the is various industrial applications based on.",
  },
  {
    id: 6,
    page: "inner_page",
    data_wow_delay: ".7s",
    icon: service_thumb6,
    title: "Metal Roofing",
    desc: "We have facility to produce advance work the is various industrial applications based on.",
  },
];

export default service_data;
