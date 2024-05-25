import React from "react";
import whiteCar from "../../assets/white-car.png";
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car3.png";

const carList = [
  {
    name: "BMW UX",
    price: 100,
    image: whiteCar,
    aosDelay: "0",
  },
  {
    name: "KIA UX",
    price: 140,
    image: car2,
    aosDelay: "500",
  },
  {
    name: "BMW UX",
    price: 100,
    image: car3,
    aosDelay: "1000",
  },
];

const CarLists = () => {
  return (
    <div className="pb-24 pt-12 bg-white dark:bg-black dark:text-white">
      <div className="container">
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Explore Our Fleet
        </h1>
        <p data-aos="fade-up" className="text-sm pb-10">
          Discover the Perfect Ride for Your Journey
        </p>

        {/* carlist */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((car) => (
              <div
                data-aos="fade-up"
                data-aos-delay={car.aosDelay}
                className=" space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]">
                  <img
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:translate-x-16 duration-700"
                    src={car.image}
                    alt={car.name}
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{car.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>${car.price}/Day</p>
                    <a href="#">Details</a>
                  </div>
                </div>
                <p className="text-xl font-semibold absolute top-0 left-3">
                  12Km
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarLists;
