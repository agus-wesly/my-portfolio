import { projects } from "../constant";
import ProjectItem from "./ProjectItem";
import { useInView } from "react-intersection-observer";

const Project = ({ projectRef }) => {
  const { ref: p1Ref, entry: p1Entry } = useInView({ threshold: 1 });
  const { ref: p2Ref, entry: p2Entry } = useInView({ threshold: 1 });
  const refArr = [
    {
      ref: p1Ref,
      entry: p1Entry,
    },
    {
      ref: p2Ref,
      entry: p2Entry,
    },
  ];
  return (
    <div ref={projectRef} className="w-full flex flex-col py-7 gap-4 items-center">
      <h1 className="text-center text-lg text-white font-extrabold relative self-center after:content-[''] after:w-full after:absolute after:h-1 after:bg-secondary after:-bottom-1 after:left-0 mb-3">Projects</h1>
      {projects.map((currProject, i) => (
        <ProjectItem key={i} reff={refArr[i].ref} entry={refArr[i].entry} url={currProject.url} img={currProject.img} name={currProject.name} desc={currProject.desc} />
      ))}
    </div>
  );
};

export default Project;
