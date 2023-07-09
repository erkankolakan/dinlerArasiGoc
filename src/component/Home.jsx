import React from 'react'
import arkaplan from '../img/arkaplan.jpg'
import '../css/Home.css'
import Header from './Header'

const Home = () => {
  return (
    <>
        <Header/>
      <div>
          <div>
              <img src={arkaplan} alt="arkaplan" className="arkaplan" />
          </div>
      </div>
    </>
  )
}

export default Home
