import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './component.css'

mapboxgl.accessToken = 'pk.eyJ1IjoiMjExMmFraWxlc2giLCJhIjoiY2txZG0yM3FuMDZtMTJ2c2M5dnVyZXl6dCJ9.q6bFUtvuFB3aREgc9pv00A';

export default function NormalMap() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(139.6844);
  const [lat, setLat] = useState(35);
  const [zoom, setZoom] = useState(6);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
