import { useEffect } from "react";
const SkillCard = ({ entry, reff, icon, title, text, idx }) => {
  useEffect(() => {
    // console.log(entry);
    if (entry?.isIntersecting) {
      entry.target.classList.add("animate-slide");
    }
  }, [entry, reff]);

  return (
    <div ref={reff} className={`bg-darkblue min-h-[280px] gap-7 my-5 border-secondary border-[0.5px] py-8 px-5 rounded-sm flex flex-col opacity-0 justify-between self-center`}>
      <img loading="lazy" src={icon} alt="icon" className={` h-16 object-contain ${idx === 3 ? "w-[50%]" : "w-16"}`} />
      <h3 className="text-xl font-bold text-whiteblue leading-[10px]">{title}</h3>
      <p className="text-nl font-normal text-left leading-7 text-whiteblue">{text}</p>
    </div>
  );
};

export default SkillCard;
