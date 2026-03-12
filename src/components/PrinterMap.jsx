import { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import CardComponent from './Card';
import PrinterPopup from './PrinterPopup';

// Fix Leaflet's missing marker icons in Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const center = [40.9143, -73.1243];

const printerMarker = (color) => L.divIcon({
  className: '',
  html: `
    <div style="
      width: 32px;
      height: 32px;
      background: ${color};
      border: 2.5px solid white;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      box-shadow: 0 2px 8px rgba(0,0,0,0.35);
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <div style="transform: rotate(45deg); color: white; font-size: 14px;">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="14" height="14" fill="white">
          <path d="M128 0C92.7 0 64 28.7 64 64l0 96 64 0 0-96 226.7 0L384 93.3l0 66.7 64 0 0-66.7c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0L128 0zM384 352l0 32 0 64-256 0 0-64 0-16 0-16 256 0zm64 32l32 0c17.7 0 32-14.3 32-32l0-96c0-35.3-28.7-64-64-64L64 192c-35.3 0-64 28.7-64 64l0 96c0 17.7 14.3 32 32 32l32 0 0 64c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-64zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/>
        </svg>
      </div>
    </div>
  `,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -34],
});

const PrinterMap = ({ printers }) => {
  return (
    <>
    {/* overriding default leaflet popup styling */}
    <style>{`
      .leaflet-popup-content-wrapper {
        padding: 0;
        border-radius: 0.625rem;
        overflow: hidden;
      }
      .leaflet-popup-content {
        margin: 0;
        width: auto !important;
      }
      .leaflet-popup-close-button {
        z-index: 1000;
        color: white !important;
        font-size: 1.2rem !important;
        padding: 6px 8px !important;
      }
      .leaflet-popup-close-button {
        display: none !important;
      }
    `}</style>
    <MapContainer
      center={center}
      zoom={15}
      style={{ width: '100%', height: 'calc(100vh - 60px)' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      {printers.map((printer) => (
        <Marker
          key={printer.printerId}
          position={[printer.latitude, printer.longitude]}
          icon={printerMarker(printer.color)}
        >
          <Popup minWidth={300} maxWidth={320}>
            <PrinterPopup {...printer} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
    </>
  );
};

export default PrinterMap;