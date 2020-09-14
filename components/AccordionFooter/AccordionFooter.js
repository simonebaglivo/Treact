import React, { useState } from 'react'
import '../Accordion/accordion.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import MyContext from '../../MyContext'
import AccordionHome from '../Accordion/AccordionHome'

export default function({children,titolo,i}){

    const contesto = React.useContext(MyContext);

    var dayEnd,monthEnd,accomodation,dateEnd;
    
    const msDay = 1000 * 60 * 60 * 24;
    const monthNames = [
        "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
        "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
    ];
    if(i!==undefined){

        const dateStart = new Date(contesto.newCity[i].dayDate)
        const dayStart = dateStart.getDate();
        const monthStart = monthNames[dateStart.getMonth()];
        var dateCover = dayStart + ' ' + monthStart;
        var dateAccordion = dayStart;

        if(contesto.newCity[i+1]!==undefined){
            dateEnd = new Date(contesto.newCity[i+1].dayDate)
            dayEnd = dateEnd.getDate()-1;
            monthEnd = monthNames[dateEnd.getMonth()];
            
        }else{
            dateEnd = new Date(contesto.datiJson.dateTo);
            dayEnd = dateEnd.getDate();
            monthEnd = monthNames[dateEnd.getMonth()];
        }

        if(dayStart===dayEnd&&monthStart===monthEnd){
            dateAccordion += ' ' + monthStart;
            accomodation = Math.floor((dateEnd - dateStart) / msDay)
            
        }else{
            if(monthStart!==monthEnd){
                dateAccordion += ' ' + monthStart + ' - ' + dayEnd + ' ' + monthEnd;
                accomodation = Math.floor((dateEnd - dateStart) / msDay)
            }else{
                dateAccordion += ' - ' + dayEnd + ' ' + monthEnd;
                accomodation = dayEnd - dayStart;
            }        
        }
    }
  
    const [accordionOpen, setAccordionOpen] = useState(false)

    const openAccordion = () => {
        setAccordionOpen(!accordionOpen);
    }

    
    return(
        <>
            <section className="accordion container br-1 bg-white my-3">
                <div className="accordion__head">
                    <div className="container-content"> 
                        <div className="row">
                            <div className="col-11 d-flex flex-column">
                                <p className={`accordion__title ${(i===undefined)&&'accordion__title-footer'} my-auto`}>{titolo} {(i!==undefined)&&
                                (<span className="accordion__date">{dateAccordion}</span>)}
                                </p>
                            </div>
                            <div className="col-1 d-flex flex-column" onClick={openAccordion}>
                                <span className="icon-arrow my-auto">
                                    <FontAwesomeIcon icon={faArrowDown} rotation={(accordionOpen ? 180 : 0)}/>
                                </span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                    <div className={`mt-3 accordion-body ${(!accordionOpen)&&'accordion-closed'}`}>
                        {(i===undefined)?(children):(
                            <AccordionHome i={i}>
                                {msDay}{dateCover}{accomodation}{dateEnd}{dateCover}{monthNames}{dayEnd}
                            </AccordionHome>
                        )}
                        
                    </div>
            </section>
        </>
    )
}