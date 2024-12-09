"use client"

import React, { useState } from 'react'
import styles from "./homeFooter.module.css"
import AddIcon from '@mui/icons-material/Add';
import { faq } from '@/utils/faqUtils';

const Faq = () => {

    const [isVisible, setIsVisible] = useState(false)
    // const [ isrotate, setIsrotate ] = useState(false)
    const [activeIndex, setActiveIndex] = useState(null)

    const handleVisibility = (index) => {
        setIsVisible(!isVisible)
        // setIsrotate(!isrotate)
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <div>
            <div className='footer'>
                <h1 className='footerh1'>Enjoy on your TV</h1>

                <div class="navigator">

                    <div className={styles.container}>
                        <h1 className='frequently-ask-question'>Frequently Asked Questions</h1>


                        {faq.map((item, index, Array) => (
                            <div className={styles.eachSection}>
                                <div className='dropdown'>
                                    <p className='labelp'> {item.tittle} <AddIcon className={`${activeIndex === index ? styles.rotate : ""} cursor-pointer`} onClick={() => handleVisibility(index)} /></p>
                                </div>


                                <div>
                                    {activeIndex === index && (
                                        <p className={styles.description}>
                                            {item.desc}
                                        </p>
                                    )}
                                </div>

                            </div>
                        )

                        )}


                    </div>


                    {/* <div>

                        <input type="checkbox" id="checkBtn" class="btn" />
                        <label for="checkBtn"> <p className='label-p'> What is Netflix? </p> <span class="material-symbols--keyboard-arrow-down"></span> </label>


                        <ul class="checker">
                            <li class="checkitem">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</li>
                            <li class="checkitem">You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</li>
                        </ul>
                    </div>

                    <div className='netflixfooter'>

                        <input type="checkbox" id="checkBtn" class="btn" />
                        <label for="checkBtn"> <p className='label-p'> What is Netflix? </p> <span class="material-symbols--keyboard-arrow-down"></span> </label>


                        <ul class="checker">
                            <li class="checkitem">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</li>
                            <li class="checkitem">You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</li>
                        </ul>
                    </div>

                    <div className='netflixfooter'>

                        <input type="checkbox" id="checkBtn" class="btn" />
                        <label for="checkBtn"> <p className='label-p'> What is Netflix? </p> <span class="material-symbols--keyboard-arrow-down"></span> </label>


                        <ul class="checker">
                            <li class="checkitem">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</li>
                            <li class="checkitem">You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</li>
                        </ul>
                    </div>

                    <div className='netflixfooter'>

                        <input type="checkbox" id="checkBtn" class="btn" />
                        <label for="checkBtn"> <p className='label-p'> What is Netflix? </p> <span class="material-symbols--keyboard-arrow-down"></span> </label>


                        <ul class="checker">
                            <li class="checkitem">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</li>
                            <li class="checkitem">You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</li>
                        </ul>
                    </div>

                    <div className='netflixfooter'>

                        <input type="checkbox" id="checkBtn" class="btn" />
                        <label for="checkBtn"> <p className='label-p'> What is Netflix? </p> <span class="material-symbols--keyboard-arrow-down"></span> </label>


                        <ul class="checker">
                            <li class="checkitem">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</li>
                            <li class="checkitem">You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</li>
                        </ul>
                    </div>

                    <div className='netflixfooter'>

                        <input type="checkbox" id="checkBtn" class="btn" />
                        <label for="checkBtn"> <p className='label-p'> What is Netflix? </p> <span class="material-symbols--keyboard-arrow-down"></span> </label>


                        <ul class="checker">
                            <li class="checkitem">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</li>
                            <li class="checkitem">You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</li>
                        </ul>
                    </div> 
                </div> */}

                </div >
            </div>
        </div >
    )
}

export default Faq