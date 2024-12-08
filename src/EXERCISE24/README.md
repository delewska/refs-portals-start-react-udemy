links:
https://react.dev/reference/react/useImperativeHandle
https://react.dev/reference/react/forwardRef

Exposing Component APIs
Your working on a part of an application that contains a form which should be resettable from outside that form.

A colleague prepared a Form component that contains a couple of dummy inputs and a "Save" button that's not doing anything.

Your task is to expose a clear() function from inside that Form component so that other components that use the Form component can call that function to reset the form.

Because that exposed clear() function should call the form's built-in reset() method (the JS form object, which is the underlying object of the <form> element, has a reset() method that does exactly what its name implies).

So the Form component should be usable like this:

function SomeComponent() {
const form = React.useRef();

function handleClear() {
form.current.clear();
}

return <Form ref={form}/>
}

After adding this feature to the Form component you should tweak the App component to establish a "connection" to the Form component and call the newly exposed clear() method from inside the App component's handleRestart() function.

So you should add code similar to the above code snippet to the App component.

Important: In this Udemy exercise workspace, any React Hooks (and other React functions!) must be accessed directly on the imported React object (import React from 'react') - for example: React.useState().

EXPLAIN SOLUTION :
In the solution, as a first step, a ref is created inside the Form component. This ref is then "connected" to the <form> element and will be used for calling the form's reset() method whenever the (to-be-added) clear() method will be called from inside some other component:

import React from 'react';

export default function Form(props, ref) {
const form = React.useRef();

return (

<form ref={form}>
<p>
<label>Name</label>
<input type="text" />
</p>

      <p>
        <label>Email</label>
        <input type="email" />
      </p>
      <p id="actions">
        <button>Save</button>
      </p>
    </form>

);
}

To expose a clear() method that can be called from inside the App component, React's useImperativeHandle Hook must be used. This Hook allows you (= the developer) to expose an API (a collection of methods) from a component to other components.

This useImperativeHandle Hook needs a (forwarded) ref (coming from the component that wants to access the exposed API) as a first input value.

As a second argument, it expects to get a function that must return an object that contains all methods that should be exposed.

Therefore, the Form component is also wrapped with forwardRef.

Inside the object returned in the second argument function of useImperativeHandle, a clear() method is added. Inside that method, the form ref is used to access the JavaScript form object (belonging to <form>) and call its reset() method.

import React from 'react';

const Form = React.forwardRef(function Form(props, ref) {
const form = React.useRef();
React.useImperativeHandle(ref, () => {
return {
clear() {
form.current.reset();
},
};
});

return (

<form ref={form}>
<p>
<label>Name</label>
<input type="text" />
</p>

      <p>
        <label>Email</label>
        <input type="email" />
      </p>
      <p id="actions">
        <button>Save</button>
      </p>
    </form>

);
});

export default Form;

Finally, the App component is edited to call that clear() method from inside handleRestart.

A new ref (form) is created and passed via the special ref prop to the custom Form component.

That form ref is then used to call the Form component's clear() method:

import React from 'react';

import Form from './Form';

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
