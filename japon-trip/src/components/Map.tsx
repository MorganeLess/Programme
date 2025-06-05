import React, { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
} from "react-leaflet";
import { LatLngTuple } from "leaflet";
import { TripDay } from "../data/tripData";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

interface Props {
  selectedDay: TripDay;
}

function MapCenterUpdater({ center }: { center: LatLngTuple }) {
  const map = useMap();

  useEffect(() => {
    if (center) {
      map.setView(center, map.getZoom());
    }
  }, [center, map]);

  return null;
}

export default function Map({ selectedDay }: Props) {
  const center: LatLngTuple =
    selectedDay?.points?.[0]?.coordinates || [0, 0];
  const colors = ["blue", "red", "green", "orange", "purple", "cyan"];

  return (
    <MapContainer
      center={center}
      zoom={15}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "500px" }}
    >
      <MapCenterUpdater center={center} />

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {selectedDay?.points?.map((point, i) => {
        if (i === selectedDay.points.length - 1) return null;

        return (
          <Polyline
            key={`line-${i}`}
            positions={[
              selectedDay.points[i].coordinates,
              selectedDay.points[i + 1].coordinates,
            ]}
            color={colors[i % colors.length]}
          />
        );
      })}

      {selectedDay?.points?.map((point, idx) => (
        <Marker
  key={idx}
  position={point.coordinates}
  icon={L.divIcon({
    className: "custom-div-icon",
    html: `<div class="marker-number">${idx + 1}</div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  })}
>

          <Popup maxWidth={300}>
            <div className="space-y-2">
              <p className="text-xs text-gray-500">Étape {idx + 1}</p>

              {point.image && (
                <img
                  src={point.image}
                  alt={point.name}
                  className="w-full h-28 object-cover rounded"
                />
              )}

              <p className="text-sm font-semibold">{point.name}</p>

              {point.description && (
                <p className="text-xs text-gray-600">{point.description}</p>
              )}

              {point.address && (
                <p className="text-xs text-gray-600 italic">{point.address}</p>
              )}

              {point.link && (
                <a
                  href={point.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline text-xs"
                >
                  Voir le lieu
                </a>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
