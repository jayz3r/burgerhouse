import React from "react";
import { NavLink } from "react-router-dom";

function Burger({ items, active, setActive }) {
  return (
    <div className={active ? "hidden active " : "hidden"}>
      <div className="menu__content">
        <div className="menu__header"></div>
        <ul>
          {items.map((item) => (
            <li >
              <NavLink
                to={`${item.link}`}
                onClick={() => setActive(false)}
              >
                {item.value}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Burger;
