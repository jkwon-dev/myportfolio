import React from 'react'
import post1 from '../assets/images/post1.png';
import post2 from '../assets/images/post2.png';

const DogPost = () => {
  return (
      <div className='flex flex-col m-10'>
        <div className='flex flex-row w-80 h-90'>
        <img  alt='login' src={post1} />
        <img className='ml-4' alt='login' src={post2} />
        </div>
        <div className='mt-4 text-3xl'>
          <p>• 구조 신청 게시글</p>
          <p>• 내용과 사진을 함께 올려주세요.</p>
          <p>• Firebase Database</p>
        </div>
      </div>
  )
}

export default DogPost