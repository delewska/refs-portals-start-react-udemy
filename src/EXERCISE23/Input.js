//exercise
// export default function Input() {
//     // Todo: Accept forwarded ref and "connect" it to the <input> element
//     return (
//       <p className="control">
//         <label>TODO: Output label (received via props)</label>
//         {/* Todo: "Forward" remaining props to <input> element */}
//         <input />
//       </p>
//     );
//   }

//solution
import React from "react";

const Input = React.forwardRef(function Input({ label, type }, ref) {
  // Todo: Accept forwarded ref and "connect" it to the <input> element
  return (
    <p className="control">
      <label>{label}</label>
      {/* Todo: "Forward" remaining props to <input> element */}
      <input ref={ref} type={type} label={label} />
    </p>
  );
});

export default Input;
