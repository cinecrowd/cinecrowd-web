import React from 'react'
import { TbFlame } from "react-icons/tb";

const Hero = () => {
  return (
    <section className="pt-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h1 className="mt-4 text-4xl font-bold text-white lg:mt-8 sm:text-6xl xl:text-8xl">
              Empower Films with Fan Tokens
            </h1>
            <p className="mt-4 text-base text-gray-500 lg:mt-8 sm:text-xl">CineCrowd is a groundbreaking
              Bitcoin-based platform that empowers fans to support and influence their favorite films
              through valuable fan tokens. We bridge the gap between Bitcoin enthusiasts and visual
              artists, fostering a new era of artistic expression and funding.
            </p>
            <br />
            <div className="flex gap-4">
              <a
                href="https://app.cinecrowd.xyz"
                className="group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-2 align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed text-white bg-orange-500 hover:bg-orange-600 h-[38px] min-w-[38px] gap-2 disabled:bg-slate-100 disabled:stroke-slate-400 disabled:text-slate-400 disabled:hover:bg-slate-100 px-4"
              >
                <span>Join Waitlist</span>
                <TbFlame size={23} />
              </a>
              {/* <button type="button"
                    className="group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-2 align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed stroke-[#E0822D] px-2 text-[#E0822D] h-[42px] min-w-[42px] gap-2 disabled:stroke-slate-400 disabled:text-slate-400 hover:stroke-blue-950 hover:text-blue-950">
                    <span>Learn More</span>
                    <LuChevronRightCircle />
                  </button> */}
            </div>
          </div>

          <div>
            <img className="w-full" src="/images/collect-illustration.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="px-4 py-10 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
        <span className="font-semibold text-gray-400 uppercase">Powered by</span>
        <div className="flex justify-center items-center text-gray-500 ">
          <a
            href="https://www.btcstartuplab.com/"
            target="_blank"
            className="flex justify-center items-center">
            <img src="/images/btcsl.webp" alt="Bitcoin Startup Lab logo" className="h-11" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero