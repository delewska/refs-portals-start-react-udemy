//exercise
// import React from "react";

// export default function Toast({ message }) {
//   return (
//     <aside className="toast" data-testid="toast">
//       <p>{message}</p>
//     </aside>
//   );
// }

//solution:

import React from "react";
import { createPortal } from "react-dom";

export default function Toast({ message }) {
  return createPortal(
    <aside className="toast" data-testId="toast">
      <p>{message}</p>
    </aside>,
    document.querySelector("body")
  );
}
