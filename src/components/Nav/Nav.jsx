import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Styles from "./Nav.module.css";
import Logo from "../../logo.jpg";
import { NavLink } from "react-router-dom";

export default function Nav(props) {
  return (
    <nav className={Styles.navbar}>
      <img className={Styles.logo} src={Logo} alt="Logo Rick and Morty" />
      <div className={Styles.searchBarContainer}>
        <SearchBar className={Styles.search} onSearch={props.onSearch} />
      </div>
      <div className={Styles.buttonContainer}>
        <NavLink to="/favorites" className={Styles.navLink}>
          <button className={Styles.button}>Favorites</button>
        </NavLink>
        <NavLink to="/about" className={Styles.navLink}>
          <button className={Styles.button}>About</button>
        </NavLink>
        <NavLink to="/home" className={Styles.navLink}>
          <button className={Styles.button}>Home</button>
        </NavLink>
        <NavLink to="/" className={Styles.navLink}>
          <button className={Styles.button}>LogOut</button>
        </NavLink>
      </div>
    </nav>
  );
}
