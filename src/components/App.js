import React from "react";
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent";

const App = () => {
  return (
    <div>
      <header>
        {/* Ensure "Now" is displayed in the header */}
        <h1>Now</h1>
      </header>
      <main>
        <ExampleComponent />
        {/* Ensure TestComponent is rendered with the correct title */}
        <TestComponent title="time video" />
      </main>
    </div>
  );
};

export default App;
