import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import HeroSection from '../components/home/HeroSection'
import ClubSection from '../components/home/ClubSection'
import EventSection from '../components/home/EventSection'

function Home() {
  useEffect(()=>{
    document.title = 'Eil-Clubs'
  },[])
    return (
    <div className='page'>
      <Header/>
      <HeroSection/>
      <EventSection/>
      <ClubSection/>
        
      </div>
  )
}

export default Home
