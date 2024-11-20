import {useState, useRef} from 'react';

export default function Player() {
  const playerName = useRef();
  const [name, setName] = useState(null);
 // const [submitted, setIsSubmitted] = useState(false);  cut from ?? -> submitted ?

// const handleChange=(event) => {
//   setIsSubmitted(false)
//   setName(event.target.value);
// }   ///cuting from input => onChange={handleChange} value={name} 

const handleClick = () => {
  setName(playerName.current.value);
 //setIsSubmitted(true)
}

  return (
    <section id="player">
      <h2>Welcome { name ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
