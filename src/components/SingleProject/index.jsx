import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import { PiArrowLeftThin } from "react-icons/pi";

import { FaGithub } from "react-icons/fa";

const back = () => {
  const html = document.querySelector("html");
  html.style.scrollBehavior = "auto";
  setTimeout(() => {
    html.style.scrollBehavior = "smooth";
  }, 1000);
};

const projects = [
  {
    fade: "600",
    database: ["postgre", "node js"],
    hosting: ["netlify", "render"],
    name: "Medlock",
    page: "medlock",
    version: ["github"],
    heading1: "Medlock ",
    screenshots: [
      "../flexifyy/flexify_1.jpg",
      "../flexifyy/flexify_2.jpg",
      "../flexifyy/flexify_3.jpg",
      "../flexifyy/flexify_4.jpg",
    ],
    heading2: "",
    overview:
      "Your project is a movie streaming platform with a React frontend, styled with Tailwind CSS, and a Node.js backend using Express and MongoDB. It includes JWT-based authentication, routing with react-router-dom, and integrates with movie APIs like IMDb. The backend is hosted on Render, and the app supports PWA features.",
    languages: ["react", "css", "tailwind", "react query"],
    pic: "../flexifyy/flexify_3.jpg",
    appName: "Medlock",
    link: "https://medlock.netlify.app",
    timestamp: {
      seconds: 1722963621,
      nanoseconds: 982000000,
    },
  },
  {
    appName: "Montex",
    id: "3",
    timestamp: {
      seconds: 1719592001,
      nanoseconds: 549000000,
    },
    version: ["github"],
    others: ["fakeData API"],
    languages: ["Html", "css", "Javascript"],
    hosting: ["netlify"],
    page: "montex",
    database: ["MongoDb"],
    name: "Montex",
    heading2: "e-commerce",
    heading1: "Montex",
    link: "https://montex.netlify.app/",
    overview:
      "This is a YouTube clone using the YouTube API. The app replicates the core functionality of YouTube, allowing users to search for videos, watch content, and manage their playlists. By leveraging the YouTube API, it provides real-time access to YouTube's vast library of videos, ensuring users can find and enjoy the content they love. The interface is designed to be intuitive and user-friendly, offering a seamless viewing experience.",
    pic: "../youtube/title.webp",
    screenshots: [
      "../youtube/project3.webp",
      "../youtube/p3_history.webp",
      "../youtube/p3_profile.webp",
      "../youtube/p3_yt.webp",
    ],
    fade: "800",
  },
  {
    timestamp: {
      seconds: 1720261121,
      nanoseconds: 615000000,
    },
    others: ["email js", "Jquery Lightbox Gallery"],
    id: "1",
    heading1: "ART",
    fade: "900",
    pic: "../portfolio/title.webp",
    database: ["firebase"],
    hosting: ["netlify"],
    appName: "ttarts",
    screenshots: [
      "../portfolio/p1_about.webp",
      "../portfolio/p1_contact.webp",

      "../portfolio/p1_matte.webp",

      "../portfolio/p1_concept.webp",
    ],
    overview:
      "This is an art portfolio with a simple and effective design. It showcases a diverse collection of artworks, highlighting the artist's unique style and creativity. The intuitive layout ensures an enjoyable viewing experience, while the minimalist design keeps the focus on the art itself.",
    page: "artportfolio",
    heading2: "PORTFOLIO",
    version: ["github"],
    languages: ["html", "javascript", "css"],
    name: "art portfolio",
    link: "https://ttarts.netlify.app/",
  },
];

const SingleProject = () => {
  const location = useLocation();
  const [color, setColor] = useState("white");
  const [zoom, setZoom] = useState({ iszoomed: false, pic: "" });
  useEffect(() => {
    AOS.init();
  }, []);
  const projectdetails = projects.find(
    (a) => location.pathname == `/project/${a.page}`
  );

  if (!projectdetails) {
    return (
      <div className="flex flex-col items-center justify-center h-svh text-center px-4 bg-gradient-to-b from-[#001c43]  via-[#000102]  to-[#000]">
        <div className="fixed w-full h-[50%] md:h-[100%]  flex z-[2] ">
          <img
            className="w-full h-full  animate-[wiggle_2s_ease-in-out_infinite]"
            src="../star.svg"
            alt=""
          />
        </div>
        <h2 className="text-3xl font-semibold text-gray-800 mb-2 z-[3]">
          Project Not Found
        </h2>
        <p className="text-gray-500 mb-6 z-[3]">
          The project you’re looking for doesn’t exist or may have been removed.
        </p>
        <Link
          to="/#project"
          className="px-5 py-2 z-[3] bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          ← Back to Projects
        </Link>
      </div>
    );
  }
  const zoomIn = (pic) => {
    setZoom({ iszoomed: !zoom.iszoomed, pic: pic });
  };

  const setBgOnScroll = (e) => {
    const rect = document.getElementById("Overview").getBoundingClientRect();
    128 > rect.top ? setColor("black") : setColor("white");
  };
  return (
    <div
      className={`w-full h-svh fixed text-white  ${
        zoom.iszoomed ? "overflow-hidden" : "overflow-auto"
      } scroll-smooth bg-gradient-to-b from-[#001c43]  via-[#000102]  to-[#000] `}
      onScroll={setBgOnScroll}
    >
      <div
        className={`fixed h-full w-full justify-center items-center z-50 duration-300 ease-in cursor-pointer ${
          zoom.iszoomed ? "flex bg-[#000000e5] scale-100" : "scale-0"
        }`}
        onClick={() => setZoom(!zoom.iszoomed)}
      >
        {zoom.iszoomed && (
          <img
            onClick={(e) => e.stopPropagation()}
            src={zoom.pic}
            alt=""
            className={` sm:h-[70%] absolute z-10 cursor-default ${
              zoom.iszoomed ? "scale-100" : "scale-0"
            } `}
          />
        )}
      </div>
      <div className="p-2 md:px-9 md:py-7 z-20 fixed w-full flex justify-between items-center">
        <a href="/">
          <h1
            className={` text-${color} font-lora text-[15px] md:text-[22px] transition-colors ring-blue-900 ring-2 p-2 rounded-md hover:ring-blue-950 hover:text-[#c9c8c8ce] drop-shadow-lg`}
          >
            Brijesh Kumar
          </h1>
        </a>

        <Link to="https://github.com/febinthomas7" target="_blank">
          <div className="cursor-pointer ring-blue-900 ring-2 p-2 rounded-full text-white hover:text-[#c9c8c8ce] text-[30px] transition-colors hover:ring-blue-950 bg-black">
            <FaGithub className="drop-shadow-lg" />
          </div>
        </Link>
      </div>
      <Link
        onClick={back}
        to="/#project"
        className="mt-14 md:mt-[79px] md:ml-[30px] z-20 fixed cursor-pointer overflow-hidden"
      >
        <h1
          data-aos="fade-left"
          data-aos-easing="ease-in-out-sine"
          data-aos-duration="700"
          id="back"
          className={` text-white text-[45px] md:text-[70px] p-2  `}
        >
          <PiArrowLeftThin className="drop-shadow-lg" />
        </h1>
      </Link>
      <div className="fixed w-full h-[50%] md:h-[100%]  flex z-[-1] ">
        <img
          className="w-full h-full  animate-[wiggle_2s_ease-in-out_infinite]"
          src="../star.svg"
          alt=""
        />
      </div>

      <div>
        <h1
          data-aos="fade-down"
          data-aos-easing="ease-in-out-sine"
          data-aos-duration="700"
          className={`text-gray-300 text-[15px] fixed font-hindmaduraimedium  sm:text-[20px]  bottom-[0px] z-[-1] ${
            screen.width > 768 ? "left-8" : "right-5"
          }  vertical  after:content-['_----------']  `}
        >
          SCROLLDOWN
        </h1>

        <div className="flex w-full h-svh z-[2] flex-col-reverse md:flex-row rounded-md gap-12   justify-end items-center ">
          <div className="w-[100%] h-[40%] md:w-[38%] flex flex-col   items-center relative ">
            <div className="absolute z-10 left-10 md:left-[200px] flex flex-col gap-6 md:gap-8  md:w-[calc(100%+200px)]">
              <h1
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-easing="ease-in-out-sine"
                className="text-[40px] md:text-[100px] drop-shadow-md font-Montserrat font-bold  leading-[40px] md:leading-[90px] "
              >
                {projectdetails.heading1} <br />
                {projectdetails.heading2}
              </h1>
              <div
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-easing="ease-in-out-sine"
                className="flex flex-col gap-2 md:gap-5"
              >
                <div className="w-1/3 h-1 rounded-sm bg-blue-900 "></div>
                <div className="w-1/3 h-1 ml-8 md:ml-16 rounded-sm bg-blue-900"></div>{" "}
              </div>
              <h1
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-sine"
                className="text-[14px] md:text-[20px] font-martel w-fit"
              >
                {projectdetails.appName}
              </h1>

              <Link to={projectdetails.link} target="_blank" className="w-fit">
                <button
                  data-aos="zoom-in"
                  className="ring-2 ring-blue-900 px-4 py-2 rounded-lg"
                >
                  visit site
                </button>
              </Link>
            </div>
          </div>
          <div
            className="w-full  md:h-[100%] md:w-[62%] h-[45%]"
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-easing="ease-in-out-sine"
          >
            <img className="w-full  h-full" src={projectdetails.pic} alt="" />
          </div>
        </div>
        <div className="w-full  bg-white flex flex-col justify-center items-center ">
          <div
            className="w-full h-[100px] md:h-[250px] bg-white flex text-black justify-evenly items-center relative"
            id="Overview"
          >
            <h1 className="text-[30px] md:text-[60px]  text-blue-900 before:content-['----------'] absolute left-[-75px] md:left-[-40px]">
              01
            </h1>
            <h1 className="text-[35px] md:text-[60px] font-serif">Overview</h1>
          </div>
          <div className="bg-gray-200 py-8 w-full flex  sm:flex-row flex-wrap  justify-evenly  text-black">
            <p className="text-justify sm:px-[150px] px-8 py-8">
              {projectdetails.overview}
            </p>
          </div>
        </div>
        <div className="w-full  bg-white flex flex-col justify-center items-center ">
          <div className="w-full h-[100px] md:h-[250px] bg-white flex text-black justify-evenly items-center relative">
            <h1 className="text-[30px] md:text-[60px]  text-blue-900 before:content-['----------'] absolute left-[-75px] md:left-[-40px]">
              02
            </h1>
            <h1 className="text-[35px] md:text-[60px] font-serif">
              Development
            </h1>
          </div>
          <div className="bg-gray-200 py-8 w-full flex  sm:flex-row flex-wrap  justify-evenly  text-black gap-[12px] px-[10px] flex-col">
            {projectdetails.languages.length <= 0 ? null : (
              <div
                className={`gap-2  flex-col  text-start  items-start flex p-[12px] rounded-md outline outline-1 sm:outline-none`}
              >
                <h1 className="text-[20px] sm:text-[25px] w-full  font-medium font-serif capitalize">
                  frontend
                </h1>

                <ul className="marker:text-blue-900 list-disc text-[15px] pl-5 ">
                  {projectdetails.languages?.map((e, index) => {
                    return (
                      <li key={index}>
                        <div className="flex items-center gap-2">
                          <h1> {e}</h1>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {projectdetails.database.length <= 0 ? null : (
              <div
                className={`gap-2  flex-col  text-start  items-start flex p-[12px] rounded-md outline outline-1 sm:outline-none`}
              >
                <h1 className="text-[20px] sm:text-[25px] w-full  font-medium font-serif capitalize">
                  backend
                </h1>

                <ul className="marker:text-blue-900 list-disc text-[15px] pl-5 ">
                  {projectdetails.database?.map((e, index) => {
                    return (
                      <li key={index}>
                        <div className="flex items-center gap-2">
                          <h1> {e}</h1>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {projectdetails.version.length <= 0 ? null : (
              <div
                className={`gap-2  flex-col  text-start  items-start flex p-[12px] rounded-md outline outline-1 sm:outline-none`}
              >
                <h1 className="text-[20px] sm:text-[25px] w-full  font-medium font-serif capitalize">
                  version
                </h1>

                <ul className="marker:text-blue-900 list-disc text-[15px] pl-5  ">
                  {projectdetails.version?.map((e, index) => {
                    return (
                      <li key={index}>
                        <div className="flex items-center gap-2">
                          <h1> {e}</h1>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            {projectdetails.hosting.length <= 0 ? null : (
              <div
                className={`gap-2  flex-col  text-start  items-start flex p-[12px] rounded-md outline outline-1 sm:outline-none`}
              >
                <h1 className="text-[20px] sm:text-[25px] w-full  font-medium font-serif capitalize">
                  hosting
                </h1>

                <ul className="marker:text-blue-900 list-disc text-[15px] pl-5 ">
                  {projectdetails.hosting?.map((e, index) => {
                    return (
                      <li key={index}>
                        <div className="flex items-center gap-2">
                          <h1> {e}</h1>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {projectdetails.others.length <= 0 ? null : (
              <div
                className={`gap-2  flex-col  text-start  items-start flex p-[12px] rounded-md outline outline-1 sm:outline-none`}
              >
                <h1 className="text-[20px] sm:text-[25px] w-full  font-medium font-serif capitalize">
                  others
                </h1>

                <ul className="marker:text-blue-900 list-disc text-[15px] pl-5 ">
                  {projectdetails.others?.map((e, index) => {
                    return (
                      <li key={index}>
                        <div className="flex items-center gap-2">
                          <h1> {e}</h1>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="w-full  bg-white flex flex-col justify-center items-center ">
          <div className="w-full h-[100px] md:h-[250px] bg-white flex text-black justify-evenly items-center relative">
            <h1 className="text-[30px] md:text-[60px]  text-blue-900 before:content-['----------'] absolute left-[-75px] md:left-[-40px]">
              03
            </h1>
            <h1 className="text-[35px] md:text-[60px] font-serif">
              Screenshots
            </h1>
          </div>
          <div className="bg-gray-200 pt-[50px] md:pt-[200px] w-full flex flex-wrap gap-4 md:gap-16 justify-center z-4 relative items-center">
            {projectdetails.screenshots.map((s, i) => {
              return (
                <img
                  key={i}
                  src={s}
                  alt={s}
                  loading="lazy"
                  className={`w-[35%] h-full cursor-pointer`}
                  onClick={() => zoomIn(s)}
                />
              );
            })}
          </div>
        </div>
        <div className="w-full h-[150px] md:h-[300px] bg-white flex text-black justify-center items-center">
          <Link to="/#project" onClick={back}>
            <h1 className="p-4 bg-slate-200 font-hindmaduraimedium  rounded-xl">
              return
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
