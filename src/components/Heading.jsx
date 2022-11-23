const Heading = ({ headingRef }) => {
  return (
    <div ref={headingRef} className="w-full my-[5rem] flex flex-col gap-8 text-left relative -z-[0] animate-slide">
      <h5 className="text-secondary tracking-widest font-thin">Hi, my name is </h5>
      <h1 className="text-3xl font-extrabold self-start leading-normal relative text-whiteblue after:content-[''] after:absolute after:h-[3px] after:w-[173px] z-[1] after:z-[1] after:bg-secondary after:bottom-0 after:right-0 after:translate-y-2">
        Agustinus <br /> Wesly Sitanggang.
      </h1>
      <p className="text-whiteblue font-normal ">
        I’m an Informatics Engineering student in UNIKOM Bandung. My interest is to become a <span className="text-secondary">fullstackweb developer.</span> I believe through constant practicing, I will achieve my dream.
      </p>
      <button className="px-2 py-3 rounded-sm ring-2 w-[155px] ring-secondary text-secondary flex items-center gap-5">
        Contact Me <span className="text-nl">&#8594;</span>
      </button>
    </div>
  );
};

export default Heading;
