import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { RiDoubleQuotesL } from 'react-icons/ri'
import CircleSvg from './CircleSvg'
import logo from "../logo.svg";

const LeftPanel = () => {
  return (
    <div className="leftSide">
            <div>
                <img  src={logo} alt="fireSpot" style={{width: '10vh'}}/>
            </div>

            <div style={{margin: "100px 0px"}}>
              <i style={{fontSize: '40px', color: 'rgb(58 176 255)'}}>
                <RiDoubleQuotesL />
              </i>
                
                <p className='text'>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.</p>

                <p className='text'>
                Vincent Obi <i style={{color: 'green'}}><FaCheckCircle /></i></p>

                <div className='square'>
                  <svg height="20" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 0H33.5V33H0V20.5H21V0Z" fill="white"/>
                  </svg>
                </div>
            </div>

            <div className='cirles'>
              <CircleSvg />
            </div>
        </div>
  )
}

export default LeftPanel