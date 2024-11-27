import React from "react";

function App() {
  const image = React.useRef();

  const handleClick = () => {
    image.current.click();
  };

  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input
          ref={image}
          data-testid="file-picker"
          type="file"
          accept="image/*"
        />
        <button onClick={handleClick}>Pick Image</button>
      </p>
    </div>
  );
}

export default App;
