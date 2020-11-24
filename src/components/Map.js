import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'

const Map = ({eventData, center, zoom}) => {
  const markers = eventData.map( event => {
    if(event.categories[0].id == 8){
      return <LocationMarker lat= { event.geometries[0].coordinates[1] } lng= { event.geometries[0].coordinates[0] } />
    }
    return null
  })

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{key: YOUR_API_KEY}}
        defaultCenter={ center }
        defaultZoom= { zoom }
      >
        { markers }
      </GoogleMapReact>
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756
  },
  zoom: 6
}
export default Map
