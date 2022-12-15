import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/reactImage.png";
import Python from "../assets/Python.png";
import Django1 from "../assets/Django1.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import Boostrap from '../assets/Boostrap.png'

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: reactImage,
      title: 'React',
      style: 'shadow-blue-600',
    },
    {
      id: 5,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400',
    },
    {
      id: 6,
      src: Python,
      title: 'Python',
      style: 'shadow-yellow-400',
    },
    {
      id: 7,
      src: Django1,
      title: 'Django',
      style: 'shadow-green-800',
    },
    {
      id: 8,
      src: github,
      title: 'GitHub',
      style: 'shadow-gray-400',
    },
    {
      id: 9,
      src: Boostrap,
      title: 'Boostrap',
      style: 'shadow-purple-600',
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-slate-800 to-slate-300 w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <h1 className="text-4xl font-bold border-b-4 border-white p-2 inline">
            Experience
          </h1>
          <p className="py-6 text-xl">
            There are the technologies I've worked with.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({id, src, title, style}) =>(
          <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img src={src} alt="" className="w-20 mx-auto" />
            <p className="mt-4">{title}</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;