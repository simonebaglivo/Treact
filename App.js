import React, { useEffect, useState } from 'react';
import './App.css';
import Cover from './components/Cover/Cover'
import MyContext from './MyContext'
import Mappa from './components/Mappa/Mappa';
import Banner from './components/Banner/Banner';
import { faCar, faTaxi, faBus } from '@fortawesome/free-solid-svg-icons'
import AccordionFooter from './components/AccordionFooter/AccordionFooter';
import Tariffe from './components/AccordionFooter/Tariffe/Tariffe';
import Note from './components/AccordionFooter/Note/Note';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

const urlJSON = 'http://51.77.82.133:86/api/quotations/QUO_5e5e2952ae57f#'
const auxArray = [];
let newEle = false;

const iconTransfer = [];
iconTransfer['auto_privata']={icon: faCar, className:'icon-transfer-car', nome:'Auto'}
iconTransfer['transfer']={icon: faTaxi, className:'icon-transfer-transfer', nome:'Transfer'}
iconTransfer['bus']={icon: faBus, className:'icon-transfer-bus', nome:'Bus'}

const filterArray = (rowsJson) =>{
	rowsJson.filter(differentCity);
	function differentCity(value) {
		(auxArray.length === 0) ? (auxArray.push(value)) :
		auxArray.map(ele=>{
			if(value.place.name === ele.place.name){
				newEle = false;
				return;
			} else (newEle = true);
		})
		if(newEle){			
			auxArray.push(value);
			newEle = false;
		} 
	}	
}

export default function App() {
	//sto creando una variabile di stato e la inizializzo ad un oggetto vuoto
	const [datiJson, setDatiJson] = useState(null)
	const [newCity, setNewCity] = useState([])
	//al mounting 
	useEffect(() => {
    const getDati = async () => {
		const dati$ = await fetch(urlJSON).then(res => res.json())
		  setDatiJson(dati$.results.data)
		  filterArray(dati$.results.data.rows);
		  setNewCity(auxArray);
		}
		getDati()
	}, [])
	
	if (datiJson !== null && newCity.length !== 0) {
	return (
		<>
		<Navbar/>
		<MyContext.Provider value={datiJson}>
			<Cover/>,
			<MyContext.Provider value={newCity}>
				<Mappa date={{dateStart: datiJson.dateFrom, dateEnd: datiJson.dateTo}}>
					{datiJson.partecipantsNum}
				</Mappa>
				<MyContext.Provider value={datiJson}>
					<Banner/>
				</MyContext.Provider>
				<div id="#daycard">
				{
					newCity.map((city,i)=>{
						
						return(
							<MyContext.Provider value={{city:city, newCity:newCity, icon: iconTransfer, datiJson: datiJson}} key={city.id}>
								<AccordionFooter titolo={city.place.name} i={i}/>
							</MyContext.Provider>
						)
						
					})
				}
				</div>
			</MyContext.Provider>
			<div id="#info">
				<AccordionFooter titolo='tariffe'>
					<Tariffe/>
				</AccordionFooter>
				<AccordionFooter titolo='note'>
					<Note titolo ='note' percorso={datiJson.note}/>
				</AccordionFooter>
				<AccordionFooter titolo='documenti richiesti'>
					<Note titolo ='documenti richiesti' percorso={datiJson.documentsRequested.description}/>
				</AccordionFooter>
				<AccordionFooter titolo='assicurazione'>
					<Note titolo ='assicurazione' percorso={datiJson.documentsInsurance.description}/>
				</AccordionFooter>
				<AccordionFooter titolo='condizioni di cancellazione'>
					<Note titolo ='condizioni di cancellazione' percorso={datiJson.documentsCancellation.description}/>
				</AccordionFooter>
				<AccordionFooter titolo='condizioni di pagamento'>
					<Note titolo ='condizioni di pagamento' percorso={datiJson.documentsPayment.description}/>
				</AccordionFooter>
			</div>
			<Footer/>
		</MyContext.Provider>
		</>
		);
	}else{
    return <></>
  }
}

