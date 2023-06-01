import styles from "./Form.module.css"
import { useState } from "react";
import validate from "./validation";



const Form = (props) => {
    const { login } = props;
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        const propety = event.target.name;
        const value = event.target.value;
        setUserData({ ...userData, [propety]: value });
        validate({ ...userData, [propety]: value }, setErrors);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return (
        <div className={styles.container}>
            <div>
                <img src="./login.png" className={styles.imgContainer} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.itemContainer}>
                    <div className={styles.labelContainer}>
                        <label>Email: </label>
                        <label>Password: </label>
                    </div>
                    <div className={styles.inputContainer}>
                        <input type="text"
                            name="email"
                            placeholder="example@gmail.com"
                            value={userData.email}
                            onChange={handleChange}>
                        </input>
                        <input type="password"
                            name="password"
                            placeholder="Password"
                            value={userData.password}
                            onChange={handleChange}>
                        </input>
                    </div>
                </div>
                <div className={styles.errorContainer} >
                    <span> {errors.email}</span>
                    <span> {errors.password}</span>
                </div>
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default Form;