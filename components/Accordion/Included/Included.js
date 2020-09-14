import React from 'react';
import './included.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function Included({includes}){
    return(
        <div className="included__check my-5 text-right">
            <p className="mr-5">
                <span className="check-true">
                    <FontAwesomeIcon icon={faCheck}/>
                </span>
                    {includes}
            </p>
        </div>
    )
}