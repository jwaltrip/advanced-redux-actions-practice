import { connect } from 'react-redux';
// import addUser and removeUser action
import { addUser, removeUser } from "../actions";
import UserButtons from "../components/UserButtons";

// map prop add to action addUser
// map prop remove to action removeUser
const mapDispatchToProps = dispatch => ({
  add: (user) => {
    const action = addUser(user);
    dispatch(action);
  },
  remove: () => {
    const action = removeUser();
    dispatch(action);
  }
});

export default connect(null, mapDispatchToProps)(UserButtons);