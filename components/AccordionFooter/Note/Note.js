import React from 'react'

export default function Note({titolo, percorso}){
    return(
        (percorso === null) ?(
        <p className="container-content mr-5">Non ci sono {titolo}</p>):
        (<p className="container-content mr-5">{percorso}</p>)
    )
}