import React, { useState } from 'react'
import './accomodation.css'
import MyContext from '../../../MyContext'
import Modal from '../../Modal/Modal';
import ModalGallery from '../../Modal/ModalGallery';

export default function Accomodation({date,remember}){

    const [modal,setModal] = useState(false);
    const [open,setOpen] = useState(false);
    const [modale,setModale] = useState(false);
    const [opened,setOpened] = useState(false);

    const showModale = () =>{
        setModal(true);
        setOpen(!open);
    }

    const openModal = () =>{
        setModale(true);
        setOpened(!opened);
    }
    
    const contesto = React.useContext(MyContext);
    let stars;
    (contesto.city.accomodations[0].stars === '5_Luxury') ? (stars = {stars : '5 Stelle Lusso', modalStars: 5}) :
     (stars = {stars : contesto.city.accomodations[0].stars +  "Stelle", modalStars : contesto.city.accomodations[0].stars})
    
    return(
        (!remember)?(
        <>
        <div className="row accordion__gallery pl-0 mb-5">
            <div className="col-12">
                <p className="reminder mt-3">
                    Pernottamento {date} notte
                </p>
            </div>
            <div className="col-12 col-md-7">
                <div className="row">
                    <div className="col-6 col-md-5 mb-2 pm-l pr-0">
                        <div className="cover cover__acomodation-big" style={{backgroundImage: `url(${contesto.city.accomodations[0].images[0].image})`}}/>
                    </div>
                    <div className="col-6 col-md-5 mb-2 pm-r">
                    <div className="cover cover__acomodation-big" style={{backgroundImage: `url(${contesto.city.accomodations[0].images[1].image})`}}/>
                    </div>
                    <div className="col-12 col-md-2 d-flex flex-column p-0">
                        <div className="cover cover__acomodation-small mb-auto" style={{backgroundImage: `url(${contesto.city.accomodations[0].images[2].image})`}}/>
                        <div className="accordion__gallery__pics text-center my-2">
                            <div className="accordion__gallery__pics__filter filter d-flex flex-column" style={{zIndex:"1"}}>
                            <span onClick={openModal} className="text-white my-auto" style={{cursor: 'pointer'}}>+{(contesto.city.accomodations[0].images.length)-4}</span>
                            </div>
                            { (modale)&&
                            <ModalGallery open={opened}>
                                {contesto.city.accomodations[0].images}
                            </ModalGallery> }
                            <div className="cover cover__acomodation-small" style={{backgroundImage: `url(${contesto.city.accomodations[0].images[3].image})`}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col accordion__gallery__description mx-2">
                <div className="h5 title">
                    {contesto.city.accomodations[0].name} {stars.stars}
                </div>
                <button className="btn btn-outline-primary btn-outline-primary-this mb-4">{contesto.city.accomodations[0].places[0].name}</button>
                <div className="accordion__gallery__description__body">
                    <p>
                        {contesto.city.accomodations[0].description} 
                    </p>
                    <p>
                        <button className="btn btn-outline-secondary br-1 ml-2" onClick={showModale}><span className="more">Scopri di più</span></button>
                        { (modal)&&
                            <Modal open={open} type='accomodation'>
                                {contesto.city.accomodations[0].name}{contesto.city.accomodations[0].images}{stars}
                                {contesto.city.accomodations[0].position}{contesto.city.accomodations[0].description}
                                {contesto.city.accomodations[0].descriptionRestaurant}
                                {contesto.city.accomodations[0].descriptionRooms}
                                {contesto.city.accomodations[0].descriptionServices}
                                {contesto.city.accomodations[0].contact.website}
                            </Modal> }
                        
        </p>
                </div>
            </div>
        </div>
        </>):
        (<>
        <p className="reminder">
            Ricorda che pernotti al <span className="reminder black"> {contesto.city.accomodations[0].name} {stars.stars} </span>
        </p>
        </>)
    )
}
