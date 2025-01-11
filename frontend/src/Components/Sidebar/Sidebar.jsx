import React from 'react'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
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
        <Link to='/' className="feature">
          <FontAwesomeIcon icon={faHome}/>
          <p>Home</p>
        </Link>
        <Link to='/feature/dashboard' className="feature">
          <FontAwesomeIcon icon={faGaugeSimpleHigh}/>
          <p>Dashboard</p>
        </Link>
        <Link to='/feature/billing' className="feature">
          <FontAwesomeIcon icon={faFileInvoiceDollar}/>
          <p>Billing</p>
        </Link>
        <Link to='/feature/inventory' className="feature">
          <FontAwesomeIcon icon={faWarehouse}/>
          <p>Inventory</p>
        </Link>
        <Link to='/feature/finance' className="feature">
          <FontAwesomeIcon icon={faMoneyBills}/>
          <p>Finance</p>
        </Link>
        <Link to='/feature/sales' className="feature">
          <FontAwesomeIcon icon={faMoneyBillTrendUp}/>
          <p>Sales</p>
        </Link>
        <Link to='/feature/customers' className="feature">
          <FontAwesomeIcon icon={faUserGroup}/>
          <p>Customers</p>
        </Link>
        <Link to='/feature/reports' className="feature">
          <FontAwesomeIcon icon={faChartBar}/>
          <p>Reports</p>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
