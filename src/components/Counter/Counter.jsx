import { CounterButton } from "./CounterButton";
import { CounterValue } from "./CounterValue";

export function Counter() {
  return (
    <div>
      <h1>Counter Application</h1>
      <CounterValue />
      <CounterButton />
    </div>
  );
}
