
import React from 'react'
import login from '../assets/images/login.png';

const DogLogin = () => {
  return (
      <div className='flex flex-col m-10'>
        <div className='w-80 h-90'>
        <img sy alt='login' src={login} />
        </div>
        <div className='mt-4 text-3xl'>
          <p>• 로그인 / 회원가입</p>
          <p>• 이메일 & 패스워드로 가입</p>
          <p>• Firebase Auth</p>
        </div>
      </div>
  )
}

export default DogLogin