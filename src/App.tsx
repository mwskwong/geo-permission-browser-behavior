import { useState } from 'react';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default function App() {  
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCanNext(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, [])
  
  return (
    <div>
      <div className={`startBtn ${canNext ? '' : 'disable'}`}>
        some text
      </div>
    </div>
  );
}
