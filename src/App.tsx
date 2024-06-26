import { useState } from "react";

export default function App() {
  const [geolocation, setGeolocation] = useState<
    | {
        status: "loading";
      }
    | {
        status: "success";
        position: GeolocationPosition;
      }
    | {
        status: "error";
        error: GeolocationPositionError;
      }
  >();

  return (
    <div>
      <button
        onClick={() => {
          setGeolocation({ status: "loading" });
          navigator.geolocation.getCurrentPosition(
            (position) => setGeolocation({ status: "success", position }),
            (error) => setGeolocation({ status: "error", error }),
            { enableHighAccuracy: true }
          );
        }}
      >
        Request Geo-location
      </button>
      <p>{geolocation?.status}</p>
      <pre style={{ textAlign: "start" }}>
        <p>
          {(() => {
            switch (geolocation?.status) {
              case "success":
                return JSON.stringify(
                  {
                    coords: {
                      latitude: geolocation.position.coords.latitude,
                      longitude: geolocation.position.coords.longitude,
                      altitude: geolocation.position.coords.altitude,
                      accuracy: geolocation.position.coords.accuracy,
                      altitudeAccuracy:
                        geolocation.position.coords.altitudeAccuracy,
                      heading: geolocation.position.coords.heading,
                      speed: geolocation.position.coords.speed,
                    },
                    timestamp: geolocation.position.timestamp,
                  },
                  null,
                  2
                );
              case "error":
                return JSON.stringify(
                  {
                    code: geolocation.error.code,
                    message: geolocation.error.message,
                  },
                  null,
                  2
                );
            }
          })()}
        </p>
      </pre>
    </div>
  );
}
