import React from 'react'
import './banner.css'
import MyContext from '../../MyContext'

export default function Banner (){
    const contesto = React.useContext(MyContext);
    return(
        <>
        <section className="banner container bg-white my-2 br-1" id="#about">
            <div className="container-content py-0">
                <div className="row">
                    <div className="col-12 col-lg-5 pl-0">
                        <div className="row referente">
                            <div className="col referente__img">
                                <img className="img-fluid banner__img" src={contesto.operator.image} alt="referente"/>
                            </div>
                            <div className="col referente__data px-0 d-flex flex-column">
                                <div className="referente__data__title mb-auto">
                                    <p>Il tuo referente è <span className="primary-color">{contesto.operator.name}</span></p>
                                </div>
                                <div className="referente__data__body">
                                    <p>Tel: <a href={`tel: ${contesto.operator.contact.phone}`}>{contesto.operator.contact.phone}</a></p>
                                    <p>Email: <a href={`mailto: ${contesto.operator.contact.email}`}>{contesto.operator.contact.email}</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col div__separator"><div className="separator"></div></div>
                    <div className="col-12 col-md-6 agenzia pl-2 d-flex flex-column">
                        <div className="agenzia__img mb-auto">
                            {(contesto.agency.image!==null)?(
                                <img className="img-fluid banner__img banner__image-agenzia" src={contesto.agency.image} alt={contesto.agency.name}/>
                            ):
                            (
                                <p className="h4">{contesto.agency.name}</p>
                            )}
                        </div>
                        <div className="agenzia__data">
                            <p>{contesto.agency.name} | (Licence nr. {contesto.agency.licenseNumber}) </p>
                            <p>{contesto.agency.contact.address}</p>
                            <p><a href={contesto.agency.contact.website}>{contesto.agency.contact.website}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}