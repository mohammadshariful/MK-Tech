import React from "react";
// import required modules
import { Autoplay, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import user1 from "../../../assets/images/user1.jpg";
import user2 from "../../../assets/images/user2.jpg";
import user3 from "../../../assets/images/user3.jpg";
import "./Testimonials.css";
const Testimonials = () => {
  const testimonials = [
    {
      _id: 1,
      img: user1,
      name: "Rayhan",
      description: "",
    },
    {
      _id: 2,
      img: user2,
      name: "Siddik",
      description: "",
    },
    {
      _id: 3,
      img: user3,
      name: "Albert",
      description: "",
    },
  ];
  return (
    <section className="my-4">
      <h2 className="section-title">
        <span>What Our Customer Say</span>
      </h2>
      <Swiper
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {testimonials.map((testimoni) => (
          <SwiperSlide key={testimoni._id}>
            <div className="d-flex justify-contnet-between align-items-center flex-column flex-lg-row testimonila-container">
              <div className="user-img-container">
                <img className="img-fluid" src={testimoni.img} alt="" />
              </div>
              <div className="mt-3">
                <h4>{testimoni.name}</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nulla quae cumque quam veniam alias necessitatibus! Unde
                  labore eligendi ipsa suscipit libero iure, fuga quasi in
                  molestiae consequatur voluptates dicta obcaecati?
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
