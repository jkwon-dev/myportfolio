import React from 'react'
import ReactPlayer from 'react-player'

export default function Mydemoair() {
    return (
        <div >
            <h2 className='text-3xl mx-2 m-6  font-bold'>AirQuality App</h2>
            <div>
            <div className='container flex inline-flex'>
                {/* 비디오, 스크린샷*/}
                <div>
                <ReactPlayer url={'/videos/air-quality-video.mp4'} width='400px' height='800px'  playing={false }controls={true} />
                </div>
    
                <div className='text-3xl '>
                    <p > - Get Air Quality base on my current location  </p>
                    <p> - Fetching AirVisual API</p>
                    <p> - Swift, SwiftUI and Expo</p>
                    <p> 👈 Click!  Live demo video</p>
                </div>
            </div>
            </div>
        </div>
      )
}
