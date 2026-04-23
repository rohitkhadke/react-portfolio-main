import logo from "../assets/rk.jpg";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/rohit-khadke-8990b9246
"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin className="hover:text-blue-500 cursor-pointer" />
        </a>
        <a
          href="https://github.com/rohitkhadke"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <FaGithub className="hover:text-gray-500 cursor-pointer" />
        </a>
        <a
          href="https://www.instagram.com/mr.rohit_khadke_4"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <FaInstagram className="hover:text-pink-500 cursor-pointer" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
