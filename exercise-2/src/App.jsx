import React, { useState } from "react";

function App() {
  // Step 2: State to keep the value of the text entered (string type, empty string as default)
  const [text, setText] = useState("");

  // Step 1: Function to handle key pressed event
  function handleTextChange(event) {
    // Step 2: Update the state with the current textfield value
    setText(event.target.value);
  }

  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label>Enter any text !</label>
      <input onChange={handleTextChange} value={text} />

      <p>
        <label>Here is the text in upper case</label>

        {/* Step 3: Display the text in upper case */}
        <input disabled value={text.toUpperCase()} />
      </p>
    </main>
  );
}

export default App;
