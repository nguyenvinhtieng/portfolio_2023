import React from 'react'
import { useTranslation } from "react-i18next";

export default function SectionMV() {
    const { t } = useTranslation();
  return (
    <section className="section-mv" id="section-mv">
        <div className="section-mv__inner">
            <div className="section-mv__left">
                <p className="section-mv__hi">{t("HOME.HI")} <span className='section-mv__hi-icon'></span> {t("HOME.INTRO")}</p>
                <h1 className='section-mv__ttl c-ttl-gradient-01'>Vinh Tieng</h1>
                <h2 className='section-mv__lead'>{t("HOME.TEXT_1")} <a href="" className="c-link">{t("HOME.TEXT_2")}</a>  {t("HOME.TEXT_3")}<a href="https://goo.gl/maps/6ZQEUhHLXKZ4JBMN6" target='_blank' className="c-link"> {t("HOME.TEXT_4")}</a></h2>
                <h3 className="section-mv__info">{t("HOME.CONTACT")} 👇</h3>
                <div className="section-mv__buttons">
                    <a href="https://github.com/nguyenvinhtieng" target='_blank' className='c-btn c-btn-01'>
                        <span className="hover"></span>
                        <span className="label">
                            <span className="icon"><img src="/images/ico_github.svg"/></span>
                            <span className="txt">Github</span>
                        </span>
                    </a>
                    <a href="https://www.facebook.com/nvinhtieng/" target="_blank" className='c-btn c-btn-02'>
                        <span className="hover"></span>
                        <span className="label">
                            <span className="icon"><img src="/images/ico_facebook.svg"/></span>
                            <span className="txt">Facebook</span>
                        </span>
                    </a>
                </div>
            </div>
            <div className="section-mv__right">
                <div className="section-mv__img">
                    <img src="/images/mv.png" alt="Vinh Tieng Graduation" />
                </div>
            </div>
        </div>
    </section>
  )
}
