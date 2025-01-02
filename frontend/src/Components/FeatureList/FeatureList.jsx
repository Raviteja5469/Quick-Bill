import React from 'react'
import './FeatureList.css'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const FeatureList = () => {
  return (
    <div className='feature-list'>
      <p className='feature-heading'>Features</p>
      <div className="feature-list-cont">
      <div className="feature-box billing" >
        <button className='feature-button '>Billing<FontAwesomeIcon className="arrow-icon" icon={faArrowRight} /></button>
      </div>
      <div className="feature-box customer">
        <button className='feature-button '>Customers<FontAwesomeIcon className="arrow-icon" icon={faArrowRight} /></button>

      </div>
      <div className="feature-box finance">
        <button className='feature-button '>Finance<FontAwesomeIcon className="arrow-icon" icon={faArrowRight} /></button>

      </div>
      <div className="feature-box inventory">
        <button className='feature-button '>Inventory<FontAwesomeIcon className="arrow-icon" icon={faArrowRight} /></button>

      </div>
      <div className="feature-box sales">
        <button className='feature-button '>Sales<FontAwesomeIcon className="arrow-icon" icon={faArrowRight} /></button>

      </div>
      <div className="feature-box reports">
        <button className='feature-button '>Reports<FontAwesomeIcon className="arrow-icon" icon={faArrowRight} /></button>

      </div>
      </div>
    </div>
  )
}

export default FeatureList
