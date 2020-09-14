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


export default function({i,children}){
    var dotted,dateCover;
    const contesto = React.useContext(MyContext);
    console.log(children);
    
    return(
        <>
            <section className="row accordion container br-1 bg-white my-3">
                
                {/* col-2 */}
                <Timeline dotted={true} msDay={children[0]}>
                    {new Date(contesto.city.dayDate).getDate()-1}
                </Timeline>
                <div className="col">
                    <div className="accordion__body mr-5">
                        <AccordionCover dateCover = {children[1]}>
                            {new Date(contesto.city.dayDate).getDate()-1}
                        </AccordionCover>
                    </div>
                    {(contesto.city.transports.length>0)&&<Transfer currentRow = {new Date(contesto.city.dayDate).getDate()-1}/>}
                    <Accomodation date={children[2]} remember={false}/>
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
                        (children[3] > new Date(ele.dayDate) || children[3] >= new Date(contesto.datiJson.dateTo))){
                            dateCover = new Date(ele.dayDate).getDate() + ' ' +  children[5][new Date(ele.dayDate).getMonth()]
                            return(
                                <div className="row mx-0" key={ele.id}>
                                    {(new Date(ele.dayDate).getDate()===children[6])?(dotted=false):(dotted=true)}
                                    <Timeline dotted={dotted} msDay={children[0]} date={index+1}/>
                                    <div className="col">
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
                                        {<Accomodation date={children[2]} remember={true}/>}
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
                
            </section>
        </>
    )
}