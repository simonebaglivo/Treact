import React from 'react'
import './cover.css'
import MyContext from '../../MyContext'

export default function Cover(){
    const contesto = React.useContext(MyContext);
    return(
    <header className="cover" id="#home" style={{backgroundImage:`url(${contesto.images[0].image})`}}>
        <div className="cover__filter filter"/>
        <div className="cover__copy__section">
            <div className="cover__copy">
                <h1>Per {contesto.customerName}</h1>
                <h2 className="my-3">{contesto.title}</h2>
                <button className="btn btn-primary cover__button mt-3">SCOPRI DI PIÙ</button>
            </div>
        </div>
    </header>
    )
}