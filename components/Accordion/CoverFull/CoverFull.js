import React from 'react'
import MyContext from '../../../MyContext'

export default function CoverFull({currentRow}){

    const contesto = React.useContext(MyContext);
    var background1,background2,background3;

    background1 = contesto.datiJson.rows[currentRow].days[0].images[0].image;
    background2 = contesto.datiJson.rows[currentRow].days[0].images[1].image;
    background3 = contesto.datiJson.rows[currentRow].days[0].images[2].image;


    return(
        <>
            <div className="row ml-0">
                <div className="col-12 col-md-auto cover activity-gallery__pics pics-1" style={{backgroundImage: `url(${background1})`}}></div>
                <div className="col-12 col-md-auto cover activity-gallery__pics pics-1" style={{backgroundImage: `url(${background2})`}}></div>
                <div className="col-12 col-md-auto cover activity-gallery__pics pics-2" style={{backgroundImage: `url(${background3})`}}></div>
            </div>
        </>
    )
}