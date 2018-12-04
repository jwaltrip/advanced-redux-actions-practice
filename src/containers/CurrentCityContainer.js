import { connect } from 'react-redux';
import CurrentCity from "../components/CurrentCity";

// map a prop called text to the state currentCity
const mapStateToProps = state => ({
  text: state.currentCity
});

export default connect(mapStateToProps)(CurrentCity);