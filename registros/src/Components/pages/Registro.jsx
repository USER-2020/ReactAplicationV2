  import React, {useState} from "react";
  import axios from "axios";

  function Registro(){

    //inicializacion de variables de registro
    const [input, setInput] =useState({
        firstName: "",
        surName:"",
        email:"",
        password:""
    });

    //Crear funcion handleClick para cambiar el valor por el escrito por el teclado
    function handleChange(event){
      // console.log(input);
      const {name, value}=event.target;
      //guardar el evento anterior
      setInput(prevInput => {
        return{
          ...prevInput,
          [name]:value
        }
      });
    }

    // funcion al hacer cli para el submit del formulario para  registrar
    function handleClick(event){
      //Evita carga de pagina al clicar boton 
      event.preventDefault();

      //crear objeto para pasar a servidor 
      const nUsuario = {
        firstName: input.firstName,
        surName:input.surName,
        email:input.email,
        password:input.password

      }

      //Submit al servidor o bd metodo post de axios
      axios.post("/registrar", nUsuario);
    }
      return(
    <div className="container">
      <form>
      <iframe src="https://embed.lottiefiles.com/animation/12546"></iframe>
      {/* <h1 class="h3 mb-3 fw-normal">Please sign in</h1> */}


     <div class="input-group mb-3">
      <input onChange={handleChange} name="firstName" value={input.firstName} type="text" className="form-control" id="floatingInput" placeholder="FirstName" />
      
      {/* <span class="input-group-text">@</span> */}
      <input onChange={handleChange} name="surName" value={input.surName} type="text" className="form-control" id="floatingInput" placeholder="Surname" />
      
      
      </div>
      <div className="form-floating mb-3">
        <input onChange={handleChange} name="email" value={input.email} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
        <label for="floatingInput">Email address</label>
      </div>
      <div className="form-floating mb-3">
        <input onChange={handleChange} name="password" value={input.password} type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
        <label for="floatingPassword">Password</label>
      </div>

      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"/> Remember me
        </label>
      </div>
      <button onClick={handleClick} className="w-100 btn btn-lg " id="mybutton" type="submit">Sign in</button>
      <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
    </form>
          </div>
      );
  }

  export default Registro;