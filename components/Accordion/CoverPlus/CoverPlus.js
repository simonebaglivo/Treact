import React, { useState } from 'react'
import './coverplus.css'
import MyContext from '../../../MyContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import ModalGallery from '../../Modal/ModalGallery';

export default function CoverPlus({currentRow}){
    const contesto = React.useContext(MyContext);
    
    var background1,background2,background3,length;

    background1 = contesto.datiJson.rows[currentRow].days[0].images[0].image;
    background2 = contesto.datiJson.rows[currentRow].days[0].images[1].image;
    background3 = contesto.datiJson.rows[currentRow].days[0].images[2].image;
    length = contesto.datiJson.rows[currentRow].days[0].images.length;

    const [modale,setModale] = useState(false);
    const [opened,setOpened] = useState(false);

    const openModal = () =>{
        setModale(true);
        setOpened(!opened);
    }
    
    return(
        <>
            <div className="row ml-0">
                <div className="cover activity-gallery__pics pics-1" style={{backgroundImage: `url(${background1})`}}></div>
                <div className="cover activity-gallery__pics pics-1" style={{backgroundImage: `url(${background2})`}}></div>
                <div className="cover activity-gallery__pics pics-2 d-flex flex-column" style={{backgroundImage: `url(${background3})`}}>
                    <div className="pics-2-filter mt-auto text-right">
                        <div className="d-flex flex-column">
                            <p className="my-auto" onClick={openModal} style={{cursor: 'pointer'}}>
                                <FontAwesomeIcon icon={faImage}/>
                                + {(length)-3}
                            </p>
                            {(modale)&&<ModalGallery open={opened}>
                                        {contesto.datiJson.rows[currentRow].days[0].images}
                                    </ModalGallery> }
                        </div>
                    </div>    
                </div>
            </div>
        </>
    )
}