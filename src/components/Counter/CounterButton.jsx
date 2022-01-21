import { useDispatch } from "react-redux";
import { decCount, incCount } from "../../store/actions";

export function CounterButton() {
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button
          onClick={() => {
            dispatch(incCount(1));
          }}
        >
          INCREMENT
        </button>
      </div>
      <br></br>
      <div>
        <button
          onClick={() => {
            //decrement logic
            dispatch(decCount(1));
          }}
        >
          DECREMENT
        </button>
      </div>
    </div>
  );
}
