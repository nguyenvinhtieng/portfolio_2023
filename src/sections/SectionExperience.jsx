import React from 'react'
import { useTranslation } from "react-i18next";
import experiences from "./data/experiences"
export default function SectionExperience() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <div className="section-experience" id="section-experience">
      <div className="section-experience__inner">
          <h2 className="c-ttl-01 c-ttl-gradient-01">{t("EXPERIENCE.TITLE")}</h2>
          <ul className="section-experience__list">
            {experiences.length > 0 && experiences.map((item, index) => (
            <li className="section-experience__item" key={item[currentLanguage].COMPANY_NAME}>
              <div className="section-experience__item-inner">
                <time className="section-experience__time">{item[currentLanguage].TIME}</time>
                <div className="section-experience__content">
                  <a href={item[currentLanguage].LINK} target='_blank' rel="noopener noreferrer" className="section-experience__ttl">{item[currentLanguage].COMPANY_NAME}</a>
                  <span className={`section-experience__logo ${item[currentLanguage].COMPANY_NAME}`} ><img src={item[currentLanguage].LOGO} alt="" /></span>
                  <h4 className="section-experience__position">{item[currentLanguage].POSITION}</h4>
                  <p className="section-experience__des c-txt" dangerouslySetInnerHTML={{__html: item[currentLanguage].DESCRIPTION}}>
                    {/* {item[currentLanguage].DESCRIPTION} */}
                  </p>
                  <ul className="tags">
                  {item[currentLanguage].SKILLS.length > 0 && item[currentLanguage].SKILLS.map((skill, index) => 
                  (<li className="tag" key={skill}>{skill}</li>))}
                  </ul>
                </div>
              </div>
            </li>))}
          </ul>
      </div>
    </div>
  )
}
