import { useMapEvents } from 'react-leaflet';

function CreateMarker() {
    useMapEvents({
        click: (e) => {
            console.log(e.latlng);
        },
        locationfound: (location) => {
            console.log('location found:', location)
        },
    })
    return null
}

export default CreateMarker;