// components/main-section.tsx
"use client"

import React from "react"
import { TypeAnimation } from "react-type-animation"
import { FiArrowDownCircle } from 'react-icons/fi'
import Image from "next/image"
import SocialIcons from "./social-icons"

const MainSection = () => {
  return (
    <div id="main" className="relative w-full h-screen">
      <div className="absolute inset-0 scale-x-[-1] z-0">
        <Image
          src="/images/pic1.jpg"
          alt="background"
          fill
          priority
          className="object-cover object-left"
        />
      </div>
      
      <div className="absolute inset-0 bg-background/50 dark:bg-background/70 z-10">
        <div className="max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center px-4 animate-slideUp">
          <h1 className="sm:text-5xl text-4xl font-bold text-foreground">
            I'm Fredie Nyandiek
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-foreground">
            I'm a
            <TypeAnimation
              sequence={[
                "Junior Software Developer",
                2000,
                "Creative Designer",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1em",
                display: "inline-block",
                paddingLeft: "5px",
              }}
              repeat={Infinity}
            />
          </h2>
          
          <SocialIcons />
          
          <div className="flex justify-center sm:block">
            <a
              download="Fredie Nyandiek CV"
              href="/files/Fredie Nyandiek CV.pdf"
              className="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-primary rounded-lg py-2.5 sm:py-3 shadow-lg text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Download Resume"
            >
              <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-lg font-medium">
                Download CV
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSection