import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center -mt-52">
      <h1 className="text-6xl lg:text-8xl font-bold tracking-tight text-neutral-300">
        Hello. I am
      </h1>
      <h2 className="text-6xl lg:text-8xl font-bold tracking-tight text-neutral-300">
        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">
          <Typewriter
            words={["Conrad Hsu", "a developer", "an AI Researcher", "a tennis player", "food enthusiast, nature lover, and cyclist"]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={80}
            delaySpeed={2000}
          />
        </span>
      </h2>
    </div>
  );
};

export default Hero;




  

  