import React from 'react'
import Header from './layout/Header/Header'
import SectionMV from './sections/SectionMV'
import SectionExperience from './sections/SectionExperience'
import SectionBackground from './sections/SectionBackground'
import MouseHover from './components/MouseHover/MouseHover'
import SectionSkill from './sections/SectionSkill'
import SectionProject from './sections/SectionProject'
import Footer from './layout/Footer/Footer'

export default function App() {

  

  return (
    <>
      <Header />
      <main id="top">
        <MouseHover />
        <div className="container">
          <SectionMV />
          <SectionBackground />
          <SectionSkill />
          <SectionExperience />
          <SectionProject />
        </div>
      </main>
      <Footer />
    </>
  )
}
