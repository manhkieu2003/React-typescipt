import React from 'react'
import { NavLink } from 'react-router-dom'
const MenuHeader = () => {
  return (
    <div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/product">Product</NavLink>
                            </li>
                           
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/amin/dashboard">Dashboard</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/amin/product">ManaProducts</NavLink>
                            </li>
                        
                        </ul>
    </div>
  )
}

export default MenuHeader