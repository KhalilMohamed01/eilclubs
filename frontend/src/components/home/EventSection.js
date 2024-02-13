import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

function EventSection() {
  const [events,setEvents] = useState();
  const [isLoaded,setisLoaded] = useState(false)




  useEffect(() =>{
    const getEvents = async () => {
      const response = await fetch('/api/events/') 
      const events = await response.json()
      setEvents(events) 
      setisLoaded(true)
  }  
  getEvents()
  },[])


  return (
    <div>
      <div className="event-section-title">
        <h2>ÉVÈNEMENTS À VENIR</h2> 
        <p>
          Découvrez les événements excitants prévus par nos clubs passionnants
          au cours du mois à venir !
        </p>
      </div>
      <div className="events-container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'3'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper"
      >
      {isLoaded && events.map((event) => {
        return       <SwiperSlide  className="slider" key={event._id}><img src={event.poster} alt={event.title}></img><div className='event-details'><h2>{event.title}</h2><p>{new Date() - new Date(event.date)}</p><span>{formatDistanceToNow(new Date(event.date),{addSuffix:true})}</span></div></SwiperSlide>

      })}

    </Swiper>
      </div>
    </div>
  )
}

export default EventSection
