import React, { useState, useEffect, useRef } from "react";
import validation from "../../Validations/Form-Validation/validation";
import styles from './Form.module.css';

export default function Form(props) {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const loginButtonRef = useRef(null);
  const containerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const forgottenLinkRef = useRef(null);
  const forgottenContainerRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    props.login(userData);
  }

  function handleChange(event) {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(validation({ ...userData, [event.target.name]: event.target.value }));
  }

  useEffect(() => {
    const loginButton = loginButtonRef.current;
    const container = containerRef.current;
    const closeButton = closeButtonRef.current;
    const forgottenLink = forgottenLinkRef.current;
    const forgottenContainer = forgottenContainerRef.current;

    function handleLoginButtonClick() {
      loginButton.style.display = 'none';
      container.style.display = 'block';
      container.style.transform = 'scale(0)';
      container.style.transition = 'transform 0.4s ease-in-out';

      setTimeout(function() {
        container.style.transform = 'scale(1)';
      }, 0);
    }

    function handleCloseButtonClick() {
      container.style.transform = 'scale(0)';
      container.style.transition = 'transform 0.4s ease-in-out';

      setTimeout(function() {
        container.style.display = 'none';
        forgottenContainer.style.display = 'none';
        loginButton.style.display = 'block';
      }, 800);
    }

    function handleForgottenLinkClick() {
      container.style.display = 'none';
      forgottenContainer.style.display = 'block';
    }

    loginButton.addEventListener('click', handleLoginButtonClick);
    closeButton.addEventListener('click', handleCloseButtonClick);
    forgottenLink.addEventListener('click', handleForgottenLinkClick);

    // Cleanup the event listeners when the component unmounts
    return () => {
      loginButton.removeEventListener('click', handleLoginButtonClick);
      closeButton.removeEventListener('click', handleCloseButtonClick);
      forgottenLink.removeEventListener('click', handleForgottenLinkClick);
    };
  }, []);

  return (
    <>
      <div className={styles.loginButton} ref={loginButtonRef}>
        <img className={styles.img} src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png" alt="Login Icon" />
      </div>

      <div className={styles.container} ref={containerRef}>
        <h1 className={styles.h1}>Log In</h1>
        
        <span className={styles.closeBtn} ref={closeButtonRef}>
          <img className={styles.img} src="https://cdn4.iconfinder.com/data/icons/miu/22/circle_close_delete_-128.png" alt="Close Icon" />
        </span>

        <form onSubmit={handleSubmit}>
          <input type="email" className={styles.input} name="email" placeholder="E-mail" value={userData.email} onChange={handleChange} />
          <p className={styles.errors}>{errors.email}</p>

          <input type="password" className={styles.input} name="password" placeholder="Password" value={userData.password} onChange={handleChange} />
          <p className={styles.errors}>{errors.password}</p>

          <button type="submit" className={styles.button}>Log in</button>

          <div className={styles.rememberContainer}>
            <input type="checkbox" id="checkbox-2-1" className={styles.checkbox} />
            <span className={styles.remember}>Remember me</span>
            <span className={styles.forgotten} ref={forgottenLinkRef}>Forgotten password</span>
          </div>
        </form>
      </div>

      <div className={styles.forgottenContainer} ref={forgottenContainerRef}>
        <h1>Forgotten</h1>
        <span className={styles.closeBtn} ref={closeButtonRef}>
          <img className={styles.img} src="https://cdn4.iconfinder.com/data/icons/miu/22/circle_close_delete_-128.png" alt="Close Icon" />
        </span>

        <form>
          <input type="email" name="email" placeholder="E-mail" />
          
        </form>
      </div>
    </>
  );
}



