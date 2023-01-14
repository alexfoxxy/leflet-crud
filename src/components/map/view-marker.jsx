import React from 'react'
import { Marker, Popup } from 'react-leaflet';

function ViewMarker(props) {

    return (
        <Marker position={props.position} icon={props.icon} >
            <Popup>
                {props.popup}
            </Popup>
        </Marker>
    )
}

export default ViewMarker;