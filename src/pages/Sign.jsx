import React from 'react'

const Sign = () => {
  return (
    <>
      <div className="inputs flex justify-center items-center h-[530px]">
        <div className="top text-start">
          <h2 className=''>Enter your email</h2>
          <input type="email" placeholder='Your@gmail.com' className='inputlar outline-none ' />
        </div>
        <div className="bottom text-start">
          <h2>Enter your password</h2>
          <input type="password" placeholder='Your password' className='inputlar outline-none' />
        </div>
        <button className='bg-blue-950 px-[25px]  py-[7px] text-white rounded-lg w-[500px] mt-[20px]'>Sign up</button>
      </div>
    </>
  )
}

export default Sign