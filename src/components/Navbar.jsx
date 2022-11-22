import menu from "../assets/menu 1.svg";
import close from "../assets/close.svg";
import { navItems } from "../constant";

const Navbar = ({ toggle, setToggle }) => {
  return (
    <div>
      <div className={`flex text-secondary justify-between items-center fixed w-full top-0 left-0 px-6 pt-3 pb-1 bg-secondary/1 backdrop-blur-[4px] z-[5]`}>
        <h1 className="text-nl text-secondary font-bold">AG</h1>
        <button onClick={() => setToggle((prev) => !prev)} className="grid lg:hidden place-items-center w-12 h-12">
          <span className="w-full">
            <img src={menu} alt="menu" className="object-cover" />
          </span>
        </button>
        <div className={`bg-primary ${toggle ? "translate-x-0" : "translate-x-full"} fixed z-[5] px-12 py-10 h-[100vh] w-[70%] right-0 top-0 flex flex-col transition-all shadow-lg shadow-black`}>
          <span className="w-full flex justify-end cursor-pointer" onClick={() => setToggle(false)}>
            <img src={close} alt="close" className="w-6 h-6 object-cover" />
          </span>
          <div className="text-center mt-5 mb-8 h-full justify-start pt-14 gap-8 flex flex-col items-center">
            {navItems.map((item) => (
              <span className="text-nl font-nl cursor-pointer text-secondary">{item}</span>
            ))}
          </div>
        </div>
        <div className="absolute w-[408px] h-[442px] bg-secondary/5 blur-[200px] -right-[95%] bottom-[25%] rounded-full"></div>
        <div className="absolute w-[308px] h-[342px] bg-whiteblue/50 blur-[200px] left-[5%] -top-[10%] rounded-full"></div>
      </div>
      <div className={` ${toggle ? " backdrop-blur-sm bg-white/5" : "bg-transparent pointer-events-none"}  fixed z-[4] transition-all w-[30%] left-0 top-0 h-screen`}></div>
    </div>
  );
};

export default Navbar;
