import React from 'react';
import './Backdrop.css';

const Backdrop = props => (
    <div className="Backdrop"  >
        {props.children}
    </div>
);

export default Backdrop;