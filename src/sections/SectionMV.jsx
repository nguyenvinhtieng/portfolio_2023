import React from 'react'
import GitHub from '../components/icons/GitHub'

export default function SectionMV() {
  return (
    <section className="section-mv" id="section-mv">
        <div className="section-mv__inner">
            <div className="section-mv__left">
                <p className="section-mv__hi">Hey there! <span className='section-mv__hi-icon'></span> My name is</p>
                <h1 className='section-mv__ttl c-ttl-gradient-01'>Vinh Tieng</h1>
                <h2 className='section-mv__lead'>I am a <a href="" className="c-link">Front-end developer</a>  and I'm currently working in<a href="https://goo.gl/maps/6ZQEUhHLXKZ4JBMN6" target='_blank' className="c-link"> Ho Chi Minh City, Vietnam.</a></h2>
                {/* <p className='c-txt u-t-j'>You know when you visit a website, and it looks amazing and works really smoothly? That's what I love doing. I'm passionate about making the internet a more beautiful and user-friendly place. Whether it's designing a webpage that catches your eye or creating an app that's easy to use, I enjoy bringing ideas to life in the digital world. </p>
                <p className='c-txt u-t-j'>So, I invite you to explore my portfolio website, where you can see the projects I've worked on and get a taste of what I can do. It's where I showcase my creativity and technical skills, all aimed at making your online experience more enjoyable.</p> */}
                <h3 className="section-mv__info">Get in touch with me at 👇</h3>
                <div className="section-mv__buttons">
                    <a href="#" className='c-btn c-btn-01'>
                        <span className="hover"></span>
                        <span className="label">
                            <span className="icon"><img src="/images/ico_github.svg"/></span>
                            <span className="txt">Github</span>
                        </span>
                    </a>
                    <a href="#" className='c-btn c-btn-02'>
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
