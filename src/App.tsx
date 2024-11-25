import { useRef } from 'react';

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
    </div>
  );
}
