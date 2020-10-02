import React from 'react'

function Toolbar(props) {

    const hashToken = localStorage.getItem('hashToken')

    return (
        <div className="Toolbar">
            <div className="nav">
                <a href="#" className='title-header'>
                    <h2>
                        Stormwind
                        <span className='legend-slogan text-small'>Info-Wow!</span>
                    </h2>
                </a>
                <ul className='navbar'>
                    {
                        !hashToken ? (
                            <li className="navbar-item">
                                <span onClick={props.onRefreshToken}>Obtener Token</span>
                            </li>
                        ) : (
                            <li className="navbar-item">
                                <span onClick={props.onClearToken}>Limpiar Token</span>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Toolbar