import React from "react";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
//Componentes
import Form from "./components/Form/Form.jsx";
import DetailC from "./components/DetailC/DetailC.jsx"
import AboutC from "./components/AboutC/AboutC.jsx";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Favorite from "./components/Favorites/Favorites.jsx";


function App() {
  const location=useLocation()
  console.log(location)
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "";//'ejemplo@gmail.com';
  const PASSWORD = "";//"asd123";

  const logOut=()=>{
    navigate("/")
    setAccess(false);
  }

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
    }else {
      window.alert("Bad Email or Password!");
    }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const clear = ()=>{
    setCharacters([]);
  }

  
  const sixRandom = () =>{
    setCharacters([]);
    for (let i = 0; i <6; i++) {
      const id = (Math.floor((Math.random() * (826)) + 1));
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
    }
  }

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        if (characters.length === 6) {
          characters.shift(); //!Mantener solo 6 cards
          setCharacters(characters);
        }
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  };

  const onClose = (id) => {
    const filter = characters.filter((character) => {
      return character.id !== Number(id);
    });
    setCharacters(filter);
  };

  return (
    <div className={styles.App}>
      
      {location.pathname !== "/" && <Nav onSearch={onSearch} sixRandom={sixRandom} clear={clear} logOut={logOut} />}
      <Routes>
        <Route path="/home" element= {<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<AboutC/>}/>
        <Route path="/detail/:id" element={<DetailC/>}/>
        <Route path="/" element={<Form login={login}/>}/>
        <Route path="/favorites" element={<Favorite/>}/>
      </Routes>
    </div>
  );
}

export default App;
