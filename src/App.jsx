import React from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import "./App.css";

import LandingFirst from "./assets/landing/landingFirst.jpeg";

export default function App() {
  return (
    <div className="mt-[15em] py-[2em]">
      <div className="top-home">
        <img
          src={LandingFirst}
          alt=""
          className="w-full h-[900px] object-cover"
        />
        <div className="sub-div">
          <h3>Farm to Farm</h3>
          <span>Order 1 week old chick today</span>
          <a
            className="bg-[#0f0] w-[100px] rounded-md py-1 px-2 outline-none"
            href="https://wa.me/+254704412004"
          >
            Order Now
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
