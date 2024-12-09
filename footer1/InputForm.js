import React from 'react'
import Link from 'next/link'

const InputForm = () => {
    return (
        // <div>
            <div className='Form'>
                <div>
                    <p className='FormP'>Ready to watch? Enter your email to create or restart your membership.</p>
                </div>
                <div className='forms'>
                    <div className='Input'><input className='E_mail' type="text" placeholder='Email address' /></div>
                    <div className='Get_Started'><button className='Getstarted'><Link href={"../Getstarted"}>Get Started</Link></button></div>
                </div>
            </div>

        // </div>
    )
}

export default InputForm