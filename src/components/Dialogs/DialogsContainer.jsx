import { connect } from "react-redux";
import {
  addNewMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
//
// const DialogsContainer = (props) => {
//   const state = props.store.getState().dialogsPages;
//
//   const onSendMessageClick = () => {
//     props.store.dispatch(addNewMessageActionCreator());
//   };
//   const changeMessageText = (body) => {
//     props.store.dispatch(updateNewMessageTextActionCreator(body));
//   };
//
//   return (
//     <Dialogs
//       updateNewMessageBody={changeMessageText}
//       sendMessage={onSendMessageClick}
//       dialogsPages={state}
//     />
//   );
// };

const mapStateToProps = (state) => {
  return {
    dialogsPages: state.dialogsPages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(addNewMessageActionCreator());
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageTextActionCreator(body));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
