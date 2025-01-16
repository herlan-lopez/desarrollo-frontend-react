import { useState } from "react";

const FormLogin = ({titleForm}) => {

const[formData,setFormData]=useState({
    username: '',
    email: ''
});

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('datos del formulario', formData);
};
    const handleChange = (e) => {
      //  debugger;
     // console.log(e)
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
 

  return (
    <>
        <form onSubmit={handleSubmit}>
            <h3>{titleForm}</h3>
            <div>
                <label>Username:</label>
                <input type="text" 
                       name="username"                  
                       value={formData.username}
                       onChange={handleChange}
                       required 
                />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" 
                       name="email"                  
                       value={formData.email}
                       onChange={handleChange}
                       required 
                />
            </div>
            <button type="submit">Enviar</button>
        </form>
    </>
  );

};
export default FormLogin