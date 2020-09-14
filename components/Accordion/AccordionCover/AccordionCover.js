import React from 'react'
import './accordioncover.css'
import MyContext from '../../../MyContext'
import CoverPlus from '../CoverPlus/CoverPlus';
import CoverDouble from '../CoverDouble/CoverDouble';
import CoverFull from '../CoverFull/CoverFull';
import CoverSingle from '../CoverSingle/CoverSingle';

export default function AccordionCover({dateCover,children}){

    const contesto = React.useContext(MyContext);
    //console.log(contesto.city.days[0].images.length);
    
    return(
        <>
        {
            <div className="accordion__cover">
                <p className="accordion__cover__title primary-color">
                    {contesto.datiJson.rows[children].days[0].name}
                    <span className="accordion__date"> {dateCover}</span>
                </p>
                    {(contesto.datiJson.rows[children].days[0].images.length===3) && (<CoverFull currentRow={children}/>)}
                    {(contesto.datiJson.rows[children].days[0].images.length===1) && <CoverSingle currentRow={children}/>}
                    {(contesto.datiJson.rows[children].days[0].images.length===2) && <CoverDouble currentRow={children}/>}
                    {(contesto.datiJson.rows[children].days[0].images.length>3) && (<CoverPlus currentRow={children}/>)}
                
                <div className="accordion__cover__body">
                    <p>
                        {contesto.datiJson.rows[children].days[0].description}
                    </p>
                </div>
            </div>
        }
        </>
    )
}