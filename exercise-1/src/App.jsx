import React, { useState } from "react";

function App() {
  // Step 1: Create a boolean state to manage the weather
  const [isRaining, setIsRaining] = useState(false);

  function onSunClick() {
    // Step 2: Set state to false (sunny weather)
    setIsRaining(false);
  }

  function onRainClick() {
    // Step 2: Set state to true (rainy weather)
    setIsRaining(true);
  }

  function getTitle() {
    // Step 3: Return title based on weather state
    return isRaining ? "Rain Time" : "Sun Time";
  }

  function getBackgroundColor() {
    // Step 3: Return CSS class based on weather state
    return isRaining ? "rainy" : "sunny";
  }

  return (
    <main className={getBackgroundColor()}>
      <h1>{getTitle()}</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;
