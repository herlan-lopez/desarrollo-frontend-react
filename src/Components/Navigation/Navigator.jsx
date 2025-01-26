import {useEffect, useState } from "react";
import { Link } from "react-router";
import { useSelector, useDispatch } from 'react-redux'
import { cleanForm , setInputsDisabled } from '../../store/features/form/formSlice';
import ModalInfo from "../../Components/Modals/ModalInfo.jsx";
import Confetti from "react-confetti";
const Navigator = () => {
 
 const dispatch = useDispatch();
 const formDataInitial = useSelector((state) => state.form.loginForm);
 const [showModalSalir, setShowModalSalir] = useState(false);
 

 //efecto confeti cuando esta logueado
const [showConfetti, setShowConfetti] = useState(false);
 useEffect(() => {
  if (formDataInitial.username && formDataInitial.email) {
    setShowConfetti(true);
  }
}, [formDataInitial.username, formDataInitial.email]);

  const handleLogout = () => {
    setShowModalSalir(true);
  };

  const confirmLogout = () => {
    dispatch(setInputsDisabled(false)); 
    dispatch(cleanForm()); 
    setShowModalSalir(false);
    {setShowConfetti(false)}
  };

  const onCloseModalSalirModal = () => {
    setShowModalSalir(false);
  };
  return (

    <nav className="navbar">
      <div className="nav-links">
      <Link to="/" className="nav-link">LandingPage</Link>
      <Link to="/login" className="nav-link">Login</Link>
      <Link to="/counter" className="nav-link">Counter</Link>
      <Link to="/think" className="nav-link">Think</Link>
      <Link to="/products" className="nav-link">Product</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/about" className="nav-link"></Link>
      </div>
      <div className="nav-span">
        {formDataInitial.username && formDataInitial.email && (
          <>
            <h5>Bienvenido {formDataInitial.username} | {formDataInitial.email}</h5>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
        
          </>
        )}
      </div>

      <ModalInfo
        visible={showModalSalir}
        message="¿Estás seguro de que quieres cerrar sesión?"
        onClose={onCloseModalSalirModal}
      >
          <button className="button2"onClick={confirmLogout}>Salir!!!</button>
    </ModalInfo>
    {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
        />
      )}
    </nav>
  )
}

export default Navigator