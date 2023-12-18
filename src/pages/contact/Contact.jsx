import { IconMail, IconPhoneCall, IconMapPin } from "@tabler/icons-react";
import React from "react";

export default function Contact() {
  const icon_data = [
    {
      icon: <IconMail size={60} />,
      text: "Cogra@gmail.com",
    },
    {
      icon: <IconPhoneCall size={60} />,
      text: "+254763000000",
    },
    {
      icon: <IconMapPin size={60} />,
      text: "Kirinyaga County",
    },
  ];
  return (
    <div className="flex w-[100vw] justify-center items-start gap-[4em] px-[3em] mt-[17em]">
      <div className="flex flex-col ">
        <h1>CONTACT US</h1>
        <div className="flex flex-col justify-center items-center">
          <span>Provide quality breeding stock to</span>
          <span>women and youth</span>
        </div>

        <div>
          {icon_data.map((item, index) => {
            return (
              <div className="flex gap-7 items-center" key={index}>
                {item.icon}
                <span className="text-2xl">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      <form
        target="_blank"
        action="https://formsubmit.co/ceoian848@gmail.com"
        method="POST"
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col gap-3">
          <div>
            <div className="flex flex-col">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                className="border-2 border-black mt-4 rounded"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label>Phone Number</label>
              <input
                type="number"
                name="Phone Number"
                className="border-2 border-black mt-4 rounded"
                placeholder="Enter Phone Number"
                required
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label>Message</label>
          <textarea
            placeholder="Your Message"
            className="border-2 border-black mt-4 rounded"
            name="message"
            rows="10"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[blue] text-white rounded-md outline-none py-2 px-4"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
}
