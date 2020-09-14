import React from 'react'
import './mappa.css'
import Map from './Map'
import MyContext from '../../MyContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


export default function Mappa({date,children}){
    
    const monthNames = [
        "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
        "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
    ];

    const dayStart = new Date(date.dateStart).getDate();
    const monthStart = monthNames[new Date(date.dateStart).getMonth()];
    const yearStart = new Date(date.dateStart).getFullYear();
    const dayEnd = new Date(date.dateEnd).getDate();
    const monthEnd = monthNames[new Date(date.dateEnd).getMonth()];
    const yearEnd = new Date(date.dateStart).getFullYear();

    const contesto = React.useContext(MyContext);
    
    return(
        <>
        <section className="card-map bg-white br-1" id="#map">
            <div className="card-map__head">
                <Map/>
            </div>
            <div className="container-content">
                <p className="card-map__body__title primary-color">
                    Il mio viaggio in Sicilia
                </p>
                <p className="card-map__body__item">
                    {
                        contesto.map(ele=>{
                            return ele.place.name + ' > '
                        })
                    }
                    {contesto[0].place.name}
                    
                </p>
                <ul className="card-map__body__ul">
                    <li className="secondary-color">
                        <FontAwesomeIcon  className="primary-color mr-2"  icon={faArrowRight} />
                        dal {(dayStart)} {(monthStart !== monthEnd)&&(monthStart)}{(yearStart !== yearEnd)&&(yearStart)} al {(dayEnd)} {monthEnd} {yearEnd}
                    </li>
                    <li className="secondary-color">
                        <FontAwesomeIcon  className="primary-color mr-2"  icon={faArrowRight} />{children} adulti
                    </li>
                </ul>
            </div>
        </section>
        </>
    )
}