import React from 'react'
import { IoLanguageOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

const footer3 = () => {
    return (
        <div> <div className='Footer3'>
            <div className='F3'>
                <div>
                    <p className='contact-us'>Questions? Contact us.</p>
                    <p className='Fp'>FAQ</p>
                    <p className='Fp'>Media Center</p>
                    <p className='Fp'>Ways to Watch</p>
                    <p className='Fp'>Cookie Preferences</p>
                    <p className='Fp'>Speed Test</p>
                </div>
                <div className='helpCenter'>
                    <p className='Fp'>Help Center</p>
                    <p className='Fp'>Investor Relations</p>
                    <p className='Fp'>Terms of Use</p>
                    <p className='Fp'>Corporate Information</p>
                    <p className='Fp'>Legal Notices</p>
                </div>
                <div className='helpCenter'>
                    <p className='Fp'>Account</p>
                    <p className='Fp'>Jobs</p>
                    <p className='Fp'>Privacy</p>
                    <p className='Fp'>Contact Us</p>
                    <p className='Fp'>Only on Netflix</p>
                </div>
            </div>

            <div className='button'>
                <div>
                    <div class="click-dropdown">

                        <input type="checkbox" id="checkBtn" class="btn" />
                        <div className='En'>
                            <IoLanguageOutline />
                            <label for="checkBtn">
                                <p className='shape'>English</p>
                            </label>
                            <IoMdArrowDropdown />
                        </div>


                        <ul class="checker">
                            <li class="checkitem">English</li>
                        </ul>

                    </div>
                </div>
                <div><p className='NG'>Netflix Nigeria</p></div>
            </div>

        </div></div>
    )
}

export default footer3