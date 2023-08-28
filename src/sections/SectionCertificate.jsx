import React from 'react'
import { useTranslation } from "react-i18next";
const data = [
    {
        name: 'Cambridge English: Preliminary (PET)',
        img: '',
    }
]
export default function SectionCertificate() {
  const { t } = useTranslation();
  return (
    <section className="section-certificate" id="section-certificate">
        <div className="section-certificate__inner">
            <div className="section-certificate__ttl">
                <h3 className="c-ttl-01 c-ttl-gradient-01">{t("CERTIFICATE.TITLE")}</h3>
            </div>
            <ul className="section-certificate__list">
                <li className="section-certificate__item">
                    <div className="section-certificate__img">
                        <img src="" alt="" />
                    </div>
                </li>
            </ul>
        </div>
    </section>
  ) 
}
