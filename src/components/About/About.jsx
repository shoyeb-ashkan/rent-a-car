import React from "react";
import carPng from "../../assets/About-car.png";

const About = () => {
  return (
    <div className="dark:bg-black dark:text-white bg-slate-100 sm:min-h-[640px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={carPng}
              alt=""
              className="sm:scale-105 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About us
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                Driven by a passion for exceptional service, we are committed to
                redefining your rental experience.
              </p>
              <p data-aos="fade-up">
                With a focus on reliability, affordability, and convenience, we
                aim to make every journey memorable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
