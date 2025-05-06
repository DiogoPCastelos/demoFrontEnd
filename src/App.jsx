import React, { useState } from "react";

function App() {
  const [color1, setColor1] = useState("red");
  const [color2, setColor2] = useState("red");
  const [name, setName] = useState("");

  const colors = ["red", "green", "blue", "yellow", "purple"];

  const colorClassMap = {
    red: "bg-red-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
    yellow: "bg-yellow-500",
    purple: "bg-purple-500",
  };

  const changeColor1 = () => {
    const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
    randomColor1 == color1 || randomColor1 == color2
      ? changeColor1()
      : setColor1(randomColor1);
  };

  const changeColor2 = () => {
    const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
    randomColor2 == color1 || randomColor2 == color2
      ? changeColor2()
      : setColor2(randomColor2);
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    console.log("Name inputted:", newName);
  };

  return (
    <div className="w-screen h-screen bg-background flex flex-col items-center justify-center">
      <h1 className="text-white font-extrabold text-3xl absolute top-10 px-10">
        Click the circles to change the color and check the console for the name
        input.
      </h1>
      <div className="flex flex-col items-center space-y-4">
        <div className="w-36 h-24 bg-smallBox rounded-lg flex flex-row space-x-4 items-center justify-center">
          <div
            className={`content-none size-12 rounded-full cursor-pointer transition-colors duration-300 ${colorClassMap[color1]}`}
            onClick={changeColor1}
          ></div>
          <div
            className={`content-none size-12 rounded-full cursor-pointer transition-colors duration-300 ${colorClassMap[color2]}`}
            onClick={changeColor2}
          ></div>
        </div>
        <div className="flex flex-col items-start text-white">
          <label htmlFor="nameInput" className="mb-1">
            Name
          </label>
          <input
            id="nameInput"
            type="text"
            className="w-60 bg-input px-3 py-2 rounded-md text-black"
            value={name}
            onChange={handleNameChange}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
