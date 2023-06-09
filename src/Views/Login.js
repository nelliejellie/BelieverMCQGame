import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bars } from  'react-loader-spinner'
import useSound from 'use-sound';
import success from '../assets/success.mp3'
import 'animate.css';

function Login({name, setName}) {
  const [Loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const [play] = useSound(success)


  const login = () =>{
    if(name === ""){
        alert("please enter a valid name")
    }else{
        setLoading(true)
        setTimeout(()=>{
            navigate('/game')
        },3000)
    }
    
  }
  return (
    <div className='flex flex-col justify-center items-center h-[100vh]'>
        <h2 className='text-white text-[50px] uppercase animate__animated animate__bounce'>Please enter your name to login</h2>
        <input 
            onChange={(e)=>{
                setName(e.target.value)
            }}
            value={name}
            className='pl-4 w-[20%] h-[52px]'
        />
        <button onClick={login} onMouseUp={play} className="bg-green-500 w-[15%] h-[52px] mt-4 rounded-lg">
            Login
        </button>
        {
            Loading === true &&
            <Bars
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        }
    </div>
  )
}

export default Login