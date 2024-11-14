import logo from "../assets/CH.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-19 flex items-center justify-between py-6">
      {/* Logo with hover effect and click to reload */}
      <div className="flex flex-shrink-0 items-center">
        <a
          href="/"
          className="transition-transform transform hover:scale-125 hover:text-gray-600"
        >
          <img className="mx-3 w-16 mt-2" src={logo} alt="logo" />
        </a>
      </div>

      {/* Social icons with hover effects */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/conrad-hsu-772b84220/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-125 hover:text-gray-600"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/ConradHsu"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-125 hover:text-gray-600"
        >
          <FaGithub />
        </a>
        <a
          href="https://scholar.google.com/citations?user=uG-EZR4AAAAJ"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-125 hover:text-gray-600"
        >
          <FaGoogleScholar />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
