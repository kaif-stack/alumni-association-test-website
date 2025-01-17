import React from 'react'
import Logo from "../../../../assets/images/connectLogo.png"
import { IoMdSend } from "react-icons/io";


const Login = () => {
  return (
    <div className='md:mx-[25%] lg:mx-0 text-center font-[merriweather] z-30 pb-[30px] h-auto pt-4 lg:ml-20 bg-white my-8 md:w-[370px] drop-shadow-2xl border-[1px] border-black rounded-md'>
      <div className='m-[auto] pt-[20px] px-[10%]'>
        <img src={Logo} alt="" />
      </div>
      <div className='py-2 font-defaultFont text-2xl text-[#064663] font-bold'>
        <h1>CONNECT WITH</h1>
        <h1>ALUMNI COMMUNITY</h1>
      </div>
      <div className='font-[merriweather] text-white text-[14px]'>
        <button className='mx-4 bg-[#3B5998] w-[270px] py-[8px] rounded mt-2'>Connect with Facebook</button>
        <button className='mx-4 bg-[#EA4335] w-[270px] py-[8px] rounded mt-2'>Connect with Google</button>
        <button className='mx-4 bg-[#0A66C2] w-[270px] py-[8px] rounded mt-2'>Connect with LinkedIn</button>
      </div>
      <div className='font-[merriweather] flex mx-[10%] mt-4'>
        <div className='w-[210px] md:w-[130px] h-[1px] rounded bg-black mt-[17px]'></div>
        <div className='mx-1 bg-[#DBE2EF] p-2 rounded-[50%]'>OR</div>
        <div className='w-[210px] md:w-[130px] h-[1px] rounded bg-black mt-[17px]'></div>
      </div>
      <form className='flex px-[15%] my-4' action="">
        <input className='outline-none border-b-[1px] w-[80%] border-black text-black' type="" placeholder='Enter your Email'/>
        <button className='ml-6 '><IoMdSend className='text-[#112d4e] text-[30px]'/></button>
      </form>
    </div>
  
  )
}

export default Login