import { useEffect } from "react";

const ProjectItem = ({ img, name, desc, url, reff, entry, idx, descSm }) => {
  useEffect(() => {
    if (entry?.isIntersecting) {
      entry.target.classList.add("animate-slide");
    }
  }, [reff, entry]);

  return (
    <div className={`flex flex-col gap-5 my-5 w-full h-full opacity-0 lg:mt-7 lg:items-center lg:gap-0 lg:my-8 ${idx === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`} ref={reff}>
      <img loading="lazy" src={img} alt="project" className="rounded-[3px] opacity-[0.9] object-contain mix-blend-exclusion lg:w-[600px] lg:aspect-video" />
      <h3 className="text-md font-bold leading-[7px] text-whiteblue lg:hidden">{name}</h3>
      <p className="text-whiteblue font-sm lg:hidden">{descSm}</p>
      <div className="lg:hidden">
        <a href={url} target="__blank" className="flex items-center py-1 gap-2 text-secondary">
          Open site <span className="text-nl">&#8594;</span>
        </a>
      </div>
      <div
        className={`hidden lg:flex flex-col gap-4 bg-darkblue p-5 relative after:content-[''] after:w-full after:h-full after:bg-secondary ${
          idx === 0 ? "after:right-0 after:translate-x-2 justify-end text-end" : "text-start justify-start after:left-0 after:-translate-x-2"
        }  after:absolute after:bottom-0 after:z-[-1]  after:translate-y-2`}
      >
        <h3 className="lg:text-[30px] font-bold text-white">{name}</h3>
        <div dangerouslySetInnerHTML={{ __html: desc }} />
        <a href={url} target="__blank" className={`flex items-center ${idx === 0 ? "self-end" : "self-start"} gap-x-2 text-secondary group`}>
          <span className="relative after:content-[''] after:absolute after:w-full after:h-[1.5px] after:bg-secondary after:-bottom-[2px] after:left-0 after:scale-x-0 group-hover:after:scale-x-100 after:transition after:duration-300 after:origin-left">
            Open site
          </span>
          <span className="text-nl">&#8594;</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
