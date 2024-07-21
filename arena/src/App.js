import React, { useState } from 'react';
import Home from './Components/Home';
import MpLoad from './Components/mpload';

function App() {
  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  return (
    <div className="App">
      {videoEnded ? (
        <Home />
      ) : (
        <MpLoad onVideoEnd={handleVideoEnd} /> 
      )}
    </div>
  );
}

export default App;
