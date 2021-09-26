/*global google*/
/* eslint-disable no-undef */
import React, {
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  DirectionsRenderer,
  InfoWindow,
} from "react-google-maps";
import styled from "styled-components";
import photoImg from "../assets/images/hotel.jpeg";
const { compose, withProps, lifecycle } = require("recompose");

type MapProps = {
  selectedMarkerId: number;
};

const MapList = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  background: white;
  opacity: 0.9;
  overflow: auto;
  .map-list-wrapper {
    display: flex;
    flex-direction: column;
    .map-item {
      height: 80px;
      padding: 5px 10px;
    }
  }
`;

const MapItemWrapper = styled.div`
  .map-item-wrapper {
    display: flex;
    img {
      width: 80px;
      height: 80px;
      object-fit: cover;
    }
  }
`;

const MapComponent = (): ReactElement => {
  const [selectedMarkerId, setSelectedMarkerId] = useState(0);
  const [markers, setMarkers] = useState([]);
  const [directions, setDirections] = useState([]);
  const [center, setCenter] = useState({ lat: -32.202924, lng: -64.404945 });
  const [zoom, setZoom] = useState(8);
  const mapRef = useRef(null);

  useEffect(() => {
    const url = [
      // Length issue
      `https://gist.githubusercontent.com`,
      `/farrrr/dfda7dd7fccfec5474d3`,
      `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`,
    ].join("");

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMarkers(data.photos);
      });
  }, []);

  //   useEffect(() => {
  //     if (Array.isArray(markers) && markers.length > 0 && mapRef) {
  //       const current = mapRef?.current;
  //       console.log(mapRef);
  //       if (current) {
  //         // const google = window.google;
  //         const DirectionsService = new google.maps.DirectionsService();
  //         DirectionsService.route(
  //           {
  //             // origin: new google.maps.LatLng(markers[0]?.latitude, markers[0]?.longitude),
  //             // destination: new google.maps.LatLng(markers[1]?.latitude, markers[1]?.longitude),
  //             origin: new google.maps.LatLng(41.85073, -87.65126),
  //             destination: new google.maps.LatLng(41.85258, -87.65141),
  //             travelMode: google.maps.TravelMode.DRIVING,
  //           },
  //           (result, status) => {
  //             if (status === google.maps.DirectionsStatus.OK) {
  //               console.log("status: ", result);
  //               setDirections(result as any);
  //             } else {
  //               console.error(`error fetching directions ${result}`, result);
  //             }
  //           }
  //         );
  //       }
  //     }
  //   }, [markers]);

  const onLoad = React.useCallback(function callback(map) {
    // Get directions
    const google = window.google;
    console.log("65", google, map);
    const directionsService = new google.maps.DirectionsService();

    directionsService.route(
      {
        origin: "Liverpool, UK",
        destination: "Oxford, UK",
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          console.log(result);
          setDirections(result as any);
        } else {
          console.error("error fetching directions", result, status);
        }
      }
    );
  }, []);

  const handleMarkerClick = useCallback(
    ({ photo_id, owner_name }: { photo_id: number; owner_name: string }) =>
      () => {
        console.log("selectedMarkerId: ", photo_id, owner_name);
        setSelectedMarkerId(photo_id);
      },
    []
  );

  const onMapInfoClick = useCallback(
    ({
        photo_id,
        latitude,
        longitude,
      }: {
        photo_id: number;
        latitude: number;
        longitude: number;
      }) =>
      () => {
        setSelectedMarkerId(photo_id);
        setZoom(16);
        setCenter({ lat: latitude, lng: longitude });
      },
    []
  );

  const renderMapInfo = (marker: any) => {
    return (
      <MapItemWrapper>
        <div className="map-item-wrapper">
          <img src={photoImg} alt="photo" />
          <div className="detail">
            <div>Owner name: {marker.owner_name}</div>
            <div>latitude: {marker.latitude}</div>
            <div>longitude: {marker.longitude}</div>
          </div>
        </div>
      </MapItemWrapper>
    );
  };

  const GoogleMapExample = withGoogleMap((props: any) => {
    console.log("map props:", props);
    return (
      <GoogleMap defaultZoom={zoom} defaultCenter={center}>
        {Array.isArray(props.markers) &&
          props.markers.length > 0 &&
          props.markers.map((marker: any) => (
            <Marker
              key={marker.photo_id}
              position={{ lat: marker.latitude, lng: marker.longitude }}
              onClick={props.onMarkerClick({
                photo_id: marker.photo_id,
                owner_name: marker.owner_name,
              })}
              //   onMouseOver={props.onMarkerClick({
              //     photo_id: marker.photo_id,
              //     owner_name: marker.owner_name,
              //   })}
            >
              {marker.photo_id === selectedMarkerId && (
                <InfoWindow>{renderMapInfo(marker)}</InfoWindow>
              )}
            </Marker>
          ))}
        {/* {Array.isArray(props.markers) &&
          props.markers.length > 0 &&
          Array.isArray(props.directions) &&
          props.directions.length === 0 &&
          props.onLoad()} */}
        {props.directions && (
          <DirectionsRenderer directions={props.directions} />
        )}
      </GoogleMap>
    );
  });

  const MapLoader = withScriptjs(GoogleMapExample);

  return (
    <div>
      <MapLoader
        ref={mapRef}
        markers={markers}
        directions={directions}
        onMarkerClick={handleMarkerClick}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCm8fTc4Y4sljxGKuburIAHKIAkySLWsKM&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }}>loadingElement</div>}
        containerElement={
          <div className="map-containter" style={{ height: `100vh` }}></div>
        }
        mapElement={
          <div className="map-el-containter" style={{ height: `100%` }}></div>
        }
        onLoad={onLoad}
      >
        <div className="map-info">Info</div>
      </MapLoader>
      <MapList>
        <div className="map-list-wrapper">
          {Array.isArray(markers) &&
            markers.length > 0 &&
            markers.map((marker: any) => (
              <div
                key={marker.photo_id}
                onClick={onMapInfoClick({
                  photo_id: marker.photo_id,
                  latitude: marker.latitude,
                  longitude: marker.longitude,
                })}
                // onMouseOver={onMapInfoClick({
                //   photo_id: marker.photo_id,
                //   latitude: marker.latitude,
                //   longitude: marker.longitude,
                // })}
                className="map-item"
                style={{
                  border: `1px solid ${
                    marker.photo_id === selectedMarkerId ? "green" : "#ccc"
                  }`,
                }}
              >
                {renderMapInfo(marker)}
              </div>
            ))}
        </div>
      </MapList>
    </div>
  );
};

export default MapComponent;
