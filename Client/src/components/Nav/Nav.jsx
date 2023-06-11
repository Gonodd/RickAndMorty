import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import React from "react";
import AboutC from "../AboutC/AboutC";
import { Link } from "react-router-dom";
import App from "../../App";
import Favorite from "../Favorites/Favorites.jsx";

export default function Nav(props) {
  const { onSearch, sixRandom, clear, logOut } = props;

  const randomChar = () => {
    onSearch(Math.floor((Math.random() * (826)) + 1))
  }


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Rick & Morty</h1>
      <div className={styles.navBar}>
        <SearchBar onSearch={onSearch} />
        <button className={styles.button}>
          <Link to="/favorites" className={styles.linkClear}>Favorites</Link>
        </button>
        <button className={styles.button}>
          <Link to="/home" className={styles.linkClear}>Home</Link>
        </button>
        <button className={styles.button} onClick={randomChar}>Random Char</button>
        <button className={styles.button} onClick={sixRandom}>Six Random's</button>
        <button className={styles.button} onClick={clear}>Clear</button>
        <button className={styles.button}>
          <Link to="/about" className={styles.linkClear}>About</Link>
        </button>
        <button className={styles.buttonF} onClick={logOut}>Log Out</button>
      </div>
    </div>
  );
}
