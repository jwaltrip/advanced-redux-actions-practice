import { connect } from 'react-redux';
// import setVideoScale action
import { setVideoScale } from "../actions";
import ScaleVideo from "../components/ScaleVideo";

// map prop set to action setVideoScale
const mapDispatchToProps = dispatch => ({
  set: (scale) => {
    const action = setVideoScale(scale);
    dispatch(action);
  }
});

export default connect(null, mapDispatchToProps)(ScaleVideo);