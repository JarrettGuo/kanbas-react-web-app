import { useSelector, useDispatch } from "react-redux";
import { LabState } from "../../../store";
import { increment, decrement } from "./counterreducer";
function CounterRedux() {
  const { count } = useSelector((state: LabState) => state.counterreducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter Redux</h2>
      <h3>{count}</h3>
      <button className="btn btn-success me-2" onClick={() => dispatch(increment())}> Increment </button>
      <button className="btn btn-danger" onClick={() => dispatch(decrement())}> Decrement </button>
    </div>
  );
}
export default CounterRedux;