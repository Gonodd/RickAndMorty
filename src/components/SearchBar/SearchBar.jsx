import React from "react";
import styles from "./SearchBar.module.css"
import { useState } from "react";

export default function SearchBar(props) {
   const {onSearch} = props;
   const [id, setId]= useState("");
   const handleChange = (event)=>{
      setId(event.target.value);
   }
   return (
      <div className={styles.barStyle}>
         <input className={styles.inPutBar} type='search' onChange={handleChange} value={id}/>
         <button className={styles.buttonAdd} onClick={()=>{onSearch(id)}}>Agregar</button>
      </div>
   );
}


//{(characterID) => window.alert(characterID)}