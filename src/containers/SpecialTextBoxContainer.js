import { connect } from 'react-redux';
// import setSpecialText action
import {setSpecialText} from "../actions";
import SpecialTextBox from "../components/SpecialTextBox";

// map prop set to action setSpecialText
function mapDispatchToProps(dispatch){
  return {
   set: (txt) => {
     let action = setSpecialText(txt);
     dispatch(action);
   }
  }
}

export default connect(null, mapDispatchToProps)(SpecialTextBox);
