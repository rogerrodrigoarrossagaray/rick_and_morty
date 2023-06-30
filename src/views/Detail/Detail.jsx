import React from "react";
import axios from "axios";
import Styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Detail() {
  const [character, setCharacter] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);
  return (
    <div className={Styles.cardparchment}>
      <div className={Styles.imgcontain}>
        <img
          className={Styles.img}
          src={character.image}
          alt={character.name}
        />
      </div>
      <div className={Styles.carddetails}>
        <h2>{character.name}</h2>
        <h3>Status: {character.status}</h3>
        <h3>Specie: {character.species}</h3>
        <h3>Gender: {character.gender}</h3>
        {/* Mostrar más detalles del personaje aquí */}
      </div>
    </div>
  );
}
