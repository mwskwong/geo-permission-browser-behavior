import { useEffect, useState } from "react";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function App() {

  return (
    <div>
      <h1>Heading 1</h1>
      <p>Paragraph</p>
    </div>
  );
}
