import React from 'react'
import './FeatureList.css'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';



const FeatureList = () => {
  return (
    <div className='feature-list'>
      <p className='feature-heading'>Features</p>
      <div className="feature-list-cont">
      <div className="feature-box billing" >
        <Link to='/feature/billing' className='feature-button' style={{textDecoration:'none'}} >
        Billing<FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
        </Link>
      </div>
      <div className="feature-box customer">
        <Link to='/feature/customers' className='feature-button' style={{textDecoration:'none'}} >
        Customers<FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
        </Link>

      </div>
      <div className="feature-box finance">
        <Link to='/feature/finance' className='feature-button' style={{textDecoration:'none'}} >
        Finance<FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
        </Link>

      </div>
      <div className="feature-box inventory">
        <Link to='/feature/inventory' className='feature-button' style={{textDecoration:'none'}} >
        Inventory<FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
        </Link>

      </div>
      <div className="feature-box sales">
        <Link className='feature-button' to='/feature/sales' style={{textDecoration:'none', }} >
        Sales<FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
        </Link>

      </div>
      <div className="feature-box reports">
        <Link to='/feature/reports' className='feature-button' style={{textDecoration:'none'}} >
        Reports<FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
        </Link>

      </div>
      </div>
    </div>
  )
}

export default FeatureList
