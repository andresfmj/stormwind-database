import React from 'react'


function Results(props) {

    return (
        <div className="results">
            {
            props.loading 
                ? (<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>)
                : 
                props.items.length > 0 
                ?
                (
                    <ul className='card-container'>
                    {props.items.map(v => (
                        <li key={v.id} className='card-inner text-center'>
                            <div className="card">
                                <div className='quality text-small'>{v.quality}</div>
                                <div className='card-body'>
                                    <h6>{v.name}</h6>
                                    <img src={v.icon} alt='' />
                                    <ul className='items-attributes'>
                                        <li>Equipable: {v.is_equippable}</li>
                                        <li>Nivel: {v.level}</li>
                                        <li>Nivel requerido: {v.required_level}</li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    ))}
                    </ul>
                )
                : <p>Not found any item</p>
            }
        </div>
    )
}

export default Results
