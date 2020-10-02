import React from 'react';

function Button(props) {
    return (
        <button className='button btn-primary' onClick={props.clicked} disabled={props.loading}>{props.children}</button>
    )
}

export default Button;
