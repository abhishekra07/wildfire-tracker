import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfo from './LocationInfo'

const Map = ({eventData, center, zoom}) => {
  const [locationInfo, setLocationinfo] = useState(null)

  const markers = eventData.map( event => {
    if(event.categories[0].id == 8){
      return <LocationMarker lat= { event.geometries[0].coordinates[1] } lng= { event.geometries[0].coordinates[0] } onClick={ () => {
        setLocationinfo({id: event.id, title: event.title})
      }}/>
    }
    return null
  })

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{key: PUT_YOUR_API_KEY_HERE}}
        defaultCenter={ center }
        defaultZoom= { zoom }
      >
        { markers }
      </GoogleMapReact>
      { locationInfo && <LocationInfo info={locationInfo} />}
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
