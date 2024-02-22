import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className=' top-36 bg-blue-950 text-white p-[60px]' >
                <div className="top flex justify-between items-center mb-[20px]">
                    <ul className=''>
                        <li className='text-3xl mb-2'>Categories</li>
                        <li className='mb-2'>Furniture</li>
                        <li className='mb-2'>Homeware</li>
                        <li className='mb-2'>Plant post</li>
                        <li className='mb-2'>Chairs</li>
                        <li className='mb-2'>Crockery</li>
                    </ul>

                    <ul>
                        <li className='text-3xl mb-2'>Our company</li>
                        <li className='mb-2'>About us</li>
                        <li className='mb-2'>Vacancies</li>
                        <li className='mb-2'>Contact us</li>
                        <li className='mb-2'>Privacy</li>
                    </ul>

                    <div className="inp">
                        <input type="email" placeholder='Your@gmail.com' className='pr-[80px] p-3 outline-none bg-blue-200 inp2' />
                        <Link to={'sign'} className='p-3 bg-white text-black'>Sign up</Link>
                    </div>
                </div>

                <hr />

                <div className="bottom flex justify-between mt-[20px]">
                    <div className="left"><h3 className='text-2xl'>Copyright 2022 Avion LTD</h3></div>
                    <div className="right flex gap-4 text-2xl">
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-skype"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-pinterest"></i>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer