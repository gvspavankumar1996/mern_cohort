import React from "react";

const App = () => {
  return (
    <div className="grid grid-cols-1  md:grid grid-cols-3">
      <h1 className="bg-red-500 ">Hello world!</h1>
      <h1 className="bg-blue-500 lg:bg-yellow-500 ">Hello world!</h1>
      <h1 className="bg-green-500">Hello world!</h1>
    </div>
  );
};

export default App;
