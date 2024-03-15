import React from 'react'
import Jeju from '../../src/assets/images/jejumarket.png';

const BUTTON_CSS = 'text-3xl text-white rounded-lg bg-primary p-4 mr-2 ml-2 mt-4 hover:scale-105'

export default function Mydemo() {
  const oepnJeju = () => {
    window.open('https://steady-tapioca-22ffb6.netlify.app/');
  }
  return (
    <div >
        <h2 className='text-3xl mx-2 my-6 font-bold'>Jeju Market</h2>
        <div>
        <div className='container'>
            {/* 비디오, 스크린샷*/}
            <div>
            <img src={Jeju} alt='screenshot'/>
            </div>

            <div className='text-3xl mt-4'>
                <p>• 제주 농산물 판매 웹사이트 </p>
                <p>•  Google Auth 로그인</p>
                <p>• 상품등록, 제품 상세 리스트, 상품 리뷰</p>
                <p>• React, Tailwind, Firebase(Auth, Realtime Database)</p>
                <button className={BUTTON_CSS} onClick={oepnJeju}>웹사이트 방문하기</button>
            </div>
        </div>
        </div>
    </div>
  )
}
