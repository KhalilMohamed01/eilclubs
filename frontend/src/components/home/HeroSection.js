import React from 'react'

function HeroSection() {
  return (
    <div className='hero'>
      <div>
        <h2>Découvrez les événements excitants prévus par les clubs de l’<span>ECOLE</span> au cours du mois à venir !</h2>
        <button className='action-button'>Découvrez maintenant</button>
      </div>
      <img src='planning.png' alt='people planning schedule'></img>
    </div>
  )
}

export default HeroSection
