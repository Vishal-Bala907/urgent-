import BreadCrumb from "@/components/common/BreadCrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import BlogDetailsArea from "../../blog-details/BlogDetailsArea";
import FooterOne from "@/layouts/footers/FooterOne";
import BlogDetailsArea2 from "./BlogDetails2";

const Blog2 = () => {
  return (
    <div>
      <HeaderOne headerTop={false} />
      <BreadCrumb title="Blog Details 2" />
      <BlogDetailsArea2 />
      <FooterOne />
    </div>
  );
};

export default Blog2;
