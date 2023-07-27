export default function validation(inputs) {
    const errors = {};
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const verifipass = /\d/;
  
    if (!inputs.email) {
      errors.email = "Introduzca un correo electrónico, por favor.";
    } else if (!emailRegex.test(inputs.email)) {
      errors.email = "Debe introducir un correo electrónico válido.";
    } else if (inputs.email.length > 35) {
      errors.email = "El correo electrónico debe tener como máximo 35 caracteres.";
    } else {
      errors.email = "";
    }
  
    if (!inputs.password) {
      errors.password = "Introduzca una contraseña, por favor.";
    } else if (inputs.password.length < 6 || inputs.password.length > 10) {
      errors.password = "La contraseña debe tener entre 6 y 10 caracteres.";
    } else if (!verifipass.test(inputs.password)) {
      errors.password = "La contraseña debe contener al menos un número.";
    } else {
      errors.password = "";
    }
  
    return errors;
  }
  