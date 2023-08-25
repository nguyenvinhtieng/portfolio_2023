import React, { useEffect, useRef } from 'react'

export default function MouseHover() {
    const item = useRef(null)
    useEffect(() => {
      if(!item.current) return
      const mouseMove = window.addEventListener('mousemove', (e) => {
          if(!item.current) return
          item.current.style.left = e.clientX + 'px'
          item.current.style.top = e.clientY + 'px'
      })
      return () => {
          window.removeEventListener('mousemove', mouseMove)
      }
    }, [])
  return (
    <span className="mouse-hover" ref={item}></span>
  )
}
