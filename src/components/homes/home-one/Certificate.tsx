"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import img1 from "@/assets/img/gallery/01.jpg";
import img2 from "@/assets/img/gallery/02.jpg";
import img3 from "@/assets/img/gallery/03.jpg";
import img4 from "@/assets/img/gallery/04.jpg";
import img6 from "@/assets/img/gallery/04.jpg";
import img5 from "@/assets/img/gallery/05.jpg";
import "./Cerificate.css";
 
function Certificate() {
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(
    null
  );

  const images: StaticImageData[] = [img1, img2, img3, img4, img5, img6];

  const handleImageClick = (image: StaticImageData) => {
    setSelectedImage(image);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleCloseImage();
    }
  };

  return (
    <div className="certificate-outer">
      <h1 className="certificate-container">Certificates</h1>
      <div className="swipe-container">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40} // Increase this value if needed
          slidesPerView={3}
          centeredSlides={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="sliding-images-container"
              onClick={() => handleImageClick(image)}
            >
              <Image src={image} alt={`Certificate ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {selectedImage && (
        <div className="overlay" onClick={handleOverlayClick}>
          <div>
            <Image
              className="overlay-image"
              src={selectedImage}
              alt="Selected Certificate"
            />
          </div>
          <button onClick={handleCloseImage} className="close-button">
            X
          </button>
        </div>
      )}
    </div>
  );
}

export default Certificate;
