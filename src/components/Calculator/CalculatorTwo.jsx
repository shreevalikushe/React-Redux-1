import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCount,
  divideCount,
  multiplyCount,
  subCount,
} from "../../store/actions";
import { CounterButton } from "../Counter/CounterButton";

export function CalculatorTwo() {
  const count = useSelector((state) => state.count);
  const [num, setNum] = useState();
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Calculator implementation using user input</h1>
      <h4>{count}</h4>
      <input
        onChange={(e) => setNum(e.target.value)}
        type="number"
        placeholder="Enter Number"
      />
      <button
        onClick={() => {
          setNum(num);
          console.log(num);
        }}
      >
        Click
      </button>

      <div
        style={{
          padding: "1rem",
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          margin: "auto",
          width: "800px",
        }}
      >
        <CounterButton />
        <button
          onClick={() => {
            dispatch(addCount(num));
          }}
        >
          ADD INPUT VALUE TO COUNT
        </button>
        <button
          onClick={() => {
            dispatch(subCount(num));
          }}
        >
          SUBTRACT INPUT VALUE FROM COUNT
        </button>
        <button
          onClick={() => {
            dispatch(multiplyCount(num));
          }}
        >
          MULTIPLY INPUT VALUE WITH COUNT
        </button>
        <button
          onClick={() => {
            dispatch(divideCount(num));
          }}
        >
          DIVIDE INPUT VALUE WITH COUNT
        </button>
      </div>
    </div>
  );
}
