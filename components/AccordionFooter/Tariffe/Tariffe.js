import React from 'react'
import './tariffe.css'
import MyContext from '../../../MyContext'

export default function Tariffe(){

    const contesto = React.useContext(MyContext);
    
    return(
        <div className="accordion__price black container-content mr-5">
            <div className="single__price">
                <p className="mb-0">Prezzo a persona</p>
                <p className="primary-color">{contesto.partecipants[0].price} €</p>
            </div>
            <hr/>
            {contesto.partecipants.map((ele,i)=>{
                return (
                <div className="first__price d-flex" key={ele.id}>
                    <span>Persona {i+1} </span><span className="ml-auto secondary-color">{contesto.partecipants[i].price} €</span>
                </div>)
            })}
            <hr/>
            <div className="total__price text-right">
                <p className="mb-0">Totale</p>
                <p className="primary-color">{((contesto.priceTotal) / 100).toFixed(2) + '€'}</p>
            </div>
            <div className="price__included secondary-color">
                <p className="primary-color">Cosa Comprende il prezzo</p>
                <p>{contesto.included}</p>
            </div>
            <div className="price__included secondary-color">
                <p className="primary-color">Cosa Non Comprende il prezzo</p>
                <p>{contesto.notIncluded}</p>
            </div>
        </div>
    )
}