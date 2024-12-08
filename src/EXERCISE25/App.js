//exercise to do
// import Toast from "./Toast";

// function App() {
//   function handleEnrol() {
//     // Todo: Show toast

//     setTimeout(() => {
//       // Todo: hide toast
//     }, 3000);
//   }

//   return (
//     <div id="app">
//       {/* Todo: Render <Toast /> component (conditionally) here */}
//       <article>
//         <h2>React Course</h2>
//         <p>
//           A course that teaches you React from the ground up and in great depth!
//         </p>
//         <button onClick={handleEnrol}>Enrol</button>
//       </article>
//     </div>
//   );
// }

// export default App;

//soultion:

import React from "react";
import Toast from "./Toast";

function App() {
  const [showToast, setShowToast] = React.useState(false);
  function handleEnrol() {
    // Todo: Show toast
    setShowToast(true);

    setTimeout(() => {
      // Todo: hide toast
      setShowToast(false);
    }, 3000);
  }

  return (
    <div id="app">
      {showToast && <Toast message="success" />}
      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
        <button onClick={handleEnrol}>Enrol</button>
      </article>
    </div>
  );
}

export default App;
