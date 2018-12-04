import { connect } from 'react-redux';
// import setCurrentCity action
import { setCurrentCity } from "../actions";
import CityDropDown from "../components/CityDropDown";

// map prop set to action setCurrentCity
const mapDispatchToProps = dispatch => ({
  set: (city) => {
    const action = setCurrentCity(city);
    dispatch(action);
  }
});

export default connect(null, mapDispatchToProps)(CityDropDown);