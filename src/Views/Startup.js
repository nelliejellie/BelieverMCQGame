import React, {useLayoutEffect
} from 'react'
import { Bars } from  'react-loader-spinner'
import { useNavigate } from "react-router-dom";
import 'animate.css';

function Startup() {
  const navigate = useNavigate();
  useLayoutEffect(()=>{
    setTimeout(()=>{
        navigate('Login')
    },3000)
  },[navigate])
  return (
    <div className='flex flex-col justify-center items-center h-[100vh]'>
        <p className='text-white font-bold text-[50px] animate__animated animate__tada'>
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