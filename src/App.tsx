const url = "https://fps.payapps.hkicl.com.hk/?pay_req_obj=https%3A%2F%2Fexample.com&callback=https%3A%2F%2Fexample.com";

export default function App() {  
  return (
    <div>
      <a href={url} target="_blank">HKICL page</a>
      <button onClick={() => window.open(url)}>HKICL page</button>
    </div>
  );
}
