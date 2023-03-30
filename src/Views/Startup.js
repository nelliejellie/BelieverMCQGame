import React, {useState, useLayoutEffect
} from 'react'
import { Bars } from  'react-loader-spinner'
import { useNavigate } from "react-router-dom";

function Startup() {
  const navigate = useNavigate();
  useLayoutEffect(()=>{
    setTimeout(()=>{
        navigate('Login')
    },3000)
  },[])
  return (
    <div className='flex flex-col justify-center items-center h-[100vh]'>
        <p className='text-white font-bold text-[50px]'>
            Welcome To Believers Quiz Game
        </p>
        <Bars
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    </div>
  )
}

export default Startup