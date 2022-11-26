import { useEffect } from "react";
const SkillCard = ({ entry, reff, icon, title, text, idx }) => {
  useEffect(() => {
    if (entry?.isIntersecting) {
      entry.target.classList.add("animate-slide");
    }
  }, [entry, reff]);

  return (
    <div
      ref={reff}
      className={`bg-darkblue min-h-[280px] lg:h-full gap-7 my-5 lg:my-0 border-secondary border-[0.5px] py-8 px-5 lg:px-8 rounded-sm lg:w-full h-full flex flex-col opacity-0 self-center ${
        idx === 3 ? "col-span-2 lg:justify-evenly lg:h-full lg:flex-row lg:items-center" : idx === 2 ? "row-span-2 gap-10 lg:justify-start lg:h-full" : "justify-between"
      }`}
    >
      <img loading="lazy" src={icon} alt="icon" className={`h-24 lg:h-32 object-contain ${idx === 3 ? "w-[50%] lg:w-[40%]" : "w-16 lg:w-24"}`} />
      <div className="flex flex-col gap-7 lg:gap-9">
        <h3 className="text-xl lg:text-[30px] font-bold text-whiteblue leading-[10px] lg:leading-none">{title}</h3>
        <p className={`text-nl font-normal text-left leading-7 text-whiteblue ${idx === 3 ? "min-h-auto" : "min-h-[168px]"}`}>{text}</p>
      </div>
    </div>
  );
};

export default SkillCard;
