const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export default function App() {
  const hkiclUrl = "https://fps.payapps.hkicl.com.hk/";
  return (
    <div style={{ height: 2000 }}>

      <div style={{ position: "fixed", bottom: 0, right: 0, width: "100%", padding: 16, backgroundColor: "red" }} className="bottomBar">
        stick to bottom
      </div>
    </div>
  );
}
