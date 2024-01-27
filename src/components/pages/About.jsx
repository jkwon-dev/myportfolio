import React from 'react'
import personImage from '../../assets/images/hero.png'

const BUTTON_CSS = 'text-3xl text-white rounded-lg bg-primary p-4 mr-2 ml-2 hover:scale-105'
export default function About() {
  const opengithub = () => {
      window.open('https://github.com/jkwon-dev');
  }
  const oepnblog = () => {
    window.open('https://jkd3.tistory.com/');
  }
  const oepnlinkedin = () => {
    window.open('https://www.linkedin.com/in/eunji-kwon-41a508189/');
  }
  
  return (
    <div className=' w-full bg-secondary '>
      <div className='container flex justify-between items-center space-y-2 py-12'>
        <div>
            <p className='text-6xl md:text-6xl font-bold'>Hello, I am EJ</p>
            <p className='text-4xl text-gray-700 '>Junior Frontend Developer </p>
            <p className='text-2xl text-gray-700 py-2'> Highly self-motivated Frontend and iOS Mobile developer, <br/>passionate about learning and bringing ideas
              from theory to reality. 
            </p> 
            <div className='py-2'>
              <button className={BUTTON_CSS} type="button" onClick={opengithub}>GitHub</button>
              <button className={BUTTON_CSS} type="button" onClick={oepnblog}>Blog</button>
              <button className={BUTTON_CSS} type="button" onClick={oepnlinkedin}>LinkedIn</button>
            </div>
        </div>
        <div>
        <img src={personImage} alt="Not found" className='w-full md:max-w-lg mx-auto'/>
        </div>
      </div>
    </div>
  )
}
