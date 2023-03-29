import "./App.css";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import VideoBg from "../src/assets/video.mp4";

function App() {
  return (
    <section className="App">
      <div className="overlay"></div>
      <video src={VideoBg} autoPlay loop muted></video>

      <div className="page__content">
        <h1>Lainching Soon</h1>
        <h3>Leave your email and we'll let you know</h3>
      </div>
    </section>
  );
}

export default App;
