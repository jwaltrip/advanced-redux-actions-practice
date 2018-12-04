import { connect } from 'react-redux';
import Thermostat from "../components/Thermostat";

// map a prop called temp to the state currentTemp
const mapStateToProps = state => ({
  temp: state.currentTemp
});

export default connect(mapStateToProps)(Thermostat);