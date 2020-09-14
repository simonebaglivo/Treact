import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'
import './modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes} from '@fortawesome/free-solid-svg-icons'
//import MyContext from '../../MyContext'


export default function ModalGallery({open,children}){
    const modaleDiv = document.getElementById('modale');
    
    const [modal,setModal] = useState(true);
    
    useEffect(() => {
        setModal(true);
      },[open]);

    const closeModal = () =>{
        setModal(false)
    }

   
    return ReactDom.createPortal(
        (modal)?(
        <>
        <div className="modal-opacity"></div>
        <div className="modale bg-white container">
            <div className="row">
                <div className="col-12 d-flex mt-2">
                    <span className="modale__title mr-auto my-auto">Immagini</span>
                    <span><button className="btn btn-light tertiary-color shadow" 
                    onClick={closeModal}><FontAwesomeIcon icon={faTimes} className="mr-2"/> Close</button></span>
                </div>
            </div>
            <hr/>
            <div className="container">
                <div className="row">
                    { children.map(ele=>{
                        return <div className="col-6" key={ele.id}>
                                    <div className="img-fluid img-modal mb-3" style={{height: '100px', backgroundImage: `url(${ele.image})`}}/>
                                </div>
                    })}
                </div>
            </div>
        </div>
        </>):
        null
        ,modaleDiv
    )

    
}