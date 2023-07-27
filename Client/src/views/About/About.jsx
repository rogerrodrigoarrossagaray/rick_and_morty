import React from "react";
import Styles from "./About.module.css";

export default function About() {
  return (
    <div className={Styles.container}>
      <h1>About</h1>
      <p>
        ¡Hola! Mi nombre es Roger Arrossagaray y soy un apasionado alumno de programación. Actualmente, estoy cursando el Módulo 2 en Henry, un bootcamp especializado en enseñar programación y desarrollo web.
      </p>
      <p>
        Mi misión es convertirme en un desarrollador de software competente y capacitado para enfrentar los desafíos del mundo digital. Me encanta aprender y aplicar mis conocimientos para crear soluciones innovadoras.
      </p>
      <p>
        Durante mi tiempo en Henry, he adquirido habilidades en lenguajes de programación como JavaScript y herramientas populares como React,Ajax y Redux entre otras. Estoy emocionado de seguir aprendiendo y creciendo en este campo en constante evolución.
      </p>
      <p>
        Si tienes alguna pregunta, colaboración o simplemente quieres conectarte, no dudes en contactarme a través de mi correo electrónico: <a href="mailto:roger.rodrigo.arrossagaray@gmail.com">roger.rodrigo.arrossagaray@gmail.com</a>. ¡Estoy ansioso por expandir mi red profesional y aprender de nuevos desafíos!
      </p>
    </div>
  );
}
