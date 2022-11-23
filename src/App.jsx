import { Navbar, Project, Heading, Skill, Talk, Footer } from "./components";
import { useState, useEffect, useRef } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  const headingRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const talkRef = useRef(null);

  useEffect(() => {
    if (toggle) {
      document.body.classList.add("blurr");
    } else {
      document.body.classList.remove("blurr");
    }
  }, [toggle]);

  return (
    <>
      <div className={`font-Inter px-6 py-5 bg-primary max-w-full relative overflow-x-hidden h-full`}>
        <Navbar toggle={toggle} setToggle={setToggle} headingRef={headingRef} skillRef={skillRef} projectRef={projectRef} talkRef={talkRef} />
        <Heading headingRef={headingRef} />
        <Skill skillRef={skillRef} />
        <Project projectRef={projectRef} />
        <Talk talkRef={talkRef} />
        <Footer />
      </div>
    </>
  );
}

export default App;
