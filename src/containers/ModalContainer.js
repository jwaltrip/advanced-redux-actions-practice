import { connect } from 'react-redux';
// import setIsLoading action
import { setIsLoading } from "../actions";
import Modal from "../components/Modal";

// map a prop called isLoading to the state isLoading
const mapStateToProps = state => ({
  isLoading: state.isLoading
});

// map prop setIsLoading to action setIsLoading
const mapDispatchToProps = dispatch => ({
  setIsLoading: (isLoading) => {
    const action = setIsLoading(isLoading);
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);