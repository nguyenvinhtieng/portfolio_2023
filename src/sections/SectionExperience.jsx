import React from 'react'

export default function SectionExperience() {
  return (
    <div className="section-experience" id="section-experience">
      <div className="section-experience__inner">
          <h2 className="c-ttl-01 c-ttl-gradient-01">My experience</h2>
          <ul className="section-experience__list">
            <li className="section-experience__item">
              <a href="" className="section-experience__item-inner">
                <time className="section-experience__time">Jun 2022 - Jul 2023</time>
                <div className="section-experience__content">
                  <h3 className="section-experience__ttl">Laichi LLC </h3>
                  <span className='section-experience__logo'><img src="/images/logo_laichi.svg" alt="" /></span>
                  <h4 className="section-experience__position">Frontend Engineer</h4>
                  <p className="section-experience__des c-txt">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                  </p>
                  <ul className="tags">
                    <li className="tag">HTML</li>
                    <li className="tag">CSS</li>
                    <li className="tag">Javascript</li>
                    <li className="tag">VueJs</li>
                    <li className="tag">NextJs</li>
                  </ul>
                </div>
              </a>
            </li>
            <li className="section-experience__item">
              <a href="" className="section-experience__item-inner">
                <time className="section-experience__time">Jun 2022 - Jul 2023</time>
                <div className="section-experience__content">
                  <h3 className="section-experience__ttl">Laichi LLC</h3>
                  
                  <h4 className="section-experience__position">Frontend Engineer</h4>
                  <p className="section-experience__des c-txt">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                  </p>
                  <ul className="tags">
                    <li className="tag">HTML</li>
                    <li className="tag">CSS</li>
                    <li className="tag">Javascript</li>
                    <li className="tag">VueJs</li>
                    <li className="tag">NextJs</li>
                  </ul>
                </div>
              </a>
            </li>
          </ul>
      </div>
    </div>
  )
}
