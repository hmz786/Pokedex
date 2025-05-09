import React, {useState, useEffect}from 'react';

function Horloge () {
  const [heure , setHeure] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setHeure(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <p>The Time is {heure}</p>  
}
export default Horloge