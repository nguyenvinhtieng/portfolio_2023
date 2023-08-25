import React, { useEffect, useState } from 'react'
import HeaderLogo from './HeaderLogo'
import { Canvas } from '@react-three/fiber'

export default function Header() {
  let [theme, setTheme ] = useState('light')
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

  useEffect(() => {
    let currentTheme = localStorage.getItem('theme')
    if(currentTheme === 'dark') {
      document.body.classList.add('dark')
      setTheme('dark')
    } else {
      document.body.classList.remove('dark')
      setTheme('light')
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
            <a href="#top" className="header__link is-active" aria-hidden="true">Home</a>
            <a href="#section-background" className="header__link" aria-hidden="true">Backgrounds</a>
            <a href="#section-skill" className="header__link" aria-hidden="true">Skills</a>
            <a href="#section-project" className="header__link" aria-hidden="true">Projects</a>
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
              <a href="#" className="header__lang--item is-active">EN.</a>
              <a href="#" className="header__lang--item is-active">VN.</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
