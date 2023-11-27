import "../assets/sass/PagCustom.scss";
import { TbHexagonNumber1, TbHexagonNumber2, TbHexagonNumber3 } from "react-icons/tb";

const Pag = ({ onLinkClick1, onLinkClick2, onLinkClick3 }) => {
  return (
    <div>
      <ul className="unorderList">
        <li className="listItem text-center">
          <a href="#1" onClick={onLinkClick1}>
            <div className="svgis"><TbHexagonNumber1 /></div>
          </a>
        </li>
        <li className="listItem text-center">
          <a href="#2" onClick={onLinkClick2}>
          <div className="svgis" ><TbHexagonNumber2 /></div>
          </a>
        </li>
        <li className="listItem text-center">
          <a href="#3" onClick={onLinkClick3}>
          <div className="svgis" ><TbHexagonNumber3 /></div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pag;
