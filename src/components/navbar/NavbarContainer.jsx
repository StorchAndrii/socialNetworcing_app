import { connect } from "react-redux";
import Navbar from "./Navbar";

const mapStateToProps = (state) => {
  return {
    sideBar: state.sideBar,
  };
};

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;
