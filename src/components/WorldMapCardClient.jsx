"use client";

import { useEffect, useMemo, useState } from "react";
import { GeoJSON, MapContainer, useMap } from "react-leaflet";
import { feature } from "topojson-client";
import styles from "./style/WorldMapCard.module.css";

const INDIA_OUTLINE_URL = "/assets/json/outline_of_india.topo.json";
const INDIA_OBJECT_KEY = "Outline_of_India";

function collectBounds(coordinates, bounds = {
  minLat: Infinity,
  maxLat: -Infinity,
  minLng: Infinity,
  maxLng: -Infinity,
}) {
  if (!Array.isArray(coordinates)) return bounds;

  if (
    coordinates.length >= 2 &&
    typeof coordinates[0] === "number" &&
    typeof coordinates[1] === "number"
  ) {
    const [lng, lat] = coordinates;
    bounds.minLat = Math.min(bounds.minLat, lat);
    bounds.maxLat = Math.max(bounds.maxLat, lat);
    bounds.minLng = Math.min(bounds.minLng, lng);
    bounds.maxLng = Math.max(bounds.maxLng, lng);
    return bounds;
  }

  coordinates.forEach((entry) => collectBounds(entry, bounds));
  return bounds;
}

function getFeatureBounds(geoJson) {
  const bounds = collectBounds(geoJson?.geometry?.coordinates);
  return [
    [bounds.minLat, bounds.minLng],
    [bounds.maxLat, bounds.maxLng],
  ];
}

function LockMapInteractions() {
  const map = useMap();

  useEffect(() => {
    map.scrollWheelZoom.disable();
    map.doubleClickZoom.disable();
    map.touchZoom.disable();
    map.boxZoom.disable();
    map.keyboard.disable();
    map.dragging.disable();
  }, [map]);

  return null;
}

function FitIndiaBounds({ bounds }) {
  const map = useMap();

  useEffect(() => {
    if (!bounds) return;
    map.fitBounds(bounds, {
      paddingTopLeft: [24, 28],
      paddingBottomRight: [24, 28],
      animate: false,
    });
  }, [bounds, map]);

  return null;
}

export default function WorldMapCardClient() {
  const [indiaOutline, setIndiaOutline] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function loadIndiaOutline() {
      try {
        const response = await fetch(INDIA_OUTLINE_URL);
        if (!response.ok) {
          throw new Error(`Failed to load India outline: ${response.status}`);
        }

        const topology = await response.json();
        const object = topology?.objects?.[INDIA_OBJECT_KEY];
        if (!object) {
          throw new Error("India outline object missing in TopoJSON");
        }

        const geoJson = feature(topology, object);
        const primaryFeature = Array.isArray(geoJson?.features)
          ? geoJson.features[0]
          : geoJson;

        if (isMounted) {
          setIndiaOutline(primaryFeature);
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadIndiaOutline();

    return () => {
      isMounted = false;
    };
  }, []);

  const bounds = useMemo(() => {
    if (!indiaOutline) return null;
    return getFeatureBounds(indiaOutline);
  }, [indiaOutline]);

  return (
    <div className={styles.mapShell}>
      <MapContainer
        center={[22.5, 79]}
        zoom={4}
        zoomControl={false}
        attributionControl={false}
        className={styles.mapViewport}
      >
        <LockMapInteractions />
        <FitIndiaBounds bounds={bounds} />

        {indiaOutline ? (
          <GeoJSON
            data={indiaOutline}
            style={() => ({
              color: "rgba(245, 158, 11, 0.62)",
              weight: 1.2,
              opacity: 0.9,
              fillColor: "rgba(245, 158, 11, 0.08)",
              fillOpacity: 0.18,
            })}
          />
        ) : null}
      </MapContainer>
    </div>
  );
}
