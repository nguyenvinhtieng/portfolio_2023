import React from 'react'
import HeaderLogo from './HeaderLogo'
import { Canvas } from '@react-three/fiber'

export default function Header() {
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
            <a href="#" className="header__link is-active">Home</a>
            <a href="#" className="header__link">Timeline</a>
            <a href="#" className="header__link">Projects</a>
            <a href="#" className="header__link">Skills</a>
          </nav>
          <div className="header__setting">
            <div className="header__theme">
              <input type="checkbox" id="toggle_checkbox" className='header__theme--input'/>
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
