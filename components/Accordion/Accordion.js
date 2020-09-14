import React, { useState } from 'react'
import MyContext from '../../MyContext'
import './accordion.css'
import '../Transfer/transfer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import AccordionCover from './AccordionCover/AccordionCover'
import Transfer from '../Transfer/Transfer'
import Accomodation from './Accomodation/Accomodation'
import Timeline from './Timeline/Timeline'
import Included from './Included/Included'
import Activities from './Activites/Activities'


export default function({i}){

    const contesto = React.useContext(MyContext);
    //console.log(contesto);
    /* Date */
    var dayEnd,monthEnd,accomodation,dateEnd,dotted;
    
    const monthNames = [
        "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
        "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
    ];

    const msDay = 1000 * 60 * 60 * 24;

    const dateStart = new Date(contesto.newCity[i].dayDate)
    const dayStart = dateStart.getDate();
    const monthStart = monthNames[dateStart.getMonth()];
    let dateCover = dayStart + ' ' + monthStart;
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
    
    /* Fine Calcolo Date */
    
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
                                <p className="accordion__title my-auto">{contesto.city.place.name} 
                                    <span className="accordion__date"> {dateAccordion}</span>
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
                <div className={`row mt-3 accordion-body ${(!accordionOpen)&&'accordion-closed'}`}>
                    {/* col-2 */}
                    <Timeline dotted={true} msDay={msDay}>
                        {new Date(contesto.city.dayDate).getDate()-1}
                    </Timeline>
                    <div className="col-10">
                        <div className="accordion__body mr-5">
                            <AccordionCover dateCover = {dateCover}>
                                {new Date(contesto.city.dayDate).getDate()-1}
                            </AccordionCover>
                        </div>
                        {(contesto.city.transports.length>0)&&<Transfer currentRow = {new Date(contesto.city.dayDate).getDate()-1}/>}
                        <Accomodation date={accomodation} remember={false}/>
                        {
                            (contesto.city.activities.length>0)&&(
                            <Activities>
                                {new Date(contesto.city.dayDate).getDate()-1}
                            </Activities>)

                        }
                    </div>
                    {/* col-2 */}
                    {
                        contesto.datiJson.rows.map((ele,index)=>{
                            if(new Date(contesto.newCity[i].dayDate) < new Date(ele.dayDate) && 
                            (dateEnd > new Date(ele.dayDate) || dateEnd >= new Date(contesto.datiJson.dateTo))){
                                dateCover = new Date(ele.dayDate).getDate() + ' ' +  monthNames[new Date(ele.dayDate).getMonth()]
                                return(
                                    <div className="row mx-0" key={ele.id}>
                                        {(new Date(ele.dayDate).getDate()===dayEnd)?(dotted=false):(dotted=true)}
                                        <Timeline dotted={dotted} msDay={msDay} date={index+1}/>
                                        <div className="col-10">
                                            <div className="accordion__body mr-5">
                                                <AccordionCover dateCover = {dateCover}>
                                                    {index}
                                                </AccordionCover>
                                            </div>
                                            {
                                                (contesto.datiJson.rows[index].transports.length>0)&&
                                                (<Transfer currentRow ={index}/>)
                                            }
                                            {(contesto.datiJson.rows[index].included !== null)&& 
                                            (<Included includes = {contesto.datiJson.rows[index].included}/>)}
                                            {<Accomodation date={accomodation} remember={true}/>}
                                            {(contesto.datiJson.rows[index].activities.length>0)&&(
                                            <Activities>
                                                {index}
                                            </Activities>)
                                            }
                                        </div>
                                    </div>
                                )
                            }else return null
                        })
                    }
                    
                </div>
            </section>
        </>
    )
}