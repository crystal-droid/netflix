import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import Link from 'next/link'


const GetStarted = () => {
  return (
    <div>
      <div className='Navbar'>
        <div className='Netflix_Logo'>
          <Image src="/images/Netflix_Logo_PMS.png"
            alt='Image'
            width={"160"}
            height={88} />
        </div>
        <div className='Signup'><button className='sign_up'>Sign up</button></div>
      </div>

      <div className='GS_section1'>
        <div className='image'>
          <Image src="/images/Screenshot_23-9-2024_23331_www.netflix.com.jpeg"
            alt='Image'
            width={"280"}
            height={99} />
        </div>

        <div className='text'>
          <div className='P'><p>Step<strong>2</strong>of<strong>3</strong></p></div>
          <div className='texth1'><h1>Finish setting up your account</h1></div>
          <div className='textP'><p>We'll send a sign-up link to so you can use Netflix without a password on any device at any time.</p></div>
          <div className='TextP'><p>Please do not E-mail me Netflix specail offers.</p></div>
          <div className='sendLink'><div className='Send_Link'><button className='Sendlink'><Link href={"/Sendlink"}>Send Link</Link></button></div></div>
        </div>
      </div>

      <div className='Footer'>
                <div className='F1'>
                    <div>
                        <p className='F-P'>Questions? Contact us.</p>
                        <p className='F-P'>FAQ</p>
                        <p className='F-P'>Cookie Preferences</p>
                    </div>
                    <div>
                        <p className='F-P'>Help Center</p>
                        <p className='F-P'>Corporate Information</p>
                    </div>
                    <div>
                        <p className='F-P'>Terms of Use</p>
                    </div>
                    <div>
                        <p className='F-P'>Privacy</p>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default GetStarted