import { useSelector } from "react-redux";
import styles from "./Favorites.module.css"
import Card from "../Card/Card";
import { useDispatch } from "react-redux";
import { filterCards, orderCards, showAll } from "../../Redux/actions";
import { useState } from "react";



const Favorite = () => {
    const allCharacters = useSelector((state) => state.allCharacters);

    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const handleOrder = (event) => {
        const param = event.target.value;
        if (param !== "NoOption") {
            dispatch(orderCards(param));
            setAux(!aux);
        }
    }
    const handleFilter = (event) => {
        const gender = event.target.value;
        if (gender !== "NoOption") {
            dispatch(filterCards(gender));
        }
    }
    const handleClick = () => {
        dispatch(showAll());
    }


    return (
        <div className={styles.container}>
            <div className={styles.filterContainer}>
                <button onClick={handleClick} className={styles.button}>All Favorites</button>
                <label htmlFor="selectOrder" className={styles.label}>Order</label>
                <select name="selectOrder" id="order" onChange={handleOrder}>
                    <option value="NoOption"> - </option>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
                <label htmlFor="gender" className={styles.label}>Gender</label>
                <select name="selectGender" id="gender" onChange={handleFilter}>
                    <option value="NoOption"> - </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
            <div className={styles.listCards}>
                {allCharacters.map(
                    (character, index) =>
                        <Card
                            key={index}
                            id={character.id}
                            name={character.name}
                            status={character.status}
                            species={character.species}
                            gender={character.gender}
                            origin={character.origin.name}
                            image={character.image}
                            onClose={() => { alert("No se puede cerrar") }}
                        />
                )}
            </div>
        </div>
    )
}

export default Favorite;