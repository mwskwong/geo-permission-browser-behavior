export default function App() {
  const callbackUrl = "https://example.com";
  return (
    <div>
      <button
        onClick={() => {
          window.open(callbackUrl + "?is_successful=0", "_blank");
        }}
      >
        test window.open
      </button>
    </div>
  );
}
