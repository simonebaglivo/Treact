import React from 'react'
import './timeline.css'
import '../../Transfer/transfer.css'
import MyContext from '../../../MyContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default function Timeline({dotted,msDay,date,children}){
    var day,row;
    const contesto = React.useContext(MyContext);
    (children!==undefined) ? (row = children) :
    (row = date-1);
    
    (date===undefined) ? (day = Math.floor((new Date(contesto.city.dayDate) - new Date(contesto.datiJson.dateFrom)) /msDay+1)) :
    (day = date)
    
    return(
        <>
        <div className="col-2 timeline mt-2 text-center">
            <div className="day timeline__icon d-flex flex-column">
            <p className="my-auto" aria-hidden="true"> DAY <span> {day}</span></p>
            </div>
            <div className="map-marker timeline__icon d-flex flex-column my-1">
                <p className="my-auto"><FontAwesomeIcon icon={faMapMarkerAlt}/></p>
            </div>
            {(contesto.datiJson.rows[row].transports.length>0)&&(
                <>
                <div className={`transfer-icon timeline__icon d-flex flex-column my-1 ${contesto.icon[contesto.datiJson.rows[row].transports[0].typology].className}`}>
                    <p className="my-auto"><FontAwesomeIcon icon={contesto.icon[contesto.datiJson.rows[row].transports[0].typology].icon}/></p>
                </div>
                </>
            )}   
            {(dotted) && (<div className="timeline__dotted"/>)}         
        </div>
        </>
    )
}