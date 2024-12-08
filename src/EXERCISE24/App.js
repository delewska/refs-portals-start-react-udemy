//exercise to do
// import Form from './Form';

// // Don't change the name of the 'App'
// // function and keep it a named export

// export function App() {
//   function handleRestart() {}

//   return (
//     <div id="app">
//       <button onClick={handleRestart}>Restart</button>
//       <Form />
//     </div>
//   );
// }

//solution:

import React from "react";

import Form from "./Form";

export function App() {
  const form = React.useRef();

  function handleRestart() {
    form.current.clear();
  }

  return (
    <div id="app">
      <button onClick={handleRestart}>Restart</button>
      <Form ref={form} />
    </div>
  );
}
