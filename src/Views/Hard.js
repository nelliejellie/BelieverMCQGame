import React, {useState, useLayoutEffect} from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import Countdown from 'react-countdown';
import {BiCheckbox,BiCheckSquare} from 'react-icons/bi'
import questionArray from '../mockApi/HardQuestions';

function Hard({name}) {
  const [next, setNext] = useState(0)
  const [total, setTotal] = useState(0)
  const [option, setOption] = useState("")
  const [hidden, setHidden] = useState("hidden")
  const [completed, setCompleted] = useState(10)

  useLayoutEffect(()=>{
    setTimeout(()=>{
        setNext(next+1)
    },10000)
  },[next])

  useLayoutEffect(()=>{

  },[next])
  
  const selectAnswer = (item) =>{
    setOption(prev => item.option)
    setHidden("block")
    if (item.answer === questionArray[next].correctAnswer){
        setTotal(total+=1)
    }
  }
  return (
    <div className='flex flex-col justify-center items-center p-10'>
        <div className='w-[60%]'>
            <ProgressBar completed={completed} />
        </div>
        <div className='text-white font-bold text-lg mt-10'>
            <Countdown date={Date.now() + 10000} />
        </div>
        <div className='mt-8'>
            <h3 className='font-bold text-white'>Question {next}</h3>
        </div>
        <div className='text-white'>
            <div className='text-[40px] font-bold'>
                {questionArray[next].question}
            </div>
            <div>
                {
                    questionArray[next].options.map(item => (
                        <div key={item.answer} className='flex flex-row items-center space-x-5' onClick={()=>{selectAnswer(item)}}>
                            {
                                option === item.option ?
                                <BiCheckSquare />
                                :
                                <BiCheckbox/>
                            }
                            <p>{item.answer}</p>
                            {
                                item.answer === questionArray[next].correctAnswer  ?
                                <small className={`${hidden} text-green-400`}>correct</small>
                                :
                                <small className={`${hidden} text-red-500`}>wrong</small>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Hard