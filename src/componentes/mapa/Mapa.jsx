import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import "../mapa/Mapa.css";
/*import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-icon.png";

const iconUbicacion = L.icon =({
    iconUrl: icon,
    iconShadow: iconShadow,
    iconSize: [60, 55],
    iconAnchor: [22, 94],
    shadowAnchor: [22, 94],
    popupAnchor: [-3, -76]
 });*/



const Mapa = () => {

  return (
    <div className="container text-center d-flex align-items-center justify-content-center p-5 ">
        <div className="row">
        <div className="col-12 col-lg-6 mb-5 align-items-center d-flex flex-column">
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className="mapa">
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
         <Marker position={[51.505, -0.09]} >
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
         </MapContainer>
        </div>


    <div className="col-12 col-lg-6 ">
            <h2 className="mapa-titulo">Cómo Llego</h2>
                <p className=' mapa-texto m-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam omnis dolor aliquid unde iure necessitatibus inventore, soluta officiis accusantium assumenda tenetur magni quo error ut iusto facere blanditiis, saepe quasi.
                Distinctio adipisci ullam at doloremque illum rem sit quis tenetur, praesentium architecto, in minus accusantium nostrum? Ex fugit repellendus impedit dignissimos asperiores et? Ea aut consequatur itaque vitae, iste eum.
                Incidunt debitis soluta, tempora rem laboriosam repellendus illo quaerat odit totam, possimus unde libero ipsum minima, quas qui eum. Ipsa vel at accusamus maiores delectus aliquid nesciunt quam labore corporis.
                </p>
        </div>
        </div>
        
    </div>
  )
}

export default Mapa;