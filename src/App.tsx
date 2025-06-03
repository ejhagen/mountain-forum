import "./App.css";
import { Navigation } from "./navigation";
import { Posts } from "./posts";
import { Threads } from "./threads";

function App() {
  return (
    <>
      <Navigation />
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Posts />
        <Threads />
      </div>
    </>
  );
}

export default App;
