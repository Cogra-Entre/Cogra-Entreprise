import React from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import "./App.css";

import LandingFirst from "./assets/landing/landingFirst.jpeg";
import LandingChicks from "./assets/landing/landingChicks.png";
import chick from "./assets/landing/chick.png";

export default function App() {
  const funFacts = [
    "Baby Chicks Have Stronger Vision Than That of Humans",
    "Baby chicks are the closest existing birds to dinosaur T. Rex",
    "Baby Chicks Can Recognize Their Mother’s Voice",
    "Baby Chicks Have an Egg Tooth",
  ];
  return (
    <div className="mt-[15em]">
      <div className="top-home">
        <img
          src={LandingFirst}
          alt=""
          className="w-full h-[700px] object-cover"
        />
        <div className="sub-div">
          <h3>Farm to Farm</h3>
          <span>Order 1 week old chick today</span>
          <a
            className="bg-[#0f0] w-[100px] rounded-md py-1 px-2 outline-none text-white no-underline"
            href="https://wa.me/+254704412004"
          >
            Order Now
          </a>
        </div>
      </div>

      <div className="flex justify-center items-center py-[5em] gap-[5em] mobile:flex-col mobile:px-[15px]">
        <div className="flex flex-col gap-[10px] text-xl">
          <h1 className="font-bold text-4xl">Cogra Entreprise</h1>
          <span>
            <span className="font-bold">Cogra Entreprise </span>
            Farm is a company involved in chick production
            <br /> and ensures customer satisfaction by exceeding our client’s
            <br /> expectations in regard to production of the high quality
            clean, well <br /> sized and healthy 1 week old chicks.
          </span>

          <span>
            We are a fast growing poultry layer farm and we enjoy the reputation
            <br />
            in the market place as providers of healthy chicks with consistent
            <br />
            quality and applying robust scientific management practices coupled
            <br />
            with state-of the art technology.
          </span>
        </div>
        <img src={LandingChicks} alt={LandingChicks} />
      </div>

      {/* Fun fact */}
      <div className="flex flex-col justify-center items-center gap-3  mobile:px-[15px]">
        <h1 className="font-bold text-xl">Fun Facts</h1>

        <div className="flex gap-[2em] mobile:flex-col-reverse mobile:gap-[20px]">
          <img src={chick} alt={chick} className="w-[600px]" />

          <div className="flex flex-col gap-1 mt-[5em] mobile:mt-[1em]">
            {funFacts.map((fact) => (
              <span key={fact}>{fact}</span>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
