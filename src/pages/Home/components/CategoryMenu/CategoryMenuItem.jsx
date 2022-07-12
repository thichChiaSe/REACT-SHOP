import react from "react";
import { Link } from "react-router-dom";
import AuthPage from "../../../Auth";
export default function CategoryMenuItem({ title, item }) {
  const element = item.map((e) => {
    return <a href="">{e}</a>;
  });
  return (
    <div className="cate__menu-item">
      <h3>{title}</h3>
      {/* <a className="tags">{element}</a> */}
      <Link className="tags" to="/checkout">
        {element}
      </Link>
    </div>
  );
}
