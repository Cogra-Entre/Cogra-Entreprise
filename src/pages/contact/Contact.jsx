import { IconMail, IconPhoneCall, IconMapPin } from "@tabler/icons-react";
import React from "react";
import Footer from "../../components/footer/footer";

export default function Contact() {
  const icon_data = [
    {
      icon: <IconMail size={38} />,
      text: (
        <a
          className="text-2xl text-white mobile:text-[20px]"
          target="_blank"
          href="mailto:kian99564@gmail.com"
        >
          cogra@gmail.com
        </a>
      ),
    },
    {
      icon: <IconPhoneCall size={38} />,
      text: (
        <a
          className="text-2xl text-white mobile:text-[20px]"
          target="_blank"
          href="https://wa.me/+254728437459"
        >
          +254 728 437459
        </a>
      ),
    },
    {
      icon: <IconMapPin size={38} />,
      text: <span>Kirinyaga County</span>,
    },
  ];
  return (
    <>
      <div className="flex w-[100vw] justify-center items-start gap-[4em] p-[3em] mt-[15em] bg-[red] text-[white] mobile:flex-col mobile:text-md mobile:px-[1.5em]">
        <div className="flex flex-col gap-5">
          <h1 className="text-[40px] mobile:text-[25px]">CONTACT US</h1>
          <span className="flex flex-col justify-center items-center text-[24px] mobile:text-[20px]">
            Provide quality breeding stock to women and youth
          </span>

          <div>
            {icon_data.map((item, index) => {
              return (
                <div className="flex gap-7 items-center" key={index}>
                  {item.icon}
                  {item.text}
                </div>
              );
            })}
          </div>
        </div>

        <form
          target="_blank"
          action="https://formsubmit.co/ceoian848@gmail.com"
          method="POST"
          className="flex flex-col w-[30vw] gap-5 bg-[#D9D9D9] text-black placeholder:text-black placeholder:px-3 p-[3em] rounded-md mobile:w-[100%]"
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
      <Footer />
    </>
  );
}
