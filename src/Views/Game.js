import React, {useState} from 'react'
import {BiCheckbox,BiCheckSquare} from 'react-icons/bi'
import { Bars } from  'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import Modal from 'react-modal';

function Game({name}) {
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
  const [checkhard, setCheckHard] = useState(false)
  const [checkeasy, setCheckEasy] = useState(false)
  const [checknormal, setCheckNormal] = useState(false)
  const [modalIsOpen, setIsOpen] = React.useState(true);
  const navigate = useNavigate()

  const handleHard = () =>{
    setCheckHard(true)
    setTimeout(() => {
        navigate('/hard')
    }, 3000);
  }

  const handleNormal = () =>{
    setCheckNormal(true)
    setTimeout(() => {
        navigate('/normal')
    }, 3000);
  }

  const handleEasy = () =>{
    setCheckEasy(true)
    setTimeout(() => {
        navigate('/easy')
    }, 3000);
  }

  function closeModal() {
    setIsOpen(false);
    navigate('/game')
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className='flex flex-col justify-center items-center h-[100vh]'>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <h2>The harder the difficulty..the faster the countdown to complete the quiz....Goodluck</h2>
            <p onClick={closeModal} className='text-center text-red-600 cursor-pointer'>close</p>
        </Modal>
        <p className='text-white text-center text-[50px]'>
            Hi {name}, Welcome to Believers Tech MCQ questions
        </p>
        <div className='flex flex-col justify-center items-center'>
            <p className='text-white text-[40px]'>Please select the difficulty level</p>
            <div>
                <div className='flex flex-row items-center text-[20px] text-white space-x-4'>
                    
                    {
                        checkhard === false?
                        <BiCheckbox onClick={handleHard}/>
                        :
                        <div className='flex flex-row'>
                            <BiCheckSquare />
                            <Bars
                                height="20"
                                width="20"
                                color="#4fa94d"
                                ariaLabel="bars-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                        </div>
                        
                    }
                    <p className='text-white'>Hard</p>
                </div>
                <div className='flex flex-row items-center text-[20px] text-white space-x-4'>
                    {
                        checknormal === false?
                        <BiCheckbox onClick={handleNormal}/>
                        :
                        <div className='flex flex-row'>
                            <BiCheckSquare />
                            <Bars
                                height="20"
                                width="20"
                                color="#4fa94d"
                                ariaLabel="bars-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                        </div>
                        
                    }
                    <p className='text-white'>Medium</p>
                </div>
                <div className='flex flex-row items-center text-[20px] text-white space-x-4'>
                    {
                        checkeasy === false?
                        <BiCheckbox onClick={handleEasy}/>
                        :
                        <div className='flex flex-row'>
                            <BiCheckSquare />
                            <Bars
                                height="20"
                                width="20"
                                color="#4fa94d"
                                ariaLabel="bars-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                        </div>
                        
                    }
                    <p className='text-white'>Easy</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Game