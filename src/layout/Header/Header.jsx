import React, { useEffect, useState } from 'react'
import HeaderLogo from './HeaderLogo'
import { Canvas } from '@react-three/fiber'

import { useTranslation, Trans } from "react-i18next";

export default function Header() {
  const [currentLanguage, setCurrentLanguage] = useState("en")
  let [theme, setTheme ] = useState('light')
  const { t, i18n } = useTranslation();
  
  const handleChangeLanguage = lng => {
    localStorage.setItem('language', lng)
    setCurrentLanguage(lng)
    i18n.changeLanguage(lng);
    if(lng === 'vi') {
      document.body.classList.add('vi')
    } else {
      document.body.classList.remove('vi')
    }
  };
  
  const handleChangeTheme = (e) => {
    if(e.target.checked) {
      document.body.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      document.body.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }

  // GET GLOBAL SETTING
  useEffect(() => {
    // THEME
    let currentTheme = localStorage.getItem('theme')
    if(currentTheme === 'dark') {
      setTheme('dark')
    } else {
      setTheme('light')
    }

    // LANGUAGE
    let currentLanguage = localStorage.getItem('language')
    if(currentLanguage === 'vi') {
      setCurrentLanguage('vi')
    } else {
      setCurrentLanguage('en')
    }
  }, [])

  useEffect(() => {
    const scrollingEvent = window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY
      const anchorLinks = document.querySelectorAll('.header__link')
      anchorLinks.forEach(link => {
        let dataTo = link.getAttribute('data-to')
        let offsetTop = document.querySelector(`#${dataTo}`).offsetTop
        if (scrollPosition >= offsetTop) {
          anchorLinks.forEach(link => {
            link.classList.remove('is-active')
          })
          link.classList.add('is-active')
        } else {
          link.classList.remove('is-active')
        }
      })
    })
    return () => {
      window.removeEventListener('scroll', scrollingEvent)
    }
  }, [])

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <h1 className="header__logo" title='Vinh Tieng'>
          <Canvas camera={{ fov: 45, near: 1, far: 10, position: [ 0, 0, 2 ] }}  flat linear
            gl={{ antialias: true, pixelRatio: window.devicePixelRatio }}>
            <HeaderLogo />
          </Canvas>
          </h1>
          <nav className="header__nav">
            <a className="header__link js-anchor" data-to="section-mv">{t("HEADER.HOME")}</a>
            <a className="header__link js-anchor" data-to="section-background">{t("HEADER.BACKGROUND")}</a>
            <a className="header__link js-anchor" data-to="section-skill">{t("HEADER.SKILLS")}</a>
            <a className="header__link js-anchor" data-to="section-project">{t("HEADER.PROJECT")}</a>
          </nav>
          <div className="header__setting">
            <div className="header__theme">
              <input type="checkbox" id="toggle_checkbox" className='header__theme--input' onChange={handleChangeTheme} checked={theme === "dark"}/>
              <label htmlFor="toggle_checkbox" className='header__theme--label'>
                <div id="star" className='header__theme--star'>
                  <div id="star-1" className='header__theme--star-1 star'>★</div>
                  <div id="star-2" className='header__theme--star-2 star'>★</div>
                </div>
                <div id="moon" className='header__theme--moon'></div>
              </label>
            </div>
            <div className="header__lang">
              <a className={`header__lang--item ${currentLanguage === 'en' ? 'is-active' : ''}`} 
              onClick={()=>handleChangeLanguage("en")}>En.</a>
              <a className={`header__lang--item ${currentLanguage === 'vi' ? 'is-active' : ''}`} 
              onClick={()=>handleChangeLanguage("vi")}>Vi.</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
