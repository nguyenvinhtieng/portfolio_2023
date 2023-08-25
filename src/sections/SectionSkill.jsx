import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'


const skills = [
    {id: 1, name: 'HTML', img: '/images/skill/html.jpg'},
    {id: 2, name: 'CSS', img: '/images/skill/css.png'},
    {id: 3, name: 'Javascript', img: '/images/skill/js.png'},
    {id: 22, name: 'Typescript', img: '/images/skill/typescript.png'},
    {id: 4, name: 'React', img: '/images/skill/react.png'},
    {id: 5, name: 'NextJs', img: '/images/skill/next.svg'},
    {id: 6, name: 'Vue', img: '/images/skill/vue.png'},
    {id: 7, name: 'NuxtJs', img: '/images/skill/nuxt.svg'},
    {id: 8, name: 'Angular', img: '/images/skill/angular.png'},
    {id: 9, name: 'Redux', img: '/images/skill/redux.png'},
    {id: 10, name: 'Sass', img: '/images/skill/sass.png'},
    {id: 11, name: 'TailwindCSS', img: '/images/skill/tailwind.png'},
    {id: 12, name: 'VsCode', img: '/images/skill/vscode.png'},
    {id: 13, name: 'Photoshop', img: '/images/skill/pts.png'},
    {id: 14, name: 'XD', img: '/images/skill/xd.png'},
    {id: 15, name: 'Figma', img: '/images/skill/figma.webp'},
    {id: 16, name: 'NodeJs', img: '/images/skill/node.png'},
    {id: 17, name: 'ExpressJs', img: '/images/skill/express.png'},
    {id: 18, name: 'MongoDB', img: '/images/skill/mongodb.png'},
    {id: 19, name: 'Git', img: '/images/skill/git.png'},
    {id: 20, name: 'ThreeJs', img: '/images/skill/threejs.png'},
    {id: 21, name: 'Gsap', img: '/images/skill/gsap.png'},
]
export default function SectionSkill() {
    let skillCol1 = skills.slice(0, skills.length/2)
    let skillCol2 = skills.slice(skills.length/2, skills.length)
    let list1Ref = useRef(null)
    useEffect(() => {
        if(!list1Ref.current) return
        // infinity slideer skill
        // gsap.registerPlugin(ScrollTrigger)
        // let tl = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: list1Ref.current,
        //         start: 'top center',
        //         end: 'bottom center',
        //         scrub: 1,
        //         // markers: true,
        //         pin: true,
        //         // pinSpacing: false,
        //         // anticipatePin: 1
        //     }
        // })
        // tl.to(list1Ref.current, {
        //     x: -100,
        //     duration: 10,
        //     ease: 'none',
        //     repeat: -1,
        //     // yoyo: true
        // })

    }, [])
  return (
    <div className="section-skill" id="section-skill">
      <div className="section-skill__inner">
            <h2 className="c-ttl-01 c-ttl-gradient-01">Skills</h2>
            <div className="section-skill__list-wrap">
                <ul className="section-skill__list" ref={list1Ref}>
                    {skillCol1.length > 0 && skillCol1.map((skill, index) => (
                        <li className="section-skill__item" key={skill.id}>
                            <div className="section-skill__img">
                                <img src={skill.img} alt="" />
                            </div>
                            <p className="section-skill__name c-txt">{skill.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="section-skill__list-wrap">
                <ul className="section-skill__list revert" ref={list1Ref}>
                    {skillCol2.length > 0 && skillCol2.map((skill, index) => (
                        <li className="section-skill__item" key={skill.id}>
                            <div className="section-skill__img">
                                <img src={skill.img} alt="" />
                            </div>
                            <p className="section-skill__name c-txt">{skill.name}</p>
                        </li>
                    ))}
                </ul>
            </div>

      </div>
    </div>
  )
}
