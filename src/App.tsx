import { useEffect, useState } from "react";

export default function App() {
  const url = "https://www.hkjc.com";

  const [shouldOpen, setShouldOpen] = useState();
  useEffect(() => {
    if (shouldOpen) {
      window.open(url, '_blank')
      setShouldOpen(false);
    }
  }, [shouldOpen])


  // const link = document.createElement("a");
  // link.href = url;
  // link.target = "_blank";
  // document.body.appendChild(link);

  // link.click();

  return (
    <div>
      <button
        onClick={async () => {
          const winOpenRef = window.open();
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
          );
          const body = await response.json();
          console.log(body);
          // window.open(url, "_blank");

          if (winOpenRef) {
            winOpenRef.location = url;
          }
        }}
      >
        call and await API before calling window.open ref async
      </button>
      <button
        onClick={() => {
          const winOpenRef = window.open();
          fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => response.json())
            .then((body) => {
              console.log(body);
              if (winOpenRef) {
                winOpenRef.location = url;
              }
            });
        }}
      >
        call API, in then() calling window.open ref
      </button>
      <button
        onClick={async () => {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
          );
          const body = await response.json();
          console.log(body);
          setShouldOpen(true);
        }}
      >
        call and await API before setting state to trigger useEffect to call window.open
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
