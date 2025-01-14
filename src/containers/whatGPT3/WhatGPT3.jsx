import React from 'react';
import './whatGPT3.css';
import {Feature} from '../../components/feature/Feature';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id ="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature/>
        
        <div className="gpt3__whatgpt3-heading">
        <h1> </h1>
        <p> </p>

          <div className="gpt3__whatgpt3-container">
            <Feature/>
            <Feature/>
            <Feature/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatGPT3;