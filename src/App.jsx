import "./App.css";
import InteractiveTopography from "./Pages/DotBg/Background";
import Main from "./Pages/Main";

// import {LenisProvider} from "./utils/lenisScrollerWrapper";

function App() {
  return (
      
    <main className="flex flex-col justify-center items-center no-scrollbar w-full min-h-screen">
      <InteractiveTopography />
      <Main />
    </main>
      
  );
}

export default App;
