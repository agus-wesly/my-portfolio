import { Navbar, Project, Heading, Skill, Talk, Footer } from "./components";
import { useState, useEffect } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);

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
        <Navbar toggle={toggle} setToggle={setToggle} />
        <Heading />
        <Skill />
        <Project />
        <Talk />
        <Footer />
      </div>
    </>
  );
}

export default App;
