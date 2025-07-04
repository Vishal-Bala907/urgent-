interface MenuItem {
  id: number;
  title: string;
  link: string | any;
  has_dropdown: boolean;
  sub_menus?: {
    link: string;
    title: string;
  }[];
}
[];

const menu_data: MenuItem[] = [
  // {
  //   id: 1,
  //   has_dropdown: true,
  //   title: "Home",
  //   link: "#",
  //   sub_menus: [
  //     { link: "/", title: "Industry Service" },
  //     { link: "/home-two", title: "Oil Industry" },
  //     { link: "/home-three", title: "Gas Industry" },
  //   ],
  // },
  {
    id: 1,
    has_dropdown: true,
    title: "Home",
    link: "/",
   
  },
  {
    id: 2,
    has_dropdown: false,
    title: "About",
    link: "/about",
  },
  // {
  //    id: 3,
  //    has_dropdown: true,
  //    title: "Project",
  //    link: "#",
  //    sub_menus: [
  //       { link: "/project", title: "Projects" },
  //       { link: "/project-details", title: "Projects Details" },
  //    ],
  // },
  // {
  //   id: 4,
  //   has_dropdown: true,
  //   title: "Services",
  //   link: "#",
  //   sub_menus: [
  //     { link: "/service", title: "Services" },
  //     { link: "/service-details", title: "Services Details" },
  //   ],
  // },
  // {
  //   id: 5,
  //   has_dropdown: true,
  //   title: "Pages",
  //   link: "#",
  //   sub_menus: [
  //     { link: "/team", title: "Team" },
  //     { link: "/team-details", title: "Team Details" },
  //     { link: "/testimonial", title: "Client Feedback" },
  //     { link: "/gallery", title: "Our Gallery" },
  //     { link: "/pricing", title: "Pricing Plan" },
  //     { link: "/faq", title: "Faq" },
  //     { link: "/404", title: "Error Page" },
  //   ],
  // },
  // {
  //    id: 6,
  //    has_dropdown: true,
  //    title: "Blog",
  //    link: "#",
  //    sub_menus: [
  //       { link: "/news", title: "Blog Grid" },
  //       { link: "/news-sidebar", title: "Blog Sidebar" },
  //       { link: "/news-standard", title: "Blog Standard" },
  //       { link: "/news-details", title: "Blog Details" },
  //    ],

  // },
  {
    id: 7,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
  },
  {
    id: 8,
    has_dropdown: false,
    title: "Shop",
    link: process.env.NEXT_PUBLIC_ECOOMERCE_URL,
  },
];
export default menu_data;
