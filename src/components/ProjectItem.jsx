import { useEffect } from "react";

const ProjectItem = ({ img, name, desc, url, reff, entry }) => {
  useEffect(() => {
    if (entry?.isIntersecting) {
      entry.target.classList.add("animate-slide");
    }
  }, [reff, entry]);

  return (
    <div className="flex flex-col gap-5 my-5 w-full h-full opacity-0" ref={reff}>
      <img loading="lazy" src={img} alt="project" className="rounded-[3px] opacity-[0.9] object-contain mix-blend-exclusion" />
      <h3 className="text-md font-bold leading-[7px] text-whiteblue">{name}</h3>
      <div>
        <p className="text-nl font-normal text-left leading-7 text-whiteblue">{desc}</p>
        <a href={url} target="__blank" className="flex items-center py-1 gap-2 text-secondary">
          Open site <span className="text-nl">&#8594;</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
