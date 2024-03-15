import React from 'react'
import HelpDog from './HelpDog'

export default function ReactNative() {
  return (
    <div className='flex flex-col container'>
      <h1 className='text-6xl text-primary font-bold'>React Native</h1>
      <div className='flex flex-row'>
      <HelpDog />
      </div>
    </div>
  )
}