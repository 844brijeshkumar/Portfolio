import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Moon from "../../components/Moon";
import About from "../../components/About";
import Project from "../../components/Project";
import { useLocation } from "react-router-dom";
import ContactUs from "../../components/Contact";
import { useSwipeable } from "react-swipeable";
import { FaSquareInstagram } from "react-icons/fa6";
import Artwork from "../../components/Artwork";

const ContactSubHeading = () => (
  <div className="flex flex-col gap-2 w-[250px]">
    <a href="mailto:844brijesh722@gmail.com" className=" hover:underline">
      844brijesh722@gmail.com
    </a>
    <div className="flex gap-1">
      {[
        {
          href: "https://github.com/844brijeshkumar",
          icon: <FaGithub />,
        },
        {
          href: "https://www.linkedin.com/in/brijesh-kumar-",
          icon: <FaLinkedin />,
        },
        {
          href: "https://www.instagram.com/brijesh.official.in",
          icon: <FaSquareInstagram />,
        },
      ].map((link, index) => (
        <a href={link.href} target="_blank" className="w-[30px]" key={index}>
          <div className="cursor-pointer rounded-full text-white text-[20px]">
            {link.icon}
          </div>
        </a>
      ))}
    </div>
  </div>
);

const Home = () => {
  const Location = useLocation();

  const pageSections = [
    {
      id: "top",
      heading: "Brijesh",
      heading2: "Kumar",
      subHeading: (
        <div
          className="
         mt-2 flex flex-col items-start"
        >
          <span>Web Developer & Charcoal Artist</span>
          <span className=" text-gray-400">
            Blending design and development with artistic expression.
          </span>
        </div>
      ),
      box: <Moon />,
    },
    {
      id: "project",
      heading: "Projects",
      heading2: "",
      subHeading:
        "Built responsive UIs with a focus on API integration and performance-driven user experiences.",
      box: <Project />,
    },
    {
      id: "art",
      heading: (
        <>
          Artworks<span className="text-3xl sm:text-5xl">✏️</span>
        </>
      ),
      heading2: "",
      subHeading:
        "Discover my collection of charcoal and pencil sketches, each crafted with care and emotion.",

      box: <Artwork />,
    },
    {
      id: "about",
      heading: "About",
      heading2: "",
      subHeading:
        "Web developer and visual artist crafting responsive websites and expressive charcoal and pencil sketches to create meaningful experiences.",
      box: <About />,
    },

    {
      id: "contact",
      heading: "Get In Touch",
      heading2: "",
      subHeading: <ContactSubHeading />,
      box: <ContactUs />,
    },
  ];
  useEffect(() => {
    AOS.init();
  }, []);
  const load = () => {
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = "smooth";
    }, 1000);
  };

  const getNextLocation = (currentLocation, direction) => {
    const navigationMap = {
      "": { up: "#contact", down: "#project" },
      "#top": { up: "#contact", down: "#project" },
      "#project": { up: "#top", down: "#art" },
      "#art": { up: "#project", down: "#about" },

      "#about": { up: "#art", down: "#contact" },
      "#contact": { up: "#about", down: "#top" },
    };
    return navigationMap[currentLocation]?.[direction] || currentLocation;
  };

  const debounceData = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  let isScrolling = true;

  const handleScroll = (e) => {
    if (isScrolling) {
      const scrollDirection = e.deltaY < 0 ? "up" : "down";
      location.href = getNextLocation(location.hash, scrollDirection);
    }
    setTimeout(() => {
      isScrolling = false;
    }, 200);
  };

  const debounce = debounceData(handleScroll, 200);

  const wheel = (e) => {
    debounce(e);
  };

  const handlersBox = useSwipeable({
    onSwiped: ({ dir, event }) => {
      event.stopPropagation();
      const swipeDirection = dir === "Down" ? "up" : "down";
      location.href = getNextLocation(location.hash, swipeDirection);
    },
    preventDefaultTouchmoveEvent: true,
  });
  useEffect(() => {
    const handleKeyDown = (e) => {
      let direction = null;

      if (e.key === "ArrowUp") {
        direction = "up";
      } else if (e.key === "ArrowDown") {
        direction = "down";
      }

      if (direction) {
        e.preventDefault(); // Prevent default scroll
        location.href = getNextLocation(location.hash, direction);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div id="home" onWheel={wheel} {...handlersBox} onLoad={load} tabIndex={0}>
      <div className="p-2 md:px-9 md:py-7 z-20 fixed w-full flex justify-between items-center">
        <a href="/" aria-label="for refreshing the page">
          <h1 className=" text-white text-[15px] md:text-[22px] transition-colors font-lora ring-blue-900 ring-2 p-2 rounded-md hover:ring-blue-950 hover:text-[#c9c8c8ce]">
            Brijesh Kumar
          </h1>
        </a>

        <Link
          to="https://github.com/844brijeshkumar"
          target="_blank"
          title="github"
          aria-label="github link"
        >
          <div className=" cursor-pointer ring-blue-900 ring-2 p-2 rounded-full text-white hover:text-[#c9c8c8ce] text-[30px] transition-colors hover:ring-blue-950">
            <FaGithub />
          </div>
        </Link>
      </div>

      <div className="fixed ">
        <Link to="https://github.com/844brijeshkumar" target="_blank">
          <div className="absolute z-20 right-4 md:right-10 top-2 md:top-6 cursor-pointer ring-blue-900 ring-2 p-2 rounded-full text-white text-[30px]">
            <FaGithub />
          </div>
        </Link>
      </div>

      <div className="w-full  bg-gradient-to-b from-[#001c43]  via-[#000102]  to-[#000]  fixed overflow-hidden ">
        {Location.hash != "#top" && Location.hash != "" ? null : (
          <h1
            data-aos="fade-down"
            data-aos-easing="ease-in-out-sine"
            data-aos-duration="700"
            className={`text-gray-300 text-[15px] fixed  font-hindmaduraimedium  bottom-[0px] z-[-1] ${
              screen.width > 768 ? "left-8" : "right-5"
            }  vertical  after:content-['_----------']  `}
          >
            SCROLLDOWN
          </h1>
        )}

        <div className="z-1 md:items-center  relative h-svh w-full top-[20%]  flex justify-center">
          <div
            id="star"
            className="absolute w-full h-full animate-[wiggle_2s_ease-in-out_infinite] top-[14%] md:top-[1%]  md:right-[-30%] "
          >
            <div data-depth="0.2" data-aos="fade-left" data-aos-once="true">
              <img src="star.svg" alt="" />
            </div>
          </div>
          <div
            id="parallax"
            className={`absolute right-[22%] md:right-[1%] min-[2560px]:right-[20%] duration-500 ease-in ${
              screen.width < 768 &&
              Location.hash != "#top" &&
              Location.hash != ""
                ? "top-[-20%] "
                : "top-[10%] "
            } `}
          >
            <div
              data-depth="0.1"
              className={`h-[200px] w-[200px]   md:h-[300px] md:w-[300px]  lg:h-[645px] lg:w-[645px]  md:mt-0  flex  rounded-full justify-center md:items-center`}
            >
              <img
                src="/bg_image.svg"
                alt="bg"
                className="scale-[3] sm:scale-[2]"
              />
            </div>
          </div>
        </div>
      </div>
      <Navbar />

      {pageSections.map((e) => {
        return (
          <div
            id={e.id}
            key={e.id}
            className="h-svh w-full  relative flex  text-white"
          >
            <div
              className={`absolute  ${
                screen.width < 768 &&
                Location.hash != "#top" &&
                Location.hash != ""
                  ? "top-[12%]"
                  : "top-[55%]"
              }  md:top-[30%] left-[35px] sm:left-[11%] min-[1440px]:left-[11%] duration-500 ease-in  justify-center flex flex-col gap-2 md:gap-7 z-[2] overflow-hidden`}
            >
              <h1
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-easing="ease-in-out-sine"
                className="text-[40px] sm:text-[50px] md:text-[60px]  lg:text-[70px] min-[1440px]:text-[100px] font-Montserrat font-bold leading-[40px] md:leading-[90px] drop-shadow-md"
              >
                {e.heading} <br /> {e.heading2}
              </h1>
              <div
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-easing="ease-in-out-sine"
                className="flex flex-col gap-2 md:gap-3"
              >
                <div className="w-1/4  h-1 rounded-sm bg-blue-900 "></div>
                <div className="w-1/4  h-1 ml-8 md:ml-16 rounded-sm bg-blue-900"></div>{" "}
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-easing="ease-in-out-sine"
                className="text-sm text-justify font-martel  w-[300px] md:w-[350px] lg:w-[500px] hyphens-auto break-words"
              >
                {e.subHeading}
              </div>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="600"
              data-aos-easing="ease-in-out-sine"
              className="w-full h-svh  relative  flex justify-center md:items-center "
            >
              <div
                className={`h-[200px] w-[200px] md:h-[300px] md:w-[300px] right-[22%] ${
                  screen.width < 768 &&
                  Location.hash != "#top" &&
                  Location.hash != ""
                    ? "top-[45%]"
                    : "top-[10%]"
                }  lg:h-[505px] lg:w-[645px]  md:mt-0  flex   md:right-[8%]  min-[2560px]:right-[20%]  duration-500 ease-in   rounded-full md:justify-center md:items-center absolute`}
              >
                {e?.box}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
