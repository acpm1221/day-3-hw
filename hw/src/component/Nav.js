import React from 'react'
import "./Nav.css"


const Nav = () => {
  return (
    <div className='mainDiv'>
        <div className='left'>
            <img src="https://flowbite.com/docs/images/logo.svg" alt="" srcset="" />
            <p className='heading'>GeekFoods</p>
        </div>
        <div className='menu'>
            <ul>
                
                
                <li>Resturants</li>
                <li>Foods</li>
                <li>Conatct</li>
            </ul>
        </div>
        <div className='right'>
            <button>Get Started</button>
        </div>
    </div>
  )
}

export default Nav