import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";

import shoeWebsiteLogo from "./images/shoeWebsiteLogo.jpg";
import giphy from "./images/giphy.gif";
import "./NavBar.css";
import { useContext } from "react";
import { PageContext } from "../../contexts/PageContext";
export const NavBar = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(PageContext);
  const genderClickHandler = (event) => {
    dispatch({ type: "setGenderFilters", payload: [event.target.value] });
    navigate("/products");
  };
  return (
    <div className="nav-bar">
      <img
        src={shoeWebsiteLogo}
        alt="loadinggif"
        width="150px"
        onClick={() => {
          dispatch({ type: "setGenderFilters", payload: [] });
          navigate("/");
        }}
      />
      <button value="Men" onClick={(event) => genderClickHandler(event)}>
        Men
      </button>
      <button value="Women" onClick={(event) => genderClickHandler(event)}>
        Women
      </button>
      <input
        type="text"
        placeholder="Search shoes"
        value={state.userInput.trim()}
        onChange={(event) => {
          dispatch({ type: "setUserInput", payload: event.target.value });
          dispatch({ type: "setShowSearchResults", payload: true });
        }}
      />
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/wishlist">Wishlist</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </div>
  );
};
