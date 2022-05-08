import React, { useEffect } from 'react';
import './style.css';

function Engineer() {
//   const [info, setInfo] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/engPage', { signal: controller.signal }).then((res) => res.json()).then((data) => console.log(data.data)).catch((err) => console.log(err));
    return () => controller.abort();
  }, []);
  return (
    <div className="engineerPage">
      <p> hello </p>
      <p> hello </p>
    </div>
  );
}

export default Engineer;
