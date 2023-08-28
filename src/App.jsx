import React, { useEffect } from 'react'
import Header from './layout/Header/Header'
import SectionMV from './sections/SectionMV'
import SectionExperience from './sections/SectionExperience'
import SectionBackground from './sections/SectionBackground'
import MouseHover from './components/MouseHover/MouseHover'
import SectionSkill from './sections/SectionSkill'
import SectionProject from './sections/SectionProject'
import Footer from './layout/Footer/Footer'
import { useTranslation } from 'react-i18next'
import SectionCertificate from './sections/SectionCertificate'

export default function App() {
  const { i18n } = useTranslation();
  // GLOBAL INIT SETTING
  useEffect(() => {
    // THEME
    let currentTheme = localStorage.getItem('theme')
    if(currentTheme === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
    // LANGUAGE
    let currentLanguage = localStorage.getItem('language')
    if(currentLanguage === 'vi') {
      i18n.changeLanguage('vi');
      document.body.classList.add('vi')
    } else {
      i18n.changeLanguage('en');
    }

  }, [])


  // ANCHOR LINK
  useEffect(() => {
    const anchorLinks = document.querySelectorAll('a.js-anchor')
    anchorLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault()
        let dataTo = this.getAttribute('data-to')
        let offsetTop = document.querySelector(`#${dataTo}`).offsetTop
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
      })
    })
  }, [])

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
          {/* <SectionCertificate /> */}
        </div>
      </main>
      <Footer />
    </>
  )
}
