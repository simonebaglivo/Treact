import React from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import MyContext from '../../MyContext'

export default function App() {
    const contesto = React.useContext(MyContext);
    const latitude = contesto[0].place.latitude;
    const longitude = contesto[0].place.longitude;
    
    return (
        <Map center={[latitude,longitude]} zoom={8}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {
            contesto.map(mark => (
            <Marker
            key={mark.id}
            position={[
                mark.place.latitude,
                mark.place.longitude
            ]}
            
            />
      ))}
        </Map>
    );
}