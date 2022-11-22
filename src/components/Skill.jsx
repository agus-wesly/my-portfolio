import { skillItems } from "../constant";

const SkillCard = ({ icon, title, text, idx }) => (
  <div className="bg-darkblue min-h-[280px] gap-7 my-5 border-secondary border-[0.5px] py-8 px-5 rounded-sm flex flex-col justify-between self-center">
    <img src={icon} alt="icon" className={` h-16 object-contain ${idx === 3 ? "w-[50%]" : "w-16"}`} />
    <h3 className="text-xl font-bold text-whiteblue leading-[10px]">{title}</h3>
    <p className="text-nl font-normal text-left leading-7 text-whiteblue">{text}</p>
  </div>
);

const Skill = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-5 items-center">
        <h1 className="text-center text-lg text-white font-extrabold relative self-center after:content-[''] after:w-full after:absolute after:h-1 after:bg-secondary after:-bottom-1 after:left-0 mb-3">Skills</h1>
      </div>
      {skillItems.map((skill, i) => (
        <SkillCard key={i} idx={i} icon={skill.icon} title={skill.title} text={skill.text} />
      ))}
    </>
  );
};

export default Skill;
