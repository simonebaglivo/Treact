import React from 'react'
import MyContext from '../../../MyContext'

export default function CoverDouble({currentRow}){

    const contesto = React.useContext(MyContext);
    var background1,background2;

    background1 = contesto.datiJson.rows[currentRow].days[0].images[0].image;
    background2= contesto.datiJson.rows[currentRow].days[0].images[1].image;

    return(
        <>
            <div className="cover cover-double mb-2 mr-2" style={{backgroundImage: `url(${background1})`}}></div>
            <div className="cover cover-double mb-2" style={{backgroundImage: `url(${background2})`}}></div>
        </>
    )
}