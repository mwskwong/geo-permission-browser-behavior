const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export default function App() {
  const hkiclUrl = "https://fps.payapps.hkicl.com.hk/";
  return (
    <div>
      <button
        onClick={async () => {
          await sleep(3000);
          window.open(hkiclUrl, "_blank");
        }}
      >
        sleep 3s and then window.open in new tab
      </button>
      <button
        onClick={async () => {
          await sleep(3000);

          const link = document.createElement('a');
          link.href = hkiclUrl;
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          link.click();
        }}
      >
        sleep 3s and then window.open in new tab
      </button>
    </div>
  );
}
