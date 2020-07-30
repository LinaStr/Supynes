// import React, {Fragment, useEffect, useState} from 'react';
// import itemEntriesApi from '../../api/itemEntriesApi'
// import './styles.css';
//
// // components:
// import MapMarker from '../../components/Map/MapMarker'
//
// // examples:
// import GoogleMap from '../../components/Map/GoogleMap';
// import Container from "@material-ui/core/Container";
//
//
// // Return map bounds based on list of places
// const getMapBounds = (map, maps, items) => {
//     const bounds = new maps.LatLngBounds();
//
//     items.forEach((place) => {
//         bounds.extend(new maps.LatLng(
//             place.locationLat,
//             place.locationLng,
//         ));
//     });
//     return bounds;
// };
//
// // Re-center map when resizing the window
// const bindResizeListener = (map, maps, bounds) => {
//     maps.event.addDomListenerOnce(map, 'idle', () => {
//         maps.event.addDomListener(window, 'resize', () => {
//             map.fitBounds(bounds);
//         });
//     });
// };
//
//
//
// // Fit map to its bounds after the api is loaded
// const apiIsLoaded = (map, maps, items) => {
//     // Get bounds by our places
//     const bounds = getMapBounds(map, maps, items);
//     // Fit map to bounds
//     map.fitBounds(bounds);
//     // Bind the resize listener
//     bindResizeListener(map, maps, bounds);
// };
//
// export default () => {
//     const [itemList, setItemList] = useState({ content: [],});
//
//     useEffect(() => {
//         itemEntriesApi.fetchItemEntries(0,10)
//         .then(response => setItemList(response.data))
//     }, [])
//
//     return (
//         <Container className="mepas">
//         <Fragment>
//
//             {(
//                 <GoogleMap
//                     defaultZoom={10}
//                     defaultCenter={[54.723396, 25.337372]}
//                     yesIWantToUseGoogleMapApiInternals
//                     onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, itemList.content)}
//
//                 >
//                     {itemList.content.map(place => (
//                         <MapMarker
//                             key={place.id}
//                             text={place.title}
//                             lat={place.locationLat}
//                             lng={place.locationLng}
//                         />
//                     ))}
//                 </GoogleMap>
//             )}
//         </Fragment>
//         </Container>
//     );
// }
//
// import React from "react";
// import Map from "./ItemEntriesMap";
//
//
// const KEY = process.env.REACT_APP_GOOGLE_API_KEY;
// export default class RecycleCenterssMapContainer extends React.Component {
//     render() {
//         return (
//             <div className="map-container">
//                 <Map
//                     recycleCenters={this.itemEntriesPage}
//                     googleMapURL={`https://maps.googleapis.com/maps/api/js?   key=${KEY}&v=3.exp&libraries=geometry,drawing,places`}
//                     loadingElement={<div style={{ height: `100%` }} />}
//                     containerElement={<div style={{ height: `600px`, width: `100%` }} />}
//                     mapElement={<div style={{ height: `100%` }} />}
//                 />
//             </div>
//         );
//     }
// }

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {Marker} from "google-maps-react";

const AnyReactComponent = () => <div>mano tekstas</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key:'AIzaSyDb1Tl4ODl45oGx5e9-3eE14jfLxlVXAQ0',
                    }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <Marker
                        key={1}
                        position={{
                            lat: 59.95,
                            lng: 30.33
                        }}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;