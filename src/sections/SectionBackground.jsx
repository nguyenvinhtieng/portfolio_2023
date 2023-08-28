import React from 'react'
import { useTranslation } from "react-i18next";
export default function SectionBackground() {
  const { t } = useTranslation();
  return (
    <section className="section-background" id="section-background">
        <div className="section-background__inner">
            <div className="section-background__ttl">
                <h3 className="c-ttl-01 c-ttl-gradient-01">{t("BACKGROUND.TITLE")}</h3>
            </div>
            <div className="section-background__text">
                <p className="c-txt">{t("BACKGROUND.TEXT_01")}<b>{t("BACKGROUND.TEXT_02")}</b>{t("BACKGROUND.TEXT_03")} <a href="https://tdtu.edu.vn/" target='_blank' className="c-link">{t("BACKGROUND.TEXT_04")}</a> {t("BACKGROUND.TEXT_05")} <b>{t("BACKGROUND.TEXT_06")}</b>. </p>
                <p className="c-txt">{t("BACKGROUND.TEXT_07")}</p>
                <p className="c-txt">{t("BACKGROUND.TEXT_08")} <a href="/" className='c-link'>{t("BACKGROUND.TEXT_09")} </a>{t("BACKGROUND.TEXT_10")} <a data-to="section-project" className='c-link js-anchor'>{t("BACKGROUND.TEXT_11")}</a> {t("BACKGROUND.TEXT_12")} <a className='c-link js-anchor' data-to="section-skill">{t("BACKGROUND.TEXT_13")}</a></p>
            </div>
        </div>
    </section>
  ) 
}
