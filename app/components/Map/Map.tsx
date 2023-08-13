import React from 'react'
import 'leaflet-defaulticon-compatibility'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'

interface Props {}

const Map = (props: Props) => {
  
  const position = {
    lat: 5.02256,
    lng: 7.92837,
  } 


  return (
    <MapContainer
      className="h-96 w-full"
      center={position}
      zoom={14}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position}>
        <Popup>
          250 udo umana. <br /> uyo AkwaIbom.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
