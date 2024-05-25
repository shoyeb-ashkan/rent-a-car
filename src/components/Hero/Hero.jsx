import React from "react";
import darkCar from "../../assets/car.png";
import lightCar from "../../assets/banner-car.png";

const Hero = ({ theme }) => {
  return (
    <div className="dark:bg-black dark:text-white duration-300 relative -z-20">
      <div className="container min-h-[640px] flex">
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
          <div
            className="order-1 sm:order-2"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
          >
            <img
              className="relative -z-10 max-h-[600px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
              src={theme === "dark" ? darkCar : lightCar}
              alt="car.png"
            />
          </div>
          <div className="order-2 sm:order-1 space-y-5 sm:pr-32">
            <p className="text-primary text-2xl font-serif" data-aos="fade-up">
              Effortless
            </p>
            <h1
              className="text-3xl md:text-5xl lg:text-7xl font-semibold font-serif"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Rent A Car
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000">
              Effortless Rental Experience Seamless bookings, hassle-free rides
              - embark on your journey stress-free. Your perfect ride awaits
            </p>
            <button
              className="btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300"
              data-aos="fade-up"
              data-aos-delay="1500"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
