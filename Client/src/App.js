import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./views/About/About";
import Detail from "./views/Detail/Detail";
import Favorit from "./views/Favorit/favorite";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Form from "./components/Form/Form";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [access, setAccess] = useState(false);
  const EMAIL = "ejemplo1@hotmail.com";
  const PASSWORD = "ejemplo12";
  const navigate = useNavigate();
  function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(data);
       access && navigate('/home');
    });
 }
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function onSearch(id) {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name && noRepeat(id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }
  function noRepeat(id) {
    const numericId = parseInt(id);
    return !characters.some((elemento) => elemento.id === numericId);
  }

  function onClose(id) {
    setCharacters((prevCharacters) => {
      const filteredCharacters = prevCharacters.filter(
        (elemento) => elemento.id !== id
      );
      return filteredCharacters;
    });
  }

  return (
    <div className="App">
      {window.location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route exact path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorit onClose={onClose} />} />
      </Routes>
    </div>
  );
}

export default App;
