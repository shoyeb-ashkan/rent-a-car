import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "Best Price",
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Drive your dreams without breaking the bank.",
    aosDelay: "0",
  },
  {
    name: "Fast and Safe",
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      " Where speed meets security, ensuring your journey is smooth and secure.",
    aosDelay: "500",
  },
  {
    name: "Experience Drivers",
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description: "Your pathway to seamless journeys, always within reach.",
    aosDelay: "1000",
  },
];

const Services = () => {
  return (
    <div className="py-4 pt-10 dark:bg-black dark:text-white duration-300 sm:min-h-[600px] sm:place-items-center">
      <div className="container">
        <div className="pb-12">
          <h1 className="text-3xl font-semibold text-center py-4 font-serif sm:text-4xl">
            Why Choose US?
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skillsData.map(({ name, aosDelay, icon, link, description }) => (
            <div
              key={name}
              data-aos="fade-up"
              data-aos-delay={aosDelay}
              className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary text-white hover:text-black rounded-lg"
            >
              <div className="grid place-items-center">{icon}</div>
              <h1 className="text-2xl font-bold">{name}</h1>
              <p>{description}</p>
              <a
                href={link}
                className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
              >
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
