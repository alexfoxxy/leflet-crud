import React from 'react'
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import '../../assets/leaflet/leaflet.css';
import '../map/map.css';

import markerIcon from '../../assets/leaflet/images/marker-icon.png';
import markerShadow from '../../assets/leaflet/images/marker-shadow.png';
import ViewMarker from './view-marker';
// import CreateMarker from './create-marker';

function Map() {

    const tempLatLng = [48.015884, 37.802850];

    const icon = L.icon({
        iconUrl: markerIcon,
        iconRetinaUrl: markerIcon,
        shadowUrl: markerShadow,
    });

    function CreateMarker() {
        useMapEvents({
            click: (e) => {
                tempLatLng.push(Object.values(e.latlng))
                console.log(e.latlng);
            },
            locationfound: (location) => {
                console.log('location found:', location)
            },
        })
        return null
    }


    return (
        <MapContainer center={tempLatLng} zoom={11} scrollWheelZoom={false} >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ViewMarker position={[48.015884, 37.802850]} icon={icon} popup={'test'} />
            <CreateMarker />
        </MapContainer>
    );
}

export default Map;