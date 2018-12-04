import { connect } from 'react-redux';
// import setVideoURL action
import { setVideoURL } from "../actions";
import VideoTextBox from "../components/VideoTextBox";

// map prop set to action setVideoURL
const mapDispatchToProps = dispatch => ({
  set: (url) => {
    const action = setVideoURL(url);
    dispatch(action);
  }
});

export default connect(null, mapDispatchToProps)(VideoTextBox);