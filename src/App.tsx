import { useEffect, useState } from "react";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function App() {
  const url = "https://fps.payapps.hkicl.com.hk";

  const [shouldOpen, setShouldOpen] = useState(false);
  useEffect(() => {
    if (shouldOpen) {
      window.open(url, "_blank");
      setShouldOpen(false);
    }
  }, [shouldOpen]);

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
          await sleep(3000);
          // window.open(url, "_blank");

          if (winOpenRef) {
            winOpenRef.location.href = url;
          }
        }}
      >
        call and await API before calling window.open ref async
      </button>
      <button
        onClick={() => {
          const winOpenRef = window.open();
          Promise.all([
            fetch("https://jsonplaceholder.typicode.com/todos/1"),
            sleep(3000),
          ])
            .then(([response]) => response.json())
            .then((body) => {
              console.log(body);
              if (winOpenRef) {
                winOpenRef.location.href = url;
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
        call and await API before setting state to trigger useEffect to call
        window.open
      </button>
      <button
        onClick={async () => {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
          );
          const body = await response.json();
          console.log(body);
          await sleep(3000);

          setTimeout(() => {
            window.open(url, '_top')
          })
        }}
      >
        call and await API before setting state to trigger useEffect to call
        window.open
      </button>
      <button
        onClick={async () => {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
          );
          const body = await response.json();
          console.log(body);
          await sleep(3000);

         window.open(url, '_blank', 'noreferrer')
        }}
      >
        window.open with noreferrer
      </button>
      <button
        onClick={async () => {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
          );
          const body = await response.json();
          console.log(body);
          await sleep(3000);
          
          const button = document.createElement('button');
          button.style.display = 'none';
          document.body.appendChild(button);
          button.onclick = () => window.open(url, '_blank');
          button.click();
          document.body.removeChild(button);
        }}
      >
        Create a button and click programetically
      </button>
      <button
        onClick={async () => {
          const winOpenRef = window.open();
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
          );
          const body = await response.json();
          console.log(body);
          await sleep(3000);
          // window.open(url, "_blank");

          if (winOpenRef) {
            winOpenRef.document.write(`
              <html>
                <body>
                  <script>
                    setTimeout(() => {
                      window.location.replace('${url}');
                      // history.pushState(null, '', '${url}');
                    }, 100);
                  </script>
                  <p>Loading...</p>
                </body>
              </html>
            `);
          }
        }}
      >
        first load a intermediate page, then use window.location.href to replace URL
      </button>
      <a href={url} target="_blank">just a simple new tab link</a>
      <button onClick={() => window.open(url)}>simple button open new window</button>
    </div>
  );
}
