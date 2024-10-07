import React from 'react'

const Navbar = () => {
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
        </div>
    )
}

export default Navbar