"use client";
import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
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

  // Close modal on escape key press
  React.useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedImage) {
        handleCloseImage();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyPress);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <div className="certificate-outer">
      <h1 className="certificate-container">Certificates</h1>
      <div className="swipe-container">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            disabledClass: 'swiper-button-disabled',
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          spaceBetween={20}
          centeredSlides={true}
          slidesPerView={1.2}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            480: {
              slidesPerView: 1.2,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 2.7,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 3.2,
              spaceBetween: 40,
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="sliding-images-container"
              style={{ width: '100%', touchAction: 'manipulation', cursor: 'pointer' }}
              onClick={() => handleImageClick(image)}
            >
              <Image 
                src={image} 
                alt={`Certificate ${index + 1}`}
                loading="lazy"
                placeholder="blur"
                style={{ width: '100%', height: 'auto', maxHeight: 220, objectFit: 'cover', borderRadius: 12 }}
              />
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </div>

      {selectedImage && (
        <div className="overlay" onClick={handleOverlayClick}>
          <div className="overlay-content">
            <Image
              className="overlay-image"
              src={selectedImage}
              alt="Selected Certificate"
              loading="eager"
              style={{
                width: '90vw',
                height: 'auto',
                maxHeight: '90vh',
                display: 'block',
                margin: '0 auto',
                borderRadius: 12,
                boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                background: '#fff',
                objectFit: 'contain',
              }}
            />
            <button 
              onClick={handleCloseImage} 
              className="close-button"
              aria-label="Close modal"
              type="button"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#222"/>
                <path d="M8 8L16 16" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                <path d="M16 8L8 16" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificate;
