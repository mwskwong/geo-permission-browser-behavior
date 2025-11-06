import { useEffect, useState } from "react";

export default function App() {
  const [uaData, setUaData] = useState();

  useEffect(() => {
    (async () =>
      setUaData(
        // @ts-expect-error using experimental API
        await navigator.userAgentData.getHighEntropyValues([
          "model",
          "platform",
        ])
      ))();
  }, []);

  return (
    <pre style={{ textAlign: "start" }}>
      <code>{JSON.stringify(uaData, null, 2)}</code>
    </pre>
  );
}
