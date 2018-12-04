import { connect } from 'react-redux';
// import setSearchText action
import { setSearchText } from "../actions";
import SearchTextBox from "../components/SearchTextBox";

// map prop set to action setSearchText
const mapDispatchToProps = dispatch => ({
  set: (text) => {
    const action = setSearchText(text);
    dispatch(action);
  }
});

export default connect(null, mapDispatchToProps)(SearchTextBox);