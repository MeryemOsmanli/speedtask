import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Basket from '../pages/User/Basket'
import { MainContext } from '../context/MainProvider'

function UseNavbar() {
    const {basket}=useContext(MainContext)
  return (
    <div>
       {/* <Link to="/">Home</Link> 
       <Link to="about">About</Link>
       <Link to="/admin" >AdminHome</Link> */}
       <div className="usernav_background">
        <div className="usernav_contain container">
            <div className="navbar_left">
           <img src=" https://preview.colorlib.com/theme/florist/img/logo.png.webp" alt="" />
            </div>
            <div className="navbar_right">
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li> <Link to="about">About</Link></li>
                        <li><Link to="/admin" >AdminHome</Link></li>
                        <li><Link to="wishlist"><i class="fa-regular fa-heart"></i></Link> </li>
                        <li><Link to="basket"><i class="fa-solid fa-bag-shopping"></i>{basket.length} </Link></li>
                    </ul>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default UseNavbar
