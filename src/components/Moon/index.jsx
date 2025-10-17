import Parallax from "parallax-js";

import { useEffect } from "react";
const Moon = () => {
  useEffect(() => {
    setTimeout(() => {
      let cloud1 = document.getElementById("cloud1");
      let cloud1Instance = new Parallax(cloud1, {
        relativeInput: true,
      });

      let cloud2 = document.getElementById("cloud2");
      let cloud2Instance = new Parallax(cloud2, {
        relativeInput: true,
      });

      let cloud3 = document.getElementById("cloud3");
      let cloud3Instance = new Parallax(cloud3, {
        relativeInput: true,
      });

      let cloud4 = document.getElementById("cloud4");
      let cloud4Instance = new Parallax(cloud4, {
        relativeInput: true,
      });

      let star = document.getElementById("star");
      let starInstance = new Parallax(star, {
        relativeInput: true,
      });
      let moon = document.getElementById("moon");
      let moonInstance = new Parallax(moon, {
        relativeInput: true,
      });

      let parallax = document.getElementById("parallax");
      let parallaxInstance = new Parallax(parallax, {
        relativeInput: true,
      });
    }, 1000);
  }, []);
  return (
    <>
      <div
        id="name"
        data-aos="fade-left"
        data-aos-duration="700"
        data-aos-easing="ease-in-out-sine"
        className=" text-[30px] lg:text-[60px] font-bold text-blue-900 absolute  right-[40%] top-[40%] z-10"
      ></div>
      <div
        id="cloud1"
        data-aos="fade-left"
        data-aos-duration="700"
        data-aos-easing="ease-in-out-sine"
        className="scene z-[-1] w-[120px] h[120px] md:w-[180px] md:h-[180px] lg:w-[400px] lg:h[400px] top-[-15%] right-[3%] absolute md:top-[-10%] md:right-[-20%]"
      >
        <img
          data-depth="0.4"
          src="b_cloud02.svg"
          alt="cloud"
          className="w-full"
        />
      </div>
      <div
        id="cloud2"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-sine"
        className=" z-[-1] w-[120px] h[120px] md:w-[180px] md:h-[180px] lg:w-[400px] lg:h[400px] top-[10%] left-[-30%] absolute md:top-[10%] md:left-[-20%]"
      >
        <img
          data-depth="0.3"
          src="b_cloud02.svg"
          alt="cloud"
          className="w-full"
        />
      </div>

      <div
        id="cloud3"
        data-aos="fade-left"
        data-aos-duration="900"
        data-aos-easing="ease-in-out-sine"
        className=" z-[1] w-[120px] h[120px] md:w-[180px] md:h-[180px] lg:w-[400px] lg:h[400px] top-[30%] right-[-35%] absolute md:top-[40%] md:right-[-40%]"
      >
        <img
          data-depth="0.6"
          src="cloud2.svg"
          alt="cloud"
          className="w-full "
        />
      </div>
      <div
        id="cloud4"
        data-aos="fade-left"
        data-aos-duration="800"
        data-aos-easing="ease-in-out-sine"
        className=" z-[1] w-[120px] h[120px] md:w-[180px] md:h-[180px] lg:w-[400px] lg:h[400px] top-[75%] left-[-10%] absolute md:top-[60%] mf:left-[-20%]"
      >
        <img data-depth="0.5" src="cloud2.svg" alt="cloud" className="w-full" />
      </div>

      <div
        id="moon"
        data-aos="fade-left"
        data-aos-duration="600"
        data-aos-easing="ease-in-out-sine"
        className=" max-[640px]:w-[100%] md:w-[70%] md:h-[70%] absolute md:right-0  rounded-full  "
      >
        <img
          data-depth="0.2"
          src="moon.svg"
          alt="moon"
          className=" shadow-xl shadow-white rounded-full "
        />
      </div>
    </>
  );
};

export default Moon;
