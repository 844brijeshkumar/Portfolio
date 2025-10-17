import React, { useEffect } from "react";
import { IoMdHome } from "react-icons/io";
import { GiSkills } from "react-icons/gi";
import { FaPaintBrush } from "react-icons/fa";

import { GrProjects, GrContact } from "react-icons/gr";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const Location = useLocation();
  const sound = (page) => {
    location.href = page.path;
  };

  useEffect(() => {
    if (Location.hash != "") {
      location.href = Location.hash;
    }
  }, [Location.hash]);
  const pages = [
    {
      name: "home",
      path: "#top",
      icon: <IoMdHome />,
      default: "/",
      index: 0,
    },
    {
      name: "project",
      path: "#project",
      icon: <GrProjects />,
      default: "*",
      index: 1,
    },
    {
      name: "art",
      path: "#art",
      icon: <FaPaintBrush />, // You can choose any icon you like
      default: "*",
      index: 3,
    },
    {
      name: "about",
      path: "#about",
      icon: <GiSkills />,
      default: "*",
      index: 2,
    },

    {
      name: "contact",
      path: "#contact",
      icon: <GrContact />,
      default: "*",
      index: 4,
    },
  ];

  return (
    <div className="h-24 w-full min-[1440px]:h-screen min-[1440px]:w-24 bottom-0 fixed flex min-[1440px]:flex-col justify-center items-center gap-7  z-10">
      {pages.map((page, index) => {
        return (
          <div
            key={index}
            onClick={() => sound(page)}
            className={`w-10 h-10 duration-200 ease-in ${
              Location.hash == page.path ||
              (page.default == "/" && Location.hash == "")
                ? "bg-blue-950 ring-blue-900 ring-2 text-white"
                : "bg-[#ffffff61]"
            } sm:hover:bg-blue-950 flex flex-col justify-center items-center group  rounded-full relative  hover:blue-950 ring-offset-[#0e0e0e] ring-offset-2 cursor-pointer`}
          >
            {page.icon}
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
