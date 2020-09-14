import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import './modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faStar } from '@fortawesome/free-solid-svg-icons';


export default function Modal({open,children,type}){
    const modaleDiv = document.getElementById('modale');
    let stars=[];
    
    const [modal,setModal] = useState(true);
    
    useEffect(() => {
        setModal(true);
      },[open]);

    const closeModal = () =>{
        setModal(false)
    }

    if(type==="accomodation"){
        for(let i=0;i<children[2].modalStars;i++){
            stars.push('faStar')
        }
    }
    
    return ReactDom.createPortal(
        (modal)?(
        <>
        <div className="modal-opacity"></div>
        <div className="modale bg-white container">
            <div className="row">
                <div className="col-12 d-flex mt-2">
                    <span className="modale__title mr-auto my-auto">{children[0]}</span>
                    <span><button className="btn btn-light tertiary-color shadow" 
                    onClick={closeModal}><FontAwesomeIcon icon={faTimes} className="mr-2"/> Close</button></span>
                </div>
            </div>
            <hr/>
            <div className="container">
            {(type==="gallery")&&(
                <div className="row">
                    { children.map(ele=>{
                        return <div className="col-6" key={ele.id}>
                                   <div className="img-fluid img-modal" style={{backgroundImage: `url(${ele})`}}/>
                               </div>
                    })}
                </div>
            )}
            <p>
                {(type==="transfer")&&
                children[3]}
                {(type==="accomodation")&&
                stars.map((ele,i)=>{
                    return <FontAwesomeIcon icon={faStar} className="mr-2" key={i}/>
                })
                }
                {(type==="accomodation")&&(children[2].stars === '5 Stelle Lusso')&&(' L')}

            </p>
            {(type==="transfer")&&(
            <div className="row">
                <div className={`col-12 col-md-1 icon-transfer text-center mr-3 p-3 ${children[2]}`}>
                    {<FontAwesomeIcon icon={children[1]} className="mr-2" style={{fontSize: '65px'}}/> }
                </div>
            </div>)
            }
            {(type==="accomodation")&&(
                <div className="row">
                    <div className="col">
                        <div className="img-fluid img-modal" style={{backgroundImage: `url(${children[1][0].image})`}}/>
                    </div>
                    <div className="col">
                     <div className="img-fluid img-modal" style={{backgroundImage: `url(${children[1][1].image})`}}/>
                    </div>
                    <div className="col">
                        <div className="img-fluid img-modal" style={{backgroundImage: `url(${children[1][2].image})`}}/>
                    </div>
                </div>
            )
            }
            {(type==="activities")&&(
                
                <div className="row">
                    <div className="col">
                        <div className="img-fluid img-modal" style={{backgroundImage: `url(${children[1][0].image})`}}/>
                    </div>
                    {(children[1].length>1)&&(
                    <div className="col">
                     <div className="img-fluid img-modal" style={{backgroundImage: `url(${children[1][1].image})`}}/>
                    </div>)}
                </div>
            )
            }
            <div className="modale__description my-2">
            {(type==="transfer"||type==="activities")&&(
                <p>{children[4]}</p>
            )}

            {(type==="accomodation")&&(
                <>
                <p>{children[4]}</p>
                <p>{children[5]}</p>
                <p>{children[6]}</p>
                <p>{children[7]}</p>
                <a href={children[8]}>
                    <p>{children[8]}</p></a>
                
                </>
            )}
            </div>
            {(type==="transfer")&&(
            <div className="accordion__transfer__location fw-6">
                <div className="row">
                    <div className="col-3 col-md-1 align-self-center">DA</div>
                    <div className="col pl-0">
                        <button className="btn btn-outline-primary btn-outline-primary-this">{children[5]}</button>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-3 col-md-1 align-self-center">A</div>
                    <div className="col pl-0">
                        <button className="btn btn-outline-primary btn-outline-primary-this">{children[6]}</button>
                    </div>
                </div>
            </div>)}
        </div>
        </div>
        </>):
        null
        ,modaleDiv
    )

    
}