import load from "../../../assets/images/load.gif";
import s from "./Preload.module.css";

let Preloader = (props) => {
  return (
    <div className={s.load}>
      <img src={load} />
    </div>
  );
};

export default Preloader;
