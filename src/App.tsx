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

  const url = "https://www.hkjc.com";
  return (
    <div>
      <button
        onClick={() => {
          window.open(url, "_blank");
        }}
      >
        window.open(hkjc, _blank)
      </button>
      <button
        onClick={async () => {
          window.open(url, "_blank");
        }}
      >
        window.open(hkjc, _blank) async
      </button>
      <button
        onClick={async () => {
          const link = document.createElement("a");
          link.href = url;
          link.target = "_blank";
          document.body.appendChild(link);

          link.click();
        }}
      >
        create link and click programmatically async
      </button>
      <button
        onClick={async () => {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
          );
          const body = await response.json();
          console.log(body);
          window.open(url, "_blank");
        }}
      >
        call and await API before calling window.open(hkjc, _blank) async
      </button>
      <button
        onClick={() => {
          fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => response.json())
            .then((body) => {
              console.log(body);
              window.open(url, "_blank");
            });
        }}
      >
        call API, in then() calling window.open(hkjc, _blank)
      </button>
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
