import React, { useState } from 'react'
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';

import markerIcon from '../../assets/leaflet/images/marker-icon.png';
import markerShadow from '../../assets/leaflet/images/marker-shadow.png';

function CreateMarker() {
    const tempLatLng = [48.015884, 37.802850];
    const [markers, setMarkers] = useState([tempLatLng]);

    const icon = L.icon({
        iconUrl: markerIcon,
        iconRetinaUrl: markerIcon,
        shadowUrl: markerShadow,
    });

    useMapEvents({
        click(e) {
            if (true) {
                const newMarker = e.latlng ===
                    setMarkers([...markers, newMarker]);
                console.log(e);
            }
        },

    })

    return (<React.Fragment>
        {markers.map((marker, idx) =>
            <Marker key={idx} position={marker} icon={icon}>
                <Popup>Marker is at {marker}</Popup>
            </Marker>
        )}
    </React.Fragment>)
}

export default CreateMarker;