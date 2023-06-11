const validate = (userData, setErrors) => {
    // Email validation
    if (!userData.email) {
        setErrors((errors) => ({ ...errors, email: "Empty Email" }));
    } else {
        if (userData.email.length < 36) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)) {
                setErrors((errors) => ({ ...errors, email: "" }));
            } else {
                setErrors((errors) => ({...errors, email: "Invalid format Email"}));
            }
        } else {
        setErrors((errors) => ({...errors, email: "Must be less than 35 characters"}));
        }
    }

    // Password validation
    if (/^(?=.*\d).{6,10}$/.test(userData.password)) {
        setErrors((errors) => ({ ...errors, password: "" }));
    } else {
        setErrors((errors) => ({...errors, password: "Invalid password."}));
    }
};
export default validate