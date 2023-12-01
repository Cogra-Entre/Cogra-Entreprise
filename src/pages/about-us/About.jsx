import React from "react";



import Footer from "../../components/footer/footer";
import { team_members } from "./../../helpers/team.helpers";

import Chicks from "./../../assets/about/chicks.png";
import arrow from "./../../assets/about/arrow.png";

export default function About() {
  return (
    <div className="mt-[15em]">
      <div className="flex justify-center items-center gap-[4em] py-[2em] mobile:flex-col-reverse mobile:px-4">
        <img src={Chicks} alt={Chicks} />

        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-3xl">About Cogra Entreprise</h1>
          <h3 className="font-bold text-xl italic">
            Delivering 1 week old chicks
          </h3>

          <span>
            Looking for healthy one-week-old chicks? <br /> Look no further than{" "}
            <span className="font-bold italic">Cogra Entreprise! </span>
            We <br /> prioritize the well-being of you and your
            <br />
            family. At Cogra, we take pride in our <br /> commitment to health
            and transparency.
          </span>

          <span>
            Our chicks are raised with care, and we <br /> ensure their health
            by preparing our own <br /> chicken feeds at home. We believe in a
            <br />
            natural approach, avoiding the use of growth <br /> hormones or
            unnecessary medications on <br /> our farm. Additionally, our
            farming process is open <br /> to scrutiny, allowing our clients to
            see <br />
            firsthand the quality and dedication <br /> that goes into raising
            our chicks.
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center bg-[red] text-white py-[3em]">
        <span className="mobile:text-sm mobile:px-3">
          Choose Cogra Entreprise for a healthier start to your poultry farming
          journey. Your family's well-being is our priority!
        </span>
      </div>
      {/* Core values */}
      <div className="flex flex-col my-[8em] items-baseline gap-4 mobile:ml-[-7em] mobile:my-[3em]">
        <span className="text-2xl">Core values</span>

        <div className="flex flex-wrap gap-[3em] px-[1em] ml-[8em] mobile:gap-[1em]">
          <div className="flex gap-3">
            <img src={arrow} alt={arrow} className="w-10 h-5" />
            <span>
              Growth: We strive to improve the lives not only of our team but{" "}
              <br />
              also our clients. We keep breaking boundaries and looking for{" "}
              <br /> ways to improve.
            </span>
          </div>

          <div className="flex gap-3">
            <img src={arrow} alt={arrow} className="w-10 h-4" />
            <span>
              Customer focus: No matter the problem or the time, we are <br />{" "}
              always committed to serving our clients
            </span>
          </div>

          <div className="flex gap-3">
            <img src={arrow} alt={arrow} className="w-10 h-4" />
            <span>
              Integrity: For us, integrity is absolute. You either have it or
              you <br /> don't. We do
            </span>
          </div>
        </div>
      </div>
      {/* The team */}
      <div className="flex flex-col justify-center items-center py-[3em]">
        <span className="font-bold text-3xl mb-9">The Team</span>
        <div className="grid grid-cols-3 gap-[2.5em] mobile:grid-cols-2 mobile:gap-[1em] mobile:px-6">
          {team_members.map((member, index) => {
            return (
              <div key={index} className="flex flex-col">
                <img
                  src={member.image}
                  alt={member.image}
                  className="w-[400px]"
                />
                <span className="font-bold">{member.role}</span>
                <span>{member.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
