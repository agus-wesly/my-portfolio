import { Navbar, Project, Heading, Skill, Talk, Footer } from './components'
import { useState, useEffect, useRef, useLayoutEffect } from 'react'

function App() {
  const [toggle, setToggle] = useState(false)
  const headingRef = useRef(null)
  const skillRef = useRef(null)
  const projectRef = useRef(null)
  const talkRef = useRef(null)

  useLayoutEffect(() => {
    const anch = document.createElement('a')
    anch.href = 'https://agus-wesly.vercel.app/'
    anch.click()
  }, [])

  return (
    <>
      <div
        className={`font-Inter px-6 py-5 lg:px-44 lg:py-11 bg-primary max-w-full relative overflow-x-hidden h-full`}
      >
        <Navbar
          toggle={toggle}
          setToggle={setToggle}
          headingRef={headingRef}
          skillRef={skillRef}
          projectRef={projectRef}
          talkRef={talkRef}
        />
        <Heading headingRef={headingRef} talkRef={talkRef} />
        <Skill skillRef={skillRef} />
        <Project projectRef={projectRef} />
        <Talk talkRef={talkRef} />
        <Footer />
      </div>
    </>
  )
}

export default App
