import { skillItems } from "../constant";
import { useInView } from "react-intersection-observer";
import SkillCard from "./SkillCard";

const Skill = ({ skillRef }) => {
  const { ref: reactRef, entry: reactEntry } = useInView({
    threshold: 0.5,
  });
  const { ref: reduxRef, entry: reduxEntry } = useInView({
    threshold: 1,
  });
  const { ref: tailwindRef, entry: tailwindEntry } = useInView({
    threshold: 1,
  });
  const { ref: expressRef, entry: expressEntry } = useInView({
    threshold: 1,
  });

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
    <>
      <div ref={skillRef} className="w-full flex flex-col gap-5 items-center">
        <h1 className="text-center text-lg text-white font-extrabold relative self-center after:content-[''] after:w-full after:absolute after:h-1 after:bg-secondary after:-bottom-1 after:left-0 mb-3">Skills</h1>
      </div>
      {skillItems.map((skill, i) => {
        return <SkillCard entry={refArr[i].entry} reff={refArr[i].ref} key={i} idx={i} icon={skill.icon} title={skill.title} text={skill.text} />;
      })}
    </>
  );
};

export default Skill;
