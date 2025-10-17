import React, { useEffect } from "react";
import {
  IoLogoHtml5,
  IoLogoJavascript,
} from "react-icons/io5";
import {
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiSocketdotio,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";

import AOS from "aos";
import "aos/dist/aos.css";

// Your skills array remains the same
const skills = [
  {
    id: 1,
    icon: (
      <IoLogoHtml5 className=" top-[-20px] text-orange-600" title="HTML5" />
    ),
    title: "HTML5",
  },
  {
    id: 2,
    icon: (
      <FaCss3Alt
        className=" left-[40%] bottom-[-20px] text-blue-600"
        title="CSS"
      />
    ),
    title: "CSS",
  },
  {
    id: 3,
    icon: (
      <IoLogoJavascript
        className=" left-[-10px] top-[50%] text-yellow-400"
        title="JavaScript"
      />
    ),
    title: "JAVASCRIPT",
  },
  {
    id: 4,
    icon: <FaReact className="  top-[40%] text-blue-400" title="React" />,
    title: "REACT",
  },
  {
    id: 5,
    icon: (
      <SiTailwindcss
        className=" right-[-10%] top-[80%] text-blue-500"
        title="Tailwind CSS"
      />
    ),
    title: "TAILWIND",
  },
  {
    id: 6,
    icon: (
      <SiFirebase
        className=" right-[-20%] top-[20%] text-yellow-500 "
        title="Firebase"
      />
    ),
    title: "FIREBASE",
  },
  {
    id: 7,
    icon: (
      <SiMongodb
        className=" left-[5%] top-[5%] text-green-500 "
        title="MongoDB"
      />
    ),
    title: "MONGODB",
  },
  {
    id: 8,
    icon: (
      <FaNodeJs
        className=" left-[5%] top-[5%] text-green-700 "
        title="Node.js"
      />
    ),
    title: "NODE JS",
  },
  {
    id: 9,
    icon: (
      <SiExpress
        className=" left-[5%] top-[5%] text-black bg-white "
        title="Express.js"
      />
    ),
    title: "EXPRESS JS",
  },
  {
    id: 10,
    icon: (
      <SiSocketdotio
        className=" left-[5%] top-[5%] text-white "
        title="Socket.io"
      />
    ),
    title: "SOCKET",
  },
  {
    id: 11,
    icon: <FaGithub className=" left-[5%] top-[5%] text-white " title="GitHub" />,
    title: "GITHUB",
  },
  {
    id: 12,
    icon: <SiMysql className="text-blue-500" title="MySQL" />,
    title: "MYSQL",
  },
  {
    id: 13,
    icon: <SiPostgresql className="text-blue-700" title="PostgreSQL" />,
    title: "POSTGRESQL",
  },
  {
    id: 14,
    icon: <FaDocker className="text-blue-400" title="Docker" />,
    title: "DOCKER",
  },
];


const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    // Changed the main container to flex-col to stack items vertically
    <div className="w-full h-full md:w-[600px] md:h-auto py-10 flex flex-col justify-center items-center gap-10">
      <h1
        data-aos="zoom-in"
        // --- CHANGES HERE ---
        // Removed `absolute` and positioning classes.
        // Added margin-bottom (`mb-4`) to create space.
        className="font-lora text-[25px] sm:text-[30px] text-white underline underline-offset-8"
      >
        My Skills
      </h1>
      <div
        data-aos="zoom-in"
        // Removed relative positioning as it's no longer needed
        className="flex flex-wrap gap-[28px] sm:gap-[38px] justify-center items-center w-[290px] sm:w-[390px] text-[50px]"
      >
        {skills.map((e) => {
          return (
            <div key={e.id} className="hover:scale-110 cursor-pointer">
              {e.icon}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;