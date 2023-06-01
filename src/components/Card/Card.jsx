import React, { useEffect, useState } from "react";
import styles from "./Card.module.css"
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../Redux/actions.js"
import { useDispatch, useSelector } from "react-redux";

export default function Card(props) {
   const [isFav, setIsFav] = useState(false);
   const myFavorites = useSelector((state) => state.myFavorites);
   const dispatch = useDispatch();

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = () => {
      if (isFav === true) {
         setIsFav(false);
         dispatch(removeFav(props.id))
      }
      if (isFav === false) {
         setIsFav(true);
         dispatch(addFav(props));
      }

   }


   return (
      <div className={styles.cardSetup}>

         <button className={styles.cardOnClose} onClick={() => { props.onClose(props.id) }}>X</button>
         <img className={styles.cardImg} src={props.image} alt="" />
         <div className={styles.cardText}>
            <Link className={styles.buttonLink} to={`/detail/${props.id}`}>
               <h2>{props.name}</h2>
            </Link>
            <h2>{props.status}</h2>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
            <h2>{props.origin}</h2>
         </div>
         {
            isFav ? (
               <button className={styles.buttonFav} onClick={handleFavorite}>❤️</button>
            ) : (
               <button className={styles.buttonFav} onClick={handleFavorite}>🤍</button>
            )
         }
      </div>
   );
}
