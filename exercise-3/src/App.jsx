import React, { useState } from "react";

function App() {
  // States: we need 3 states - two for inputs (a, b) and one for the result
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");
  const [isError, setIsError] = useState(false);

  // Handle input A changes
  function onA(event) {
    setA(event.target.value);
  }

  // Handle input B changes
  function onB(event) {
    setB(event.target.value);
  }

  // Handle compute button click
  function handleCompute() {
    // Check if both inputs are valid numbers
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    // If either input is not a number, show error
    if (isNaN(numA) || isNaN(numB) || a.trim() === "" || b.trim() === "") {
      setResult("Error: Please enter valid numbers");
      setIsError(true);
    } else {
      // Calculate and display the sum
      setResult(numA + numB);
      setIsError(false);
    }
  }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* Display result or error message with conditional red color */}
      <input disabled value={result} className={isError ? "error" : ""} />
      <button onClick={handleCompute}>Compute</button>
    </main>
  );
}

export default App;
