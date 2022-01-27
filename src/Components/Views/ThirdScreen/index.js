import React from 'react';
import videoLoop from '../../../assets/video_loop.mp4'
import playButton from '../../../assets/playbutton.png'

export default function ThirdScreen() {
  return (
    <>
    <div className="ThirdScreen">

      <video  autoplay="true" muted="true" loop="true" poster="">
        <source src={videoLoop} type='video/mp4'/>
      </video>

    <div>
      <h1>Dev$Bank: pelo mundo</h1>
      <p>O banco que te ajuda a transformar a sua realidade.</p>

      <img src={playButton} alt="play button" />
    </div>

    </div>
    </>
  );
}
