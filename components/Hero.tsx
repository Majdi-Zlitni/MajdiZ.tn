import { FaLocationArrow } from "react-icons/fa";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { images } from "../data/index";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="pb-20 pt-10">
      <div>
        <Spotlight
          className="-top-10 -left-10 md:left-32 md:top-20 h-screen"
          fill="white"
        ></Spotlight>
        <Spotlight
          className="-top-10 -left-full h-[80vh] w-[50vw]"
          fill="purple"
        ></Spotlight>
        <Spotlight
          className="-top-28 -left-80 h-[80vh] w-[50vw]"
          fill="blue"
        ></Spotlight>
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.08] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-10 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/*<h2 className="upercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic With Next.js
          </h2> */}
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Ideas into Seamless Experiences"
          ></TextGenerateEffect>
          <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mt-4">
            <Image
              src={images.profile}
              alt="Majdi Zlitni"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />{" "}
          </div>
          <div className="my-4"></div>
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi I&apos;m Majdi Zlitni, a Software
            Developer based in Tunisia{" "}
          </p>
          <a href="https://github.com/Majdi-Zlitni?tab=repositories">
            <MagicButton
              title="My Projects"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
