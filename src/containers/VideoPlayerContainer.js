import { connect } from 'react-redux';
import VideoPlayer from "../components/VideoPlayer";

// map a prop called URL to the state videoURL
// map a prop called scale to the state videoScale
const mapStateToProps = state => ({
  URL: state.videoURL,
  scale: state.videoScale
});

export default connect(mapStateToProps)(VideoPlayer);