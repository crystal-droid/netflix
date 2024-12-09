' use client '
import React from 'react'
import Image from 'next/image'
// import { useRouter } from 'next/navigtion'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import data from '@/utils/movies'
import LisabiPopUp from '../MoviesPopUp/LisabiPopUp'

const HomeSec2 = () => {

  const [route, setRoute] = useState(true) // handles the closing and opening condition
  const router = useRouter();
  const [ movieClicked, setMovieClicked ] = useState(null)

  const clickMovie = (movie) => {
    setMovieClicked(movie) 
    setRoute(true);
  }

  const closeMovie = () => {
    setRoute(false)  
  }


  return (
    <div>
      <div className='Div2'>

        <div><h1 className='Div2-H1'>Trending Now</h1>


          <div className='images'>

            {
              data.map((item, index) => {
                return (

                  <Image
                    src={item.image}
                    width={200}
                    height={150}  
                    onClick={() => clickMovie(item)}    
                  />

                )
              })
            }
          </div>


        </div>
      </div>

      { 
       movieClicked && route ? <LisabiPopUp movie={movieClicked} click = {closeMovie}/>: ""  
      }
    </div>
  )
}

export default HomeSec2 
