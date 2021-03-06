import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import AirContent from './AirContent'
import { Fab } from "@material-ui/core";
import MyLocationRoundedIcon from "@material-ui/icons/MyLocationRounded";
import './component.css'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
export default function BreezoMap ()
{
    const apiKey = "e1421cc68a964c6080d96bbc9f77a8ea"; // Your BreezoMeter API key
    mapboxgl.accessToken = 'pk.eyJ1IjoiMjExMmFraWxlc2giLCJhIjoiY2txZG0yM3FuMDZtMTJ2c2M5dnVyZXl6dCJ9.q6bFUtvuFB3aREgc9pv00A';

    const mapContainer = useRef( null );
    const map = useRef( null );
    const [ lng, setLng ] = useState( 139.6844 );
    const [ lat, setLat ] = useState( 35 );
    const [ zoom, setZoom ] = useState( 6 );

    useEffect( () =>
    {
        if ( map.current ) return; // initialize map only once
        map.current = new mapboxgl.Map( {
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [ lng, lat ],
            zoom: zoom,

        } );
    } );


    function controlMap(){
        map.current.addControl(
            new MapboxGeocoder( {
                accessToken: mapboxgl.accessToken,
                mapboxgl: mapboxgl
            } )
        );
    }


    useEffect( () =>
    {
        if ( !map.current ) return; // wait for map to initialize
        map.current.on( 'move', () =>
        {
            setLng( map.current.getCenter().lng.toFixed( 4 ) );
            setLat( map.current.getCenter().lat.toFixed( 4 ) );
            setZoom( map.current.getZoom().toFixed( 2 ) );
        } );
    } );



    useEffect( () =>
    {
        if ( !map.current ) return; // wait for map to initialize

        map.current.on( "load", function ()
        {
            addRasterSource();
            addRasterLayer();
            controlMap();
        } );
    } );

    function addRasterSource ()
    {
        map.current.addSource( "breezometer-tiles", {
            type: "raster",
            tiles: [
                `https://tiles.breezometer.com/v1/air-quality/breezometer-aqi/current-conditions/{z}/{x}/{y}.png?key=${ apiKey }&breezometer_aqi_color=indiper`
            ],
            tileSize: 256,
            maxzoom: 8
        } );
    }

    function addRasterLayer ()
    {
        map.current.addLayer(
            {
                id: "breezometer-tiles",
                type: "raster",
                source: "breezometer-tiles",
                minzoom: 0,
                maxzoom: 22,
                paint: {
                    "raster-opacity": 0.6
                }
            },
            "admin-1-boundary-bg"
        );
    }



  return (
    <div id="mapOuter">
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
      <img
        src="https://docs.breezometer.com/api-documentation/assets/img/indiper_color_palette.2cb158e6.png/"
        alt=""
      />
      <Fab
      color="primary"
        onClick={() => {
          navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLng(position.coords.longitude)
          });
        }}
      >
        <MyLocationRoundedIcon />
      </Fab>
      <AirContent latitude={lat} longitude={lng} />
    </div>
  );
}
