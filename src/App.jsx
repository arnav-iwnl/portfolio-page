import "./App.css";
import InteractiveTopography from "./Pages/DotBg/Background";
import Main from "./Pages/Main";
import ShaderBackground from "./Pages/ShaderBg/ShaderBackground"
// import {LenisProvider} from "./utils/lenisScrollerWrapper";

function App() {
  return (
      
    <main className="flex flex-col justify-center items-center no-scrollbar w-full min-h-screen">
      <InteractiveTopography />
      <Main />
    </main>
    // <main className="w-full h-full">
    //  <ShaderBackground      
    //     color={[0, 0, 0.0]}
    //     amplitude={0.67}
    //     speed={0.4}
    //     progress={0.66}
    //   />
    // </main>
      
  );
}

export default App;
