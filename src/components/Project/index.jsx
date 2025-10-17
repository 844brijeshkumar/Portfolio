import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { HiArrowRight } from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  const [view, setView] = useState(0);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const close = () => {
    setView(0);
  };
  const open = (id) => {
    setView(id);
  };

  const projects = [
    {
      fade: "600",

      name: "Medlock",
      page: "medlock",
      heading1: "MedLock",

      heading2: "app",
      overview:
        "Your project is a movie streaming platform with a React frontend, styled with Tailwind CSS, and a Node.js backend using Express and MongoDB. It includes JWT-based authentication, routing with react-router-dom, and integrates with movie APIs like IMDb. The backend is hosted on Render, and the app supports PWA features.",

      pic: "../flexifyy/flexify_3.jpg",
      appName: "Medlock",
      link: "https://medlock.netlify.app",
    },
    {
      appName: "Montex",
      id: "3",

      page: "montex",
      name: "Montex",
      heading1: "Montex",
      heading2: "app",
      link: "https://montex.netlify.app/",
      overview:
        "This is a YouTube clone using the YouTube API. The app replicates the core functionality of YouTube, allowing users to search for videos, watch content, and manage their playlists. By leveraging the YouTube API, it provides real-time access to YouTube's vast library of videos, ensuring users can find and enjoy the content they love. The interface is designed to be intuitive and user-friendly, offering a seamless viewing experience.",
      pic: "../youtube/title.webp",

      fade: "800",
    },
    {
      id: "1",
      heading1: "ART",
      fade: "900",
      pic: "../portfolio/title.webp",

      appName: "ttarts",

      overview:
        "This is an art portfolio with a simple and effective design. It showcases a diverse collection of artworks, highlighting the artist's unique style and creativity. The intuitive layout ensures an enjoyable viewing experience, while the minimalist design keeps the focus on the art itself.",
      page: "artportfolio",
      heading2: "PORTFOLIO",

      name: "art portfolio",
      link: "https://ttarts.netlify.app/",
    },
  ];

  return (
    <div className="w-auto  h-full md:w-[500px] md:h-[400px]  flex justify-end items-center right-[-22%] md:right-0  absolute top-[10%]  text-red-300 rounded-md ">
      <div className="w-[300px] min-[410px]:w-[320px] h-auto lg:w-[700px]  grid grid-row-4 gap-3  md:gap-6 rounded-md   justify-center items-center ">
        {projects?.map((e, index) => {
          return (
            <div
              key={index + 1}
              data-aos="fade-left"
              data-aos-duration={e.fade}
              data-aos-easing="ease-in-out-sine"
              className="h-auto w-auto justify-end flex-col flex items-center  "
            >
              <div
                className={`card rounded-[2rem] bg-cover cursor-pointer flex overflow-hidden duration-300 ease-in-out w-[300px] md:w-[400px] lg:w-[500px] ${
                  view == index + 1
                    ? " h-[200px] lg:h-[300px]"
                    : "h-[40px]  md:h-[60px] lg:h-[70px]"
                } relative  `}
              >
                <img
                  className="h-full w-full object-cover blur-[7px] cursor-auto"
                  loading="lazy"
                  src={e.pic}
                  alt={e.pic}
                />
                <Link
                  to={`/project/${e.page}`}
                  className={` ${
                    view == index + 1 ? "flex " : "hidden"
                  } absolute w-[80px] h-[40px] bg-[#ffffff9f] left-[38%] top-[35%] md:left-[45%] md:top-[35%] rounded-lg outline outline-offset-4 outline-1 outline-blue-800`}
                >
                  <div
                    className={`  w-[80px] h-[40px] flex justify-center items-center font-Montserrat text-black text-[20px] font-light p-4 duration-300 ease-in`}
                  >
                    Visit
                  </div>
                </Link>
              </div>

              <div
                className={`absolute ${
                  view == index + 1 ? "rounded-b-[32px]" : "rounded-[32px]"
                }  rounded-b-m h-[40px]  md:h-[60px] lg:h-[70px] w-full bg-[#f0f0f0] text-center justify-end flex items-center overflow-hidden duration-300 ease-in`}
              >
                {view == index + 1 ? (
                  <div
                    className="rounded-full drop-shadow-md  text-black font-bold text-[18px]   flex justify-center items-center right-7 md:right-4 absolute w-8 h-8 md:w-10 md:h-10 bg-[#b7b7b7] cursor-pointer"
                    onClick={close}
                  >
                    <RxCross1 />
                  </div>
                ) : (
                  <div
                    className="rounded-full drop-shadow-md  text-black font-extrabold text-[22px]   flex justify-center items-center right-7 md:right-4 absolute w-8 h-8 md:w-10 md:h-10 bg-[#b7b7b7] cursor-pointer "
                    onClick={() => open(index + 1)}
                  >
                    <HiArrowRight />
                  </div>
                )}

                <h1 className="px-8 py-2 font-lora uppercase text-black absolute left-0 rounded-e-3xl  text-[15px] md:text-[25px] ">
                  {e.name}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
