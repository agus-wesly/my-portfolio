import menu from "../assets/menu 1.svg";
import close from "../assets/close.svg";
import { navItems } from "../constant";
import { useState, useEffect } from "react";

const Navbar = ({ toggle, setToggle, headingRef, projectRef, talkRef, skillRef }) => {
  const [render, setRender] = useState(false);
  const handleNavClick = (ref) => {
    if (ref) {
      window.scrollTo({
        top: ref.offsetTop - 80,
        left: 0,
        behavior: "smooth",
      });
      setToggle(false);
    }
  };

  const handleNavLg = (ref) => {
    if (ref) {
      window.scrollTo({
        top: ref.offsetTop - 80,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    setRender(true);
  }, [headingRef, projectRef, talkRef, skillRef]);

  return (
    <div>
      <div className={`flex text-secondary justify-between items-center fixed w-full top-0 left-0 px-6 pt-3 pb-1 lg:px-16 lg:pt-8 lg:pb-5 bg-secondary/1 backdrop-blur-[4px] z-[5]`}>
        <h1 className="text-nl lg:text-[28px] text-secondary font-bold">AG</h1>
        <button onClick={() => setToggle((prev) => !prev)} className="grid lg:hidden place-items-center w-12 h-12">
          <span className="w-full flex justify-end">
            <img src={menu} alt="menu" className="object-cover" />
          </span>
        </button>
        <div className={`bg-primary lg:hidden ${toggle ? "translate-x-0" : "translate-x-full"} fixed z-[5] px-12 py-10 h-[100vh] w-[70%] right-0 top-0 flex flex-col transition-all duration-500 shadow-lg shadow-black`}>
          <span className="w-full flex justify-end cursor-pointer" onClick={() => setToggle(false)}>
            <img src={close} alt="close" className="w-6 h-6 object-cover" />
          </span>
          <div className="text-center mt-5 mb-8 h-full justify-start pt-14 gap-8 flex flex-col items-center">
            <h1 className="text-center text-lg text-white font-extrabold relative self-center after:content-[''] after:w-full after:absolute after:h-1 after:bg-secondary after:-bottom-1 after:left-0 mb-3">Menu</h1>
            {navItems.map((item, i) => {
              let currRef;
              i === 0 ? (currRef = headingRef?.current) : i === 1 ? (currRef = skillRef?.current) : i === 2 ? (currRef = projectRef?.current) : (currRef = talkRef?.current);
              return (
                <span onClick={() => handleNavClick(currRef)} className="text-nl font-nl cursor-pointer text-secondary" key={i}>
                  {item}
                </span>
              );
            })}
          </div>
        </div>
        <div className="hidden lg:flex flex-1 justify-end gap-10 items-center">
          {navItems.map((item, i) => {
            let currRef;
            i === 0 ? (currRef = headingRef?.current) : i === 1 ? (currRef = skillRef?.current) : i === 2 ? (currRef = projectRef?.current) : (currRef = talkRef?.current);
            console.log(currRef);
            return (
              <span onClick={() => handleNavLg(currRef)} className="text-nl font-semibold cursor-pointer text-whiteblue hover:text-secondary transition duration-500" key={i}>
                {item}
              </span>
            );
          })}
        </div>
      </div>

      <div className={`lg:hidden ${toggle ? " backdrop-blur-sm bg-white/5" : "bg-transparent pointer-events-none"}  fixed z-[4] transition-all duration-500 w-[100%] left-0 top-0 h-screen`}></div>
      <div className="absolute w-[308px] h-[342px] bg-whiteblue/50 left-[5%] blur-[128px] -top-48 rounded-full"></div>
      <div className="absolute w-[408px] h-[442px] bg-secondary/20 -right-48 blur-[128px] top-48 rounded-full"></div>
      <div className="absolute w-[408px] h-[442px] bg-secondary/20 -right-48 blur-[128px] bottom-[25%] rounded-full"></div>
    </div>
  );
};

export default Navbar;
