import React from "react";
import Card from '../Card/Card';
import styles from "./Cards.module.css"

export default function Cards(props) {
   const { characters, onClose } = props;
   return (
      <div className={styles.listCards}>
         {characters.map((character, index) =>
            <Card
               key={index}
               id={character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin.name}
               image={character.image}
               onClose={onClose}
            />)}
      </div>
   )
}