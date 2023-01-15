import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import "../mapa/Mapa.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-icon.png";

const iconUbicacion = L.icon =({
    iconUrl: icon,
    iconShadow: iconShadow,
    iconSize: [60, 55],
    iconAnchor: [22, 94],
    shadowAnchor: [22, 94],
    popupAnchor: [-3, -76]
 });



const Mapa = () => {

  return (
    <div>
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className="mapa">
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    <Marker position={[51.505, -0.09]} icon={iconUbicacion} >
        <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
    </Marker>
    </MapContainer>
    </div>
  )
}

export default Mapa;