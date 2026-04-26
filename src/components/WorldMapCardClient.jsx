"use client";

import { Fragment, useEffect, useMemo, useState } from "react";
import { CircleMarker, GeoJSON, MapContainer, Tooltip, useMap } from "react-leaflet";
import { feature } from "topojson-client";
import styles from "./style/WorldMapCard.module.css";

const INDIA_OUTLINE_URL = "/assets/json/outline_of_india.topo.json";
const INDIA_OBJECT_KEY = "Outline_of_India";
const CATEGORY_STYLES = {
  weather: {
    color: "rgba(56, 189, 248, 0.95)",
    radius: 4.5,
    weight: 1.5,
    fillOpacity: 0.95,
  },
  concern: {
    color: "rgba(250, 204, 21, 0.95)",
    radius: 5,
    weight: 2,
    fillOpacity: 0.28,
  },
  conflict: {
    color: "rgba(251, 146, 60, 0.95)",
    radius: 5.5,
    weight: 2,
    fillOpacity: 0.72,
  },
  emergency: {
    color: "rgba(248, 113, 113, 0.98)",
    radius: 6,
    weight: 2.4,
    fillOpacity: 0.92,
  },
};

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

export default function WorldMapCardClient({ pointGroups = {} }) {
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

  const points = useMemo(() => {
    return Object.entries(pointGroups).flatMap(([category, entries]) =>
      (Array.isArray(entries) ? entries : []).map((point, index) => ({
        ...point,
        category,
        id: `${category}-${point.lat}-${point.lng}-${index}`,
      })),
    );
  }, [pointGroups]);

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

        {points.map((point) => {
          const markerStyle =
            CATEGORY_STYLES[point.category] ?? CATEGORY_STYLES.concern;

          return (
            <Fragment key={point.id}>
              <CircleMarker
                center={[point.lat, point.lng]}
                radius={markerStyle.radius}
                interactive={false}
                pathOptions={{
                  color: markerStyle.color,
                  weight: markerStyle.weight,
                  fillColor: markerStyle.color,
                  fillOpacity: markerStyle.fillOpacity,
                }}
              />

              <CircleMarker
                center={[point.lat, point.lng]}
                radius={14}
                bubblingMouseEvents={false}
                pathOptions={{
                  color: "rgba(255, 255, 255, 0.01)",
                  weight: 0,
                  fillColor: "rgba(255, 255, 255, 0.01)",
                  fillOpacity: 0.01,
                }}
              >
                {point.label ? (
                  <Tooltip direction="top" offset={[0, -10]}>
                    <div className={styles.pointTooltip}>
                      <span className={styles.pointType}>{point.category}</span>
                      <span>{point.label}</span>
                    </div>
                  </Tooltip>
                ) : null}
              </CircleMarker>
            </Fragment>
          );
        })}
      </MapContainer>
    </div>
  );
}
