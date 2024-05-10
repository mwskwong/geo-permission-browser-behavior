export default function App() {
  return (
    <div>
      <button
        onClick={() => {
          navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (positionError) => console.warn(positionError),
            { enableHighAccuracy: true }
          );
        }}
      >
        Request Geo-location
      </button>
    </div>
  );
}
