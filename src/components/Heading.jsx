import { Github, Facebook, Instagram } from "./index";

const Heading = ({ headingRef, talkRef }) => {
  // const handleNavClick = (ref) => {
  //   window.scrollTo({
  //     top: ref.offsetTop - 80,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  //   setToggle(false);
  // };
  return (
    <div ref={headingRef} className="w-full my-[5rem] lg:my-24 flex flex-col gap-8  text-left relative -z-[0] ">
      <h5 className="text-secondary tracking-widest font-thin lg:font-[200]   lg:text-nl lg:tracking-[15%]">Hi, my name is </h5>
      <h1 className="text-3xl lg:text-[64px] font-extrabold self-start leading-normal lg:leading-[120%] animation-delay-200 opacity-1   relative text-whiteblue after:content-[''] after:absolute after:h-[3px] lg:after:h-[110%] after:w-[173px] lg:after:w-[61%] lg:after:opacity-[0.25] lg:after:right-0 lg:after:-bottom-[5%] lg:after:z-[-9] z-[1] after:z-[1] after:bg-secondary after:bottom-0 after:right-0 after:translate-y-2 lg:self-auto">
        Agustinus <br /> Wesly Sitanggang.
      </h1>
      <p className="text-whiteblue font-normal   animation-delay-400 opacity-1 lg:max-w-[600px] lg:font-[400] lg:leading-[28px] lg:text-[18px] lg:pt-4 pb-3 lg:text-whiteblue/60">
        I’m an Informatics Engineering student in UNIKOM Bandung. My interest is to become a <span className="text-secondary">fullstackweb developer.</span> I believe through constant practicing, I will achieve my dream.
      </p>
      <button
        onClick={() => handleNavClick(talkRef?.current)}
        className="px-2 py-3 rounded-sm ring-1 w-[155px]   opacity-1 animation-delay-600 ring-secondary text-secondary flex items-center gap-5 lg:w-[220px] lg:justify-evenly lg:px-0 lg:text-[18px] lg:hover:bg-secondary/10 transition duration-300"
      >
        Contact Me <span className="text-lg">&#8594;</span>
      </button>
      <div className="flex-col justify-center items-center gap-8 fixed bottom-0 left-16 hidden lg:flex">
        <a href="https://github.com/agustforbussines" target="_blank">
          <Github />
        </a>
        <a href="https://www.instagram.com/agus_wesly/" target="_blank">
          <Instagram />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100073246676666" target="_blank">
          <Facebook />
        </a>
        <div className="w-[2px] h-28 bg-whiteblue"></div>
      </div>
    </div>
  );
};

export default Heading;
