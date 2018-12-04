import { connect } from 'react-redux';
// import the increaseCounter and decreaseCounter actions
import { increaseCounter, decreaseCounter } from "../actions";
import CounterButton from "../components/CounterButton";

// map prop increase to action increaseCounter
// map prop decrease to action decreaseCounter
const mapDispatchToProps = dispatch => ({
  increase: () => {
    const action = increaseCounter();
    dispatch(action);
  },
  decrease: () => {
    const action = decreaseCounter();
    dispatch(action);
  }
});

export default connect(null, mapDispatchToProps)(CounterButton);