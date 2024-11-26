import { useRef } from 'react';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default function App() {
  const divRef = useRef(null);
  
  return (
    <div
      ref={divRef}
      onClick={(event) => {
        console.log({
          target: event.target,
          ref: divRef.current,
          isEqual: divRef.current === event.target
        })
      }}
    >
      <h1>Heading 1</h1>
      <p 
        style={{
          boxSizing: "border-box",
          fontSize: "13px",
          textSizeAdjust: "100%",
        }}
        onClick={() => console.log("yo")}
      >
        Paragraph
      </p>
      <button
        onClick={() => {
          sleep(3000).finally(() => window.close());
          window.open("https://google.com");
        }}  
      >
        Button
      </button>
    </div>
  );
}
