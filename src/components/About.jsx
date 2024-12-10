import logoImg from "../assets/CH.jpg";
import { ABOUT_TEXT_1, ABOUT_TEXT_2 } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-left text-7xl font-bold tracking-tight text-white">
        About{" "}
        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">
          Me
        </span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center lg:justify-start">
            <img className="rounded-2xl" src={logoImg} alt="logo" />
          </div>   
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-xl font-bold text-white tracking-tight">
              {ABOUT_TEXT_1}
            </p>
            <p className="my-2 max-w-xl py-6 text-xl font-bold text-white tracking-tight">
              {ABOUT_TEXT_2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
