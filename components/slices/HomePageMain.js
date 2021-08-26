import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/outline'


const HomePageMain = ({ slice }) => (
  <section className="section h-screen">
    <div className="box h-3/4 w-full pt-12 content-evenly justify-center lg:grid lg:grid-rows-3 lg:grid-flow-col lg:gap-6 lg:items-center lg:pt-16">
      <h1 className="text-4xl font-bold text-center uppercase lg:w-4/5 lg:row-span-2 lg:col-span-1 lg:text-8xl lg:text-left">{slice.primary.heading}</h1>
      <p className="text-center text-2xl lg:col-span-1 lg:text-left lg:w-4/5">{slice.primary.description}</p>
      <div className="w-full flex flex-row justify-evenly lg:row-span-3 lg:h-3/4 lg:pr-32 lg:flex-col lg:justify-between">
            <a href={slice.primary.icon1[0].linkTo.url}>
                 <img
                    className="h-16 w-auto lg:w-28 lg:h-28 cursor-pointer transition duration-700 ease-in-out transform hover:scale-105"
                    src={slice.primary.icon1[0].url}
                    alt={slice.primary.icon1[0].alt}
                  />
            </a>
            <a href={slice.primary.icon2[0].linkTo.url}>
                  <img
                    className="h-16 w-auto lg:w-28 lg:h-28 cursor-pointer transition duration-700 ease-in-out transform hover:scale-105"
                    src={slice.primary.icon2[0].url}
                    alt={slice.primary.icon2[0].alt}
                  />
            </a>
            <a href={slice.primary.icon3[0].linkTo.url}>
                  <img
                    className="h-16 w-auto lg:w-28 lg:h-28 cursor-pointer transition duration-700 ease-in-out transform hover:scale-105"
                    src={slice.primary.icon3[0].url}
                    alt={slice.primary.icon3[0].alt}
                  />
            </a>
      </div>
    </div>
    <div className="box w-full flex-col">
    <p className="text-center text-txc">{slice.primary.help_text}</p>
    <ChevronDownIcon className="animate-bounce block h-6 w-6 mx-auto mt-4 text-txc-red" aria-hidden="true" />
    </div>
  </section>
);

export default HomePageMain;