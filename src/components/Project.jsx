import { projects } from "../constant";

const ProjectItem = ({ img, name, desc, url }) => (
  <div className="flex flex-col gap-5 my-5 w-full h-full">
    <img src={img} alt="project" className="rounded-[3px] opacity-[0.9] object-contain mix-blend-exclusion" />
    <h3 className="text-md font-bold leading-[7px] text-whiteblue">{name}</h3>
    <div>
      <p className="text-nl font-normal text-left leading-7 text-whiteblue">{desc}</p>
      <a href={url} target="__blank" className="flex items-center py-1 gap-2 text-secondary">
        Open site <span className="text-nl">&#8594;</span>
      </a>
    </div>
  </div>
);

const Project = () => {
  return (
    <div className="w-full flex flex-col gap-5 items-center">
      <h1 className="text-center text-lg text-white font-extrabold relative self-center after:content-[''] after:w-full after:absolute after:h-1 after:bg-secondary after:-bottom-1 after:left-0 mb-3">Projects</h1>
      {projects.map((currProject) => (
        <ProjectItem url={currProject.url} img={currProject.img} name={currProject.name} desc={currProject.desc} />
      ))}
    </div>
  );
};

export default Project;
