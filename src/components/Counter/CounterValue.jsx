import { useSelector } from "react-redux";

export function CounterValue() {
  const counter = useSelector((state) => state.count);
  return (
    <div>
      <h3>Current Counter Value: {counter}</h3>
    </div>
  );
}
