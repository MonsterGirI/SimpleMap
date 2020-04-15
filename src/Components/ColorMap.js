import React, { Component } from 'react'
import {
  Circle,
  FeatureGroup,
  LayerGroup,
  Map,
  Popup,
  Rectangle,
  TileLayer,
} from 'react-leaflet'

const center = [51.505, -0.09]
const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06],
]

export default class OtherLayersExample extends Component {
    constructor() {
        super();
        this.state = {
            lat: 44.439663,
            lng: 26.096306,
            zoom: 7
            
        }
    }
  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map style={{ height: "100vh" }}
      center={position}
      zoom={this.state.zoom}>>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayerGroup>
          <Circle center={center} fillColor="blue" radius={200} />
          <Circle center={center} fillColor="red" radius={1000} stroke={false} />
          <LayerGroup>
            <Circle
              center={[44.43, 26.01]}
              color="green"
              fillColor="green"
              radius={1000}
            />
          </LayerGroup>
        </LayerGroup>
        <FeatureGroup color="purple">
          <Popup>Popup in FeatureGroup</Popup>
          <Circle center={[51.51, -0.06]} radius={200} />
          <Rectangle bounds={rectangle} />
        </FeatureGroup>
      </Map>
    )
  }
}