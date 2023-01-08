import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <div className="App">
      <div className="h-screen bg-gradient-to-b from-sky-700 to-black">
        <div className="fixed w-full h-full bg-blue flex items-center justify-center flex-col">
          <div className="bg-black bg-opacity-75 w-full lg:w-1/2 md:p-12 rounded-lg">
            <div className=" bg-opacity-100">
              <Board></Board>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
