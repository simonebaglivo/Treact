import React, { useState } from 'react'
import MyContext from '../../../MyContext'
import Modal from '../../Modal/Modal';

export default function Activities({children}){

    const [modal,setModal] = useState(false);
    const [open,setOpen] = useState(false);

    const showModale = () =>{
        setModal(true);
        setOpen(!open);
    }

    const contesto = React.useContext(MyContext);

    return(
        <>
        <div className="accordion__transfer my-5">
            <div className="row ml-0">
                <div className="col-12 col-md-3 p-0">
                    <img className="img-fluid" src={contesto.datiJson.rows[children].activities[0].images[0].image} alt="pranzo"/>
                </div>
                <div className="col">
                    <p className="h5 title">
                        {contesto.datiJson.rows[children].activities[0].name}
                    </p>
                    <div className="accordion__transfer__body">
                        <div className="accordion__transfer__description">
                            <p>
                                {contesto.datiJson.rows[children].activities[0].description}
                                <button className="btn btn-outline-secondary ml-2 br-1" onClick={showModale}><span className="more">Scopri di più</span></button>
                                { (modal)&&
                                <Modal open={open} type='activities'>
                                    {contesto.datiJson.rows[children].activities[0].name}{contesto.datiJson.rows[children].activities[0].images}{''}{''}
                                    {contesto.city.accomodations[0].description}
                                </Modal> }
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}