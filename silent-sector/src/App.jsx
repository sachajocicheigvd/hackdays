
import { MapContainer, TileLayer,  Marker,  Popup } from 'react-leaflet'

import './App.css'

function App() {

  return (
    <div style={{height: '500px', width:'500px'}}>
    <MapContainer center={[46.689615, 7.560716]} zoom={7} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[46.689615, 7.560716]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  </div>
  )
}

export default App
