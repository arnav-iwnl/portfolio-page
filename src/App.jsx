import "./App.css";
// import GrabScroll from "./components/Grabbing-cursor/Grab";
import HomePage from "./Pages/HomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <main className="  bg-cover relative bg-[url('https://unsplash.com/photos/HbhJyWnE9Oo/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzMxNzUwNjgyfA&force=true&w=1920')] flex justify-center">
      {/* <GrabScroll> */}
        <HomePage />
      {/* </GrabScroll> */}
      
    </main>
  );
}

export default App;
