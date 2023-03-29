import "./App.css";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import VideoBg from "../src/assets/video.mp4";

function App() {
  return (
    <section className="App">
      <div className="overlay"></div>
      <video src={VideoBg} autoPlay loop muted></video>
    </section>
  );
}

export default App;
