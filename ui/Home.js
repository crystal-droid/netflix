import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <div className='section1'>
        <div className='Navbar'>
          <div className='Netflix_Logo'>
            <Image src="/images/Netflix_Logo_PMS.png"
              alt='Image'
              width={"160"}
              height={88} />
          </div>
          <div className='Signup'><button className='sign_up'>Sign up</button></div>
        </div>

        <div className='Texts'>
          <div className='Texts-sub'>
            <div className='TextH1'>
              <h1 className='H1'>Unlimited movies, TV shows, and more</h1>
              <p className='TextH1_P'>Starts at ₦2,200. Cancel anytime.</p>
              <p className='TextH1_P1'>Ready to watch? Enter your email to create or restart your membership.</p>
            </div>

            <div className='Forms'>
              <div className='Input'><input className='E_mail' type="text" placeholder='Email address' /></div>
              <div className='Get_Started'><button className='Getstarted'><Link href={"../Getstarted"}>Get Started</Link></button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home