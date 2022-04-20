import Preload from "../../../assets/images/Preload.gif";
import s from "./Preload.module.css";

let Preloader = (props) => {
  return (
    <div className={s.Preload}>
      <img src={Preload} />
    </div>
  );
};

export default Preloader;
