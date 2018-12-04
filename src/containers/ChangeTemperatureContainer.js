import { connect } from 'react-redux';
// import setTemp action
import { setTemp } from "../actions";
import ChangeTemperature from "../components/ChangeTemperature";

// map prop set to action setTemp
const mapDispatchToProps = dispatch => ({
  set: (temp) => {
    const action = setTemp(temp);
    dispatch(action);
  }
});

export default connect(null, mapDispatchToProps)(ChangeTemperature);