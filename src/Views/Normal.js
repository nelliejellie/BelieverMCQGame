import React, {useState, useLayoutEffect} from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import CountDown from '../Components/CountDown';
import {BiCheckbox,BiCheckSquare} from 'react-icons/bi'
import questionArray from '../mockApi/HardQuestions';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import useSound from 'use-sound';
import beep from '../assets/beep.mp3'

function Normal({name}) {

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    };
  const navigate = useNavigate()
  const [next, setNext] = useState(Math.floor((Math.random() * 9)))
  const [total, setTotal] = useState(0)
  const [option, setOption] = useState("")
  const [hidden, setHidden] = useState("hidden")
  const [completed, setCompleted] = useState(10)
  const [countQuestions, setCountQuestions] = useState(0)
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [play] = useSound(beep)

  useLayoutEffect(()=>{
    setTimeout(()=>{
        openModal()
    },50000)
  },[navigate])


  const goToNext = () =>{
    setCountQuestions(prev => prev+1)
    if(option === ""){
        alert("please select an answer")
    }else if(countQuestions < 9){
        setNext(Math.floor((Math.random() * 8)+1))
        setHidden("hidden")
        setOption("")
        setCompleted(completed+10)
    }else{
        openModal()
    }
  }
  
  const selectAnswer = (item) =>{
    setOption(prev => item.option)
    setHidden("block")
    if (item.answer === questionArray[next].correctAnswer){
        setTotal(total+1)
    }
  }

  function closeModal() {
    setIsOpen(false);
    navigate('/game')
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className='flex flex-col justify-center items-center p-10'>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        >
            <h2>{total > 5 ? `Congratulations ${name}, you passed the quiz with a score of ${total}/10` : `Sorry ${name}, you did not pass the quiz with a score of ${total}/10`}</h2>
            <p onClick={closeModal} className='text-center text-red-600 cursor-pointer'>close</p>
        </Modal>
        <div className='w-[60%]'>
            <ProgressBar completed={completed} />
        </div>
        <div className='text-white font-bold text-2xl mt-10'>
            <CountDown time={50000}/>
        </div>
        <div className='mt-8'>
            <h3 className='font-bold text-white'>Question {countQuestions}</h3>
        </div>
        <div className='text-white'>
            <div className='text-[40px] font-bold'>
                {questionArray[next].question}
            </div>
            <div>
                {
                    questionArray[next].options.map(item => (
                        <div key={item.answer} className='flex flex-row items-center space-x-5' onClick={()=>{selectAnswer(item)}} onMouseUp={play}>
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
        <button onClick={goToNext} className="w-[20%] h-24 rounded-full text-white bg-[#cc7272] mt-10 font-bold text-lg">
            Next
        </button>
    </div>
  )
}

export default Normal