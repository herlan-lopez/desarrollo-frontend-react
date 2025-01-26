import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "motion/react";
import useForm from "../Hooks/useForm.js";
import ModalInfo from "../../Components/Modals/ModalInfo";
import ModalWelcome from "../../Components/Modals/ModalWelcome.jsx";
import {  initialForm,  setInputsDisabled,} from "../../store/features/form/formSlice";
import usipLogo from "../../assets/usip.png";

// eslint-disable-next-line react/prop-types
const FormLoginWithMotion = ({ titleForm }) => {
  const dispatch = useDispatch();
  const formDataInitial = useSelector((state) => state.form.loginForm);
  const inputsDisabled = useSelector((state) => state.form.updateInputsState);
  console.log(formDataInitial);
  const [showModalWelcome, setShowModalWelcome] = useState(false);
  const [showModalError, setShowModalError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  const { formData, handleChange, resetForm } = useForm({
    username: "",
    email: "",
    password: "",
    
  });

  //logueo
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    if (isLogged) {
      resetForm(formDataInitial);
    }
  }, [isLogged, formDataInitial]);

  //verificar si se loguea
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formDataInitial.password) {
      dispatch(
        initialForm({
          ...formDataInitial,
          username: formData.username,
          email: formData.email,
        })
      );
      dispatch(setInputsDisabled(true));
      setShowModalWelcome(true);
      setInputsDisabled(true);
      setIsLogged(true);
    
    } else {
      setShowModalError(true);
    }
  };

  const onCloseModalError = () => {
    setShowModalError(false);
  };

  const onCloseModalWelcome = () => {
    setShowModalWelcome(false);
  };

  return (

    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ModalInfo
        visible={showModalError}
        message="Username/Password Incorrectos!!!"
        onClose={onCloseModalError}
      />

      <ModalWelcome
        visible={showModalWelcome}
        message={`BIENVENIDO: ${formData.username}`}
        onClose={onCloseModalWelcome}
      />

      <div className="container">
      <div className="brand-logo" style={{ backgroundImage: `url(${usipLogo})` }}></div>
        
        <form onSubmit={handleSubmit}>
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="brand-title">{titleForm}</div>
            <br />
          </motion.div>

          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="input-group">
              <label>Module: </label>
              <input
                type="text"
                className="custom-input"
                name="module"
                value={formDataInitial.module}
                required
                disabled
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="input-group">
              <label>Username:</label>
              <input
                className="custom-input"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                disabled={inputsDisabled}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="input-group">
              <label>Email:</label>
              <input
                className="custom-input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={inputsDisabled}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="input-group">
              <label>Password: </label>
              <input
                className="input2"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                disabled={inputsDisabled}
              />

              <button
                className="button2"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button className="button" type="submit" disabled={inputsDisabled}>
              Login
            </button>
            <br />
            <br />
          </motion.div>
        </form>
       
      </div>
    </motion.div>
  );
};
export default FormLoginWithMotion;
