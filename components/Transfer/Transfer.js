import React from 'react'
import './transfer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MyContext from '../../MyContext'
import Modal from '../Modal/Modal';
import { useState } from 'react';

export default function Transfer({currentRow}){

    let className,icon,nome,p,description,departure,arrival;
    let rend = true;
    
    const contesto = React.useContext(MyContext);

    const [modal,setModal] = useState(false);
    const [open,setOpen] = useState(false);
    
    if (contesto.datiJson.rows[currentRow].transports.length>0){
        className = contesto.icon[contesto.datiJson.rows[currentRow].transports[0].typology].className;
        icon = contesto.icon[contesto.datiJson.rows[currentRow].transports[0].typology].icon;
        nome = contesto.icon[contesto.datiJson.rows[currentRow].transports[0].typology].nome;
        p = contesto.datiJson.rows[currentRow].transports[0].name;
        description = contesto.datiJson.rows[currentRow].transports[0].description;
        departure = contesto.datiJson.rows[currentRow].transports[0].departure.name;
        arrival = contesto.datiJson.rows[currentRow].transports[0].arrival.name;
    }else rend = false;

    const showModale = () =>{
        setModal(true);
        setOpen(!open);
    }
    
    return(
        (rend)?(
            <>
            <div className="accordion__transfer">
                <div className="row">
                    <div className={`col-12 col-md-1 icon-transfer text-center mr-3 p-3 ${className}`}>
                        <FontAwesomeIcon icon={icon} style={{fontSize: '65px'}}/>
                    </div>
                    <div className="col">
                        <p className="h5 title">
                            {p}
                        </p>
                        <div className="accordion__transfer__body">
                            <div className="accordion__transfer__description">
                                <p>
                                    {description} <button className="ml-2 btn btn-outline-secondary br-1" onClick={showModale}><span className="more" > Scopri di più</span></button>
                                    {(modal)&&
                                    <Modal open={open} type={'transfer'}>
                                        {p}{icon}{className}{nome}{description}{departure}{arrival}
                                    </Modal>
                                    }
                                </p>
                            </div>
                            <div className="accordion__transfer__location fw-6">
                                <div className="row">
                                    <div className="col-3 col-md-1 align-self-center">DA</div>
                                    <div className="col pl-0">
                                        <button className="btn btn-outline-primary btn-outline-primary-this">{departure}</button>
                                    </div>
                                </div>
                                <div className="row my-2">
                                    <div className="col-3 col-md-1 align-self-center">A</div>
                                    <div className="col pl-0">
                                        <button className="btn btn-outline-primary btn-outline-primary-this">{arrival}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        ):(
            <></>
        )
    )
}