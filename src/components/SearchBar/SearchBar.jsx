import React from "react";
import styles from "./SearchBar.module.css"
import { useState } from "react";

export default function SearchBar(props) {
const [id,setId] = useState("");
function  handleChange (event){
setId(event.target.value)
}
const min = 1; // Valor mínimo del rango (inclusive)
const max = 800; // Valor máximo del rango (inclusive)

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

   return (
      <div className={styles.searchBar}>
          <input type="search" placeholder="Search Character" onChange={handleChange}/>
          <button type="submit" onClick={()=>{props.onSearch(id)}}><i class="fas fa-search"></i>Seach</button>
          <button type="submit" onClick={()=>{props.onSearch(randomNumber)}}><i class="fas fa-search"></i>Random</button>
      </div>
   );
}

