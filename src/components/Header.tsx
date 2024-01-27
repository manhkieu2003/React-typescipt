import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuHeader from './MenuHeader'
import SearchHeader from './SearchHeader'

const Header = () => {
    return (
      
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">Logo</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <MenuHeader/>
                        <SearchHeader/>
                    </div>
                </div>
            </nav>

        
    )
}

export default Header