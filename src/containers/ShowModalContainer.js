import { connect } from 'react-redux';
// import setIsLoading action
import { setIsLoading } from "../actions";
import ShowModal from "../components/ShowModal";

// map prop setIsLoading to action setIsLoadingShow
const mapDispatchToProps = dispatch => ({
  setIsLoading: (isLoading) => {
    const action = setIsLoading(isLoading);
    dispatch(action);
  }
});

export default connect(null, mapDispatchToProps)(ShowModal);