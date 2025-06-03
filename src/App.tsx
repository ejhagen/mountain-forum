import "./App.css";
import { NavigationBar } from "./navigation";
import { Posts } from "./posts";
import { Threads } from "./threads";

function App() {
  return (
    <>
      <NavigationBar />
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
