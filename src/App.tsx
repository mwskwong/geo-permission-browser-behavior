export default function App() {
  return (
    <div>
      <div
        style={{
          padding: 24,
          backgroundColor: "red",
          width: "100%",
          position: "sticky",
          top: 0,
        }}
      >
        sticky
      </div>
      <div style={{ width: "100%", height: 3000 }}>
        content
        <input style={{ width: 100 }} />
      </div>
    </div>
  );
}
