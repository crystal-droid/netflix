'use client'
import React, { useState } from 'react'
import Home from '../../ui/Home'
import HomeSec2 from '../../componet/HomeSec2'
import HomeSec3 from '../../Component/HomeSec3'
// import LisabiPopUp from '../../MoviesPopUp/LisabiPopUp'
import Footer from '../../ui/Footer'
import HomeFooter from '../../footer/HomeFooter'
import InputForm from '../../footer1/InputForm'
import Footer3 from '../../Footer3/footer3'
import LisabiPopUp from '../../MoviesPopUp/LisabiPopUp'
// import Homesec3a from '../../Homesec3/Homesec3a'
// import { useState } from 'react/cjs/react.production.min'

const homePage = () => {

   const [ showPopUp, setShowPopUp ] = useState(false)

   const handlePopUp = () => {
     setShowPopUp(!showPopUp)
   }

  return (
    <div>
      <Home />
      <HomeSec2 handlePopUp={handlePopUp} />
      {
        showPopUp ? <LisabiPopUp /> : ""
      }
      {/* <LisabiPopUp /> */}
      <HomeSec3 />
      <HomeFooter />
      <InputForm />
      <Footer3 />
      {/* <Homesec3a /> */}


      {/* <LisabiPopUp /> */}
      {/* <Footer /> */}

      
      {/* {
       


      } */}

    </div>

  )
}

export default homePage