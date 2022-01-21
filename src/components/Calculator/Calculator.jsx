import { useDispatch, useSelector } from "react-redux";
import { decCount, incCount } from "../../store/actions";

export function Calculator() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Calculator</h3>
      <div>{count}</div>

      <div style={{ marginTop: "2rem" }}>
        <button
          onClick={() => {
            dispatch(incCount(1));
          }}
        >
          INCREMENT
        </button>
        <button
          onClick={() => {
            dispatch(decCount(1));
          }}
        >
          DECREMENT
        </button>
      </div>
    </div>
  );
}
