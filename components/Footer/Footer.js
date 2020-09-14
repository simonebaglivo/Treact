import React from 'react'
import './footer.css'
import MyContext from '../../MyContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

export default function(){

    const contesto = React.useContext(MyContext);

    return(
        <>
        <footer className="footer">
            <div className="container">
                <div className="row container-content">
                    <div className="col-10 align-self-center">
                        <p className="mb-0">{contesto.agency.name} | (Licence nr. {contesto.agency.licenseNumber}) </p>
                        <p>{contesto.agency.contact.address}</p>
                    </div>
                    <div className="col-2 align-self-center">
                        <button className="btn btn-light tertiary-color">
                            <FontAwesomeIcon icon={faDownload}/>
                            Download
                        </button>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}