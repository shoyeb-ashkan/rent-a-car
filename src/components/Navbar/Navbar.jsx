import React, { useState } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
const NavLinks = [
  {
    id: "1",
    name: "Home",
    link: "/#",
  },
  {
    id: "2",
    name: "Cars",
    link: "/#cars",
  },
  {
    id: "3",
    name: "About",
    link: "/#about",
  },
  {
    id: "4",
    name: "booking",
    link: "/#booking ",
  },
];
const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="shadow-md bg-white dark:bg-dark dark:text-white duration-300">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold font-serif">Rent A Car</h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NavLinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    className="py-2 uppercase hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-[250ms]  text-lg font-medium"
                    href={link}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-10">
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl cursor-pointer fill-primary hover:fill-primary/70"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl cursor-pointer hover:fill-dark/70"
              />
            )}
        
            {/* mobile view */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                size={30}
                className="cursor-pointer transition-all"
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                size={30}
                className="cursor-pointer transition-all"
              />
            )}
          </div>
        </div>
      </div>
      {/* Responsive menu */}
      <div
        className={`${
          showMenu ? "left-0" : "-left-full"
        } fixed top-0 z-50 bg-white dark:bg-gray-900 h-screen w-[300px] md:hidden rounded-r-xl shadow-lg flex-col justify-between px-8 pb6 pt-16 transition-all duration-300`}
      >
        <div className="card">
          <div className="flex items-center justify-start gap-3">
            <FaUserCircle size={50} />
            <div>
              <h1>Hello User</h1>
              <p className="bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.yellow.300),theme(colors.orange.400),theme(colors.red.500))] bg-[length:200%_auto] animate-gradient">
                Premium User
              </p>
            </div>
          </div>
          <nav className="mt-12">
            <ul className="space-y-4 text-xl ">
              {NavLinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    className="py-2 uppercase hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-[250ms]  text-lg font-medium"
                    href={link}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div>
          <h1></h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
