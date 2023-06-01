import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(true);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* hamburger icon */}
      <div
        className="mt-[2rem] ml-[10vw] flex flex-col gap-[1vw] relative z-20 md:hidden"
        onClick={toggle}
      >
        <div
          className={`duration-500 bg-black w-[5vw] h-[0.2rem] ${
            open ? "rotate-0" : "rotate-45 translate-y-2"
          }`}
        ></div>
        <div
          className={`duration-500 bg-black w-[5vw] h-[0.2rem] ${
            open ? "opacity-100" : "opacity-0"
          }`}
        ></div>
        <div
          className={`duration-500 bg-black w-[5vw] h-[0.2rem] ${
            open ? "rotate-0" : "-rotate-45 -translate-y-[0.4rem]"
          }`}
        ></div>
      </div>

      {/* menu */}
      <ul
        className={`duration-500 bg-sky-50 lg:w-[18vw] absolute w-[70vw] md:w-[20vw] xl:w-[15vw] h-screen top-0 flex flex-col gap-[5vw] text-[1.5rem] z-10 md:border md:border-slate-300 md:shadow-md md:justify-start md:items-start ${
          open ? "-translate-x-[100vw] md:translate-x-0" : "translate-x-0"
        }`}
      >
        <div className="md:flex md:flex-col md:items-center">
          <div className="hidden md:flex md:ml-[3vw] xl:ml-0">
            <h2 className="mt-[5vh] text-blue-700">
              React <span className="text-blue-500 text-[0.9rem]">Go</span>
            </h2>
          </div>
          <div className="md:text-[0.8rem] md:mt-[5vh] md:flex md:flex-col md:gap-3 w-[10vw] md:ml-[1vw] ml-[15vw] lg:ml-[4vw] xl:ml-[3vw] mt-[15vh]">
            <Link to="/">
              <li className="md:rounded-md md:pl-[1vw] md:hover:bg-sky-200 md:cursor-pointer md:hover:text-sky-700 w-[17vw] md:w-[10vw] lg:w-[9vw] xl:w-[7vw]">
                Users
              </li>
            </Link>
            <Link to="/addstudent">
              <li className="md:rounded-md md:pl-[1vw] md:hover:bg-sky-200 md:cursor-pointer md:hover:text-sky-700 w-[31vw] md:w-[10vw] lg:w-[9vw] xl:w-[7vw]">
                Add users
              </li>
            </Link>
          </div>
        </div>
      </ul>
    </>
  );
};

export default Navbar;
