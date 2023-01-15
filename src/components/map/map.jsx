import React, { useState } from 'react'
import { Marker, Popup, MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import '../../assets/leaflet/leaflet.css';
import '../map/map.css';

import markerIcon from '../../assets/leaflet/images/marker-icon.png';
import markerShadow from '../../assets/leaflet/images/marker-shadow.png';
// import ViewMarker from './view-marker';
import CreateMarker from './create-marker';

function Map() {

    const tempLatLng = [48.015884, 37.802850];

    const icon = L.icon({
        iconUrl: markerIcon,
        iconRetinaUrl: markerIcon,
        shadowUrl: markerShadow,
    });

    // function CreateMarker() {
    //     const tempLatLng = [48.015884, 37.802850];
    //     const [markers, setMarkers] = useState([tempLatLng]);
    //     useMapEvents({
    //         click(e) {
    //             if (true) {
    //                 const newMarker = e.latlng
    //                 setMarkers([...markers, newMarker]);
    //                 console.log(newMarker);
    //             }
    //         },

    //     })

    //     return (<React.Fragment>
    //         {markers.map((marker, idx) =>
    //             <Marker key={idx} position={marker} icon={icon}>
    //                 <Popup>Marker is at {marker}</Popup>
    //             </Marker>
    //         )}
    //     </React.Fragment>)
    // }


    return (
        <MapContainer center={tempLatLng} zoom={11} scrollWheelZoom={false} >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* <ViewMarker position={[48.015884, 37.802850]} icon={icon} popup={'test'} /> */}
            <CreateMarker />
        </MapContainer>
    );
}

export default Map;