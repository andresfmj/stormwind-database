import React from 'react'

function Toolbar(props) {

    return (
        <div className="Toolbar">
            <div className="nav">
                <a href="#" className='title-header'>
                    <h2>
                        Stormwind
                        <span className='legend-slogan text-small'>Your WoW Data at your pocket!</span>
                    </h2>
                </a>
                <ul className='navbar'>
                    <li className="navbar-item">
                        <a href="#">About</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Toolbar