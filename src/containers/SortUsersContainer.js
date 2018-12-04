import { connect } from 'react-redux';
// import setCurrentUserSort action
import { setCurrentUserSort } from "../actions";
import SortUsers from "../components/SortUsers";

// map prop set to action setCurrentUserSort
const mapDispatchToProps = dispatch => ({
  set: (sort) => {
    const action = setCurrentUserSort(sort);
    dispatch(action);
  }
});

export default connect(null, mapDispatchToProps)(SortUsers);