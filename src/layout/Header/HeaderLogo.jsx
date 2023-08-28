import React, { useEffect, useRef } from 'react'
import { Center } from '@react-three/drei';

export default function HeaderLogo() {
  const boxRef = useRef()
  useEffect(()=> {
    let mouseEvent = document.addEventListener('mousemove', (event)=> {
      const x = event.clientX
      const y = event.clientY
      boxRef.current.rotation.x = (y / window.innerWidth - 0.5) * Math.PI / 2
      boxRef.current.rotation.y = (x / window.innerHeight - 0.5) * Math.PI / 2
    })
    return ()=> {
      document.removeEventListener('mousemove', mouseEvent)
    }
  }, [])

  return (
    <Center>
      <mesh ref={boxRef}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshNormalMaterial />
      </mesh>  
    </Center>
  )
}
