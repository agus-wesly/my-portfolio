import { skillItems } from "../constant";
import { useInView } from "react-intersection-observer";
import SkillCard from "./SkillCard";

const Skill = ({ skillRef }) => {
  const { ref: reactRef, entry: reactEntry } = useInView();
  const { ref: reduxRef, entry: reduxEntry } = useInView();
  const { ref: tailwindRef, entry: tailwindEntry } = useInView();
  const { ref: expressRef, entry: expressEntry } = useInView();

  const refArr = [
    {
      ref: reactRef,
      entry: reactEntry,
    },
    {
      ref: reduxRef,
      entry: reduxEntry,
    },
    {
      ref: tailwindRef,
      entry: tailwindEntry,
    },
    {
      ref: expressRef,
      entry: expressEntry,
    },
  ];
  return (
    <div className="mb-[5rem]">
      <div ref={skillRef} className="w-full flex flex-col gap-7 items-center">
        <h1 className="text-center text-lg lg:text-[32px] text-white font-extrabold relative self-center after:content-[''] after:w-full after:absolute after:h-1 after:bg-secondary after:-bottom-1 after:left-0 mb-3">Skills</h1>
      </div>
      <div className="block lg:grid grid-cols-3 gap-8 lg:max-h-[750px] lg:mt-7">
        {skillItems.map((skill, i) => {
          return <SkillCard entry={refArr[i].entry} reff={refArr[i].ref} key={i} idx={i} icon={skill.icon} title={skill.title} text={skill.text} />;
        })}
      </div>
      <div className="hidden lg:block absolute w-[508px] h-[542px] blur-[128px] bg-whiteblue/20 -right-52 top-[30%] rounded-full"></div>
    </div>
  );
};

export default Skill;
