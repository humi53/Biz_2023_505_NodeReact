import { NavLink } from "react-router-dom";
import dImage from "../assets/default.png";
import css from "./BucketList.module.scss";
const BucketItem = ({ item }) => {
  return (
    <li>
      <NavLink
        to={`content/${item.id}`}
        className={({ isActive }) => (isActive ? "active" : "")}
        // { item.complete ? `${css.deco}` : `${css.undeco}`}
      >
        <img src={item.img_src || dImage} alt="" width="30px" height="30px" />
        <span className={item.complete ? "complete" : "none"}>
          {item.bucket} {item.complete ? "(완료)" : ""}
        </span>
      </NavLink>
    </li>
  );
};
export default BucketItem;
