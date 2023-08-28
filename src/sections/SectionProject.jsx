import React from 'react'
import { useTranslation } from 'react-i18next';
import projects from "./data/projects"
export default function SectionProject() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  console.log(projects);
  return (
    <div className="section-project" id="section-project">
      <div className="section-project__inner">
          <h2 className="c-ttl-01 c-ttl-gradient-01">{t("PROJECT.TITLE")}</h2>
          <ul className="section-project__list">
            {projects.length > 0 && projects.map((project, index) => (
              <li className="section-project__item" key={project[currentLanguage].PROJECT_NAME}>
              <div href="" className="section-project__item-inner">
                <div className="section-project__img">
                  <img src={project[currentLanguage].IMAGE} alt={project[currentLanguage].PROJECT_NAME} />
                </div>
                <div className="section-project__content">
                  <h4 className='section-project__ttl'>
                    <a href={project[currentLanguage].LINK} target='_blank' rel="noopener noreferrer" className='c-ext-link'>{project[currentLanguage].PROJECT_NAME}</a>
                  </h4>
                  <p className='section-project__des c-txt'>{project[currentLanguage].DESCRIPTION}</p>
                  <ul className="tags">
                  {project[currentLanguage].SKILLS.length > 0 && project[currentLanguage].SKILLS.map((skill, index) => (<li className="tag" key={skill}>{skill}</li>))}
                  </ul>
                </div>
              </div>
            </li>
            ))}
          </ul>
      </div>
    </div>
  )
}
