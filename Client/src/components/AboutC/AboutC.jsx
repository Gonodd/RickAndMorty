import styles from "./AboutC.module.css"
import imagenAbout from "../../Assets/gonzalo.png"
const AboutC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <p>
                    Esta aplicacion de Rick & Morty fue creada en el marco del proyecto integrador de HENRY
                    durante el cursado de la carrera Full Stack Developer. Se utilizan:
                </p>
                <ul>React</ul>
                <ul>Redux</ul>
                <ul>Module Css</ul>
            </div>
            <div className={styles.imgContainer}>
                <img src={imagenAbout} className={styles.img} alt="" />
                Gonzalo Oddeni
            </div>
        </div>
    )
}
export default AboutC;