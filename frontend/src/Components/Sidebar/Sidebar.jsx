import React from 'react'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar, faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faFileInvoiceDollar, faGaugeSimpleHigh, faHome, faMoneyBills, faMoneyBillTrendUp, faUserGroup, faWarehouse } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className='sidebar-cont'>
      <div className="sidebar-profile">
        <FontAwesomeIcon className='icon' icon={faCircleUser}/>
        <div className="sidebar-user">
          <span className='username'>Username</span>
          <span className='useremail'>username@ravi.co.in</span>
        </div>
      </div>
      <div className="sidebar-features">
        <div className="feature">
          <FontAwesomeIcon icon={faHome}/>
          <p>Home</p>
        </div>
        <div className="feature">
          <FontAwesomeIcon icon={faGaugeSimpleHigh}/>
          <p>Dashboard</p>
        </div>
        <div className="feature">
          <FontAwesomeIcon icon={faFileInvoiceDollar}/>
          <p>Billing</p>
        </div>
        <div className="feature">
          <FontAwesomeIcon icon={faWarehouse}/>
          <p>Inventory</p>
        </div>
        <div className="feature">
          <FontAwesomeIcon icon={faMoneyBills}/>
          <p>Finance</p>
        </div>
        <div className="feature">
          <FontAwesomeIcon icon={faMoneyBillTrendUp}/>
          <p>Sales</p>
        </div>
        <div className="feature">
          <FontAwesomeIcon icon={faUserGroup}/>
          <p>Customers</p>
        </div>
        <div className="feature">
          <FontAwesomeIcon icon={faChartBar}/>
          <p>Reports</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
