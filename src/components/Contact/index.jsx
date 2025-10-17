import React, { useRef, useState } from "react";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { GiTireIronCross } from "react-icons/gi";

const ContactUs = () => {
  const [messageLoading, setMessageLoading] = useState(false);
  const [messageSend, setMessageSend] = useState(false);
  const [onError, setOnError] = useState(false);

  const form = useRef();

  const getintouch = async (e) => {
    e.preventDefault();
    setOnError(false);

    const formData = new FormData(form.current);
    if (!form.current.checkValidity()) {
      form.current.reportValidity(); // Show the default browser error UI
      return;
    }
    const name = form.current.name.value;
    const email = form.current.email.value;

    const message = form.current.message.value;
    setMessageLoading(true);

    if (!name || !email) {
      setMessageLoading(false);
      setMessageSend(false);
      return;
    }
    // import.meta.env.VITE_GOOGLE_SHEET_URL
    try {
      const res = await fetch("/.netlify/functions/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.current.name.value,
          email: form.current.email.value,
          message: form.current.message.value,
        }),
        redirect: "follow",
      });

      const data = await res.json();
      console.log("Response Data: ", data);
      if (data.success == true) {
        setMessageSend(true);
        setTimeout(() => {
          setMessageSend(false);
          form.current.reset(); // ✅ this will clear the form
        }, 2000);
      } else {
        throw new Error("Failed to send");
      }
    } catch (err) {
      setOnError(true);
    } finally {
      setMessageLoading(false);
    }
  };

  return (
    <>
      <form
        ref={form}
        onSubmit={getintouch}
        className=" absolute left-[-28%] min-[410px]:left-[-38%] top-[-40%] md:top-11 md:left-[15%] lg:left-[25%] md:w-[500px] md:h-[500px]  flex flex-col justify-center items-center gap-5 md:gap-7"
      >
        {messageSend && (
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-easing="ease-in-out-sine"
            className="p-2 bg-green-500 absolute -top-9 sm:top-3 w-full text-center font-semibold rounded-md"
          >
            Message Sent Successfully
          </div>
        )}

        <div className="flex flex-col gap-2 w-[300px] min-[410px]:w-[320px]  md:w-full">
          <label className="text-white">Name :</label>
          <input
            className=" text-[#c5c5c5] bg-black rounded-md h-[40px] px-3 py-2 border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            type="text"
            placeholder="Your name"
            name="name"
            id="name"
            required
          />
        </div>

        <div className="flex flex-col gap-2  w-full  relative">
          <label className="text-white">Email :</label>
          <input
            className="peer text-[#c5c5c5] bg-black rounded-md h-[40px] px-3 py-2 border border-slate-300
             focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
             focus:invalid:border-red-800 focus:invalid:ring-red-800"
            type="email"
            placeholder="Email Address"
            name="email"
            id="email"
            required
          />
          <p className="absolute bottom-[-22px] mt-1 invisible peer-invalid:peer-focus:visible text-red-500 text-sm">
            Please provide a valid email address.
          </p>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label className="text-white">Message :</label>
          <textarea
            placeholder="Message"
            className="text-[#c5c5c5] bg-black rounded-md h-[60px] px-3 py-2 border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            name="message"
            id="message"
          />
        </div>

        <button
          type="submit"
          onClick={getintouch}
          className={`p-1 bg-[#ffffff] rounded-md flex w-[100px] h-[40px] justify-center items-center gap-2 outline  mt-4`}
        >
          <h1 className="text-[22px] text-[#000000]">
            {messageLoading ? (
              <AiOutlineLoading3Quarters className="animate-spin h-[30px] w-[30px]" />
            ) : onError ? (
              <GiTireIronCross className=" h-[30px] w-[30px] text-red-900 " />
            ) : messageSend ? (
              <IoCheckmarkDoneOutline className=" h-[30px] w-[30px] text-green-800 " />
            ) : (
              "Send"
            )}
          </h1>
        </button>
      </form>
    </>
  );
};

export default ContactUs;
