import React from 'react'
import Image from 'next/image'
import data from '@/utils/movies'

const LisabiPopUp = ({ movie, click }) => {
    return (
        <div className='ggg'>



            <div className='BGIS'>

                <div className='IOX' >
                    <Image
                        src={"/image/X.jpg"}
                        alt='Image'
                        width={30}
                        height={80}
                        style={{ position: "absolute", top: "0"}}
                        onClick={click}
                    />
                </div>

                <div className='BGI'>
                    <Image src={movie.image}
                        alt='Image'
                        width={100}
                        height={80}
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
                <div className='lisabipopup'>
                    <p className='lisabi-signupP'>{movie.year}</p>
                    <p className='lisabi-signupp'>18+</p>
                    <p className='lisabi-signupP'>Movie</p>
                    <p className='lisabi-signupP'>Dramas</p>
                </div>
                <div className='lisabI'>
                    <p className='lisabip'>The legendary story of a folk hero's rebellion against an oppressive empire, fighting for his freedom and forever altering the course of Yoruba history.</p>
                </div>

            </div>

        </div>


    )
}

export default LisabiPopUp