import { connect } from "react-redux";
import { sendMessage, updateNewMessageBody } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    dialogsPages: state.dialogsPages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessage());
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBody(body));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, {
  sendMessage,
  updateNewMessageBody,
})(Dialogs);

export default DialogsContainer;
