import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import HomePage from "./Pages/HomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="  bg-[url('https://unsplash.com/photos/HbhJyWnE9Oo/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzMxNzUwNjgyfA&force=true&w=1920')] flex justify-center">
      <HomePage/>
    </main>
  );
}

export default App;
