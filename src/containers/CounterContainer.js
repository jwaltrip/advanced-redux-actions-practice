import { connect } from 'react-redux';
import Counter from "../components/Counter";

// map a prop called count to the state currentCount
const mapStateToProps = state => ({
  count: state.currentCount
});

export default connect(mapStateToProps)(Counter);