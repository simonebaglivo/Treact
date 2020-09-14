import React from 'react'
import MyContext from '../../../MyContext'

export default function CoverSingle({currentRow}){
    const contesto = React.useContext(MyContext);
    var background1;
    (background1 = contesto.datiJson.rows[currentRow].days[0].images[0].image)

    return(
        <div className="cover mb-2" style={{backgroundImage: `url(${background1})`}}/>
    )
}