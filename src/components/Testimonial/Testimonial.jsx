import React from "react";

const testimonialData = [
  {
    name: "Sarah T.",
    image: "",
    description:
      "Smooth process from start to finish! Booking was a breeze, and the car was in immaculate condition. Will definitely be using Rent A Car for all my future travels.",
    aosDelay: "0",
    rating: 4.5,
  },
  {
    name: "Satya",
    image: "",
    description:
      "Exceptional service! The staff was friendly and accommodating, and the car selection was extensive. Highly recommend Rent A Car for anyone looking for hassle-free rentals.",
    aosDelay: "300",
    rating: 4,
  },
  {
    name: "Sabir",
    image: "",
    description:
      "Rent A Car made my trip stress-free. The online booking system is user-friendly, and I appreciated the flexibility with pick-up and drop-off times. Five stars!",
    aosDelay: "600",
    rating: 5,
  },
  {
    name: "David M",
    image: "",
    description:
    "I've used Rent a Car multiple times now, and each experience has been fantastic. The cars are always clean and well-maintained, and the prices are competitive. A reliable choice for car rentals!",
    aosDelay: "900",
    rating: 4.2,
  },
  {
    name: "Jessica H",
    image: "",
    description:
    "Absolutely satisfied with Rent a Car! The process was efficient, and the rates were reasonable. Will definitely be recommending this service to friends and family.",
    aosDelay: "1200",
    rating: 5,
  },
];
const Testimonial = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              What Our Clients Say About Us
            </p>
            <p data-aos="fade-up" className="text-center sm:px-20">
              Insights from Those Who Trusted Us with Their Journey. Dive into
              the Authentic Experiences Shared by Our Valued Customers.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-black dark:text-white">
            {testimonialData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300  rounded-lg "
              >
                <div className="grid place-items-center ">
                  <img
                    src="https://picsum.photos/200"
                    alt=""
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="text-xl text-green-700">{skill.rating} ⭐</div>
                <p>"{skill.description}"</p>
                <p className="text-center font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
