import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./Detail.module.css"

const DetailC = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <h1 className={styles.name}>{character.name}</h1>
                <h2>Status: {character?.status}</h2>
                <h2>Species: {character?.species}</h2>
                <h2>Gender: {character?.gender}</h2>
                <h2>Origin: {character.origin?.name}</h2>
            </div>

            <div className={styles.imgContainer}>
                <img className={styles.img} src={character.image} alt="" />
            </div>
        </div>
    );
}
export default DetailC;