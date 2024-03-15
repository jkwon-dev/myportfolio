
import React from 'react'
import DogLogin from './DogLogin'
import DogPost from './DogPost'

export default function HelpDog() {
  return (
    <div>
      <h2 className='text-3xl mx-2 my-6  font-bold'>HelpDog 유기견 구조 앱</h2>
      <div className='flex flex-row'>
        <DogLogin />
        <DogPost />
      </div>
    </div>
  )
}
