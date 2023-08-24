import React from 'react'
import Header from './layout/Header/Header'
import SectionMV from './sections/SectionMV'
import SectionTimeline from './sections/SectionTimeline'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <SectionMV />
          <SectionTimeline />
        </div>
      </main>
    </>
  )
}
