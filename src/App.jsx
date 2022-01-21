import "./App.css";
import { Calculator } from "./components/Calculator/Calculator";
import { CalculatorTwo } from "./components/Calculator/CalculatorTwo";
import { Counter } from "./components/Counter/Counter";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <Calculator />
      <hr></hr>
      <CalculatorTwo />
    </div>
  );
}

export default App;
