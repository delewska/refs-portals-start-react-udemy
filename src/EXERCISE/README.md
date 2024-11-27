**Accessing DOM Elements with "refs"**

Your given a code snippet that's part of a bigger app that deals with user image uploads.

Since the native, built-in `<input type="file">` element is hard to style and doesn't fit the intended app style, it's hidden via `display: none` in the provided `index.css` file.

Therefore, to make the file picker work without being displayed, your task is to ensure that the click event on the `<input type="file">` element is triggered whenever the `<button>Pick Image</button>` is clicked.

This can be achieved by calling the built-in `click()` method on the underlying input element.

You should use React's "ref" feature to get hold of the `<input type="file">` element and execute that `click()` method on it whenever the `<button>` is clicked.

Important: In this Udemy exercise environment, React hooks must be used directly on the imported `React` object (`import React from 'react'`). For example, useState (which you don't need for this task) would then be called like this: `React.useState()`.

In the solution, a new "ref" is created by calling React's useRef Hook. This ref is then "connected" to the `<input type="file">` element by setting the special ref prop on that JSX element:

```
import React from 'react';

function App() {
  const filePicker = React.useRef();

  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input
          data-testid="file-picker"
          type="file"
          accept="image/*"
          ref={filePicker}
        />
        <button>Pick Image</button>
      </p>
    </div>
  );
}
```

This alone doesn't do much though - the file picker is not getting "triggered".

To change this, a handleStartPickImage event listener function is added to the App component and set as a value for the onClick prop of the <button> element.

Inside that function, the filePicker ref is then used to get access to the file picker element's underlying JS object. This is achieved by accessing the current property on the filePicker ref. This is necessary because refs always are objects with a current property (which then holds the actual value assigned to the ref).

By calling the built-in click() method on the underlying input object the file picker is then "triggered" without being visible:

```
import React from 'react';

function App() {
  const filePicker = React.useRef();

  function handleStartPickImage() {
    filePicker.current.click();
  }

  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input data-testid="file-picker" type="file" accept="image/*" ref={filePicker} />
        <button onClick={handleStartPickImage}>Pick Image</button>
      </p>
    </div>
  );
}
```
