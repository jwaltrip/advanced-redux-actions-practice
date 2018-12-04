import { connect } from 'react-redux';
import Users from "../components/Users";

// map a prop called users to the state users
// map a prop called firstNameFilter to the state searchText
// map a prop called sortOn to the state currentUserSort
const mapStateToProps = state => ({
  users: state.users,
  firstNameFilter: state.searchText,
  sortOn: state.currentUserSort
});

export default connect(mapStateToProps)(Users);