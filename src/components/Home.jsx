import React from "react";
import HeroImage from "../assets/heroImage2.png";
import { TbArrowRight } from "react-icons/tb";
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-slate-800 to-slate-300 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-5 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl sm:text-7xl font-bold text-white">
            I am a Full Stack Developer
          </h1>
          <p className="py-5 max-w-md">
            I have 1 year of experience developing web app, designing software,
            1 year of SEO and more then 10 years of Garphi designing. Currently,
            I love to work on web developing and programming using technology
            like HTML, CSS, JavaScript, React, Tailwind, Node JS, Python,
            Django, SQL and other.
          </p>
          <div>
            <Link to="about" smooth onDurationChange={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-600 to-blue-600 cursor-pointer">
              About
              <span className="group-hover:rotate-90 duration-200">
                <TbArrowRight size={25} className="ml-2" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="My Profile"
            className="rounded-3xl mx-5
        w-2/3 md:w-full"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
