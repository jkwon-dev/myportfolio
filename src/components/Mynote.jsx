import React from 'react'
import read from '../assets/images/read.png'
import edit from '../assets/images/editandelet.png'
import add from '../assets/images/addnew.png'

function Mynote() {
  return (
    <div >
            <h2 className='text-3xl mx-2 my-6  font-bold'>My Note App</h2>
            <div>
            <div className='flex flex-col' >
                {/* 비디오, 스크린샷*/}
                <div className='flex flex-row  w-80 h-90'>
                    <img alt="noteapp" src={read} />
                    <img alt="noteapp" src={add} className='mr-10 ml-10' />
                    <img  alt="noteapp" src={edit} />
                </div>
    
                <div className='text-3xl '>
                    <p > - Note App  </p>
                    <p> - React Native with Expo</p>
                    <p> - Firebase CRUD </p>
                </div>
            </div>
            </div>
        </div>
  )
}

export default Mynote