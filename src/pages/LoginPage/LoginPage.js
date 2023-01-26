import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToFeed, goToSignUp } from "../../routes/coordinator.js";
import { FormContainer, InputContainer } from "./styled.js";


function LoginPage() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
    console.log(email)
  }
  const onChangeSenha = (e) => {
    setSenha(e.target.value)
    console.log(senha)
  }

  const navigate = useNavigate();

  const Login =  () => {
    const body = {
      email: email,
      password: senha
    }

    axios.post(`https://api-cookenu.onrender.com/user/login`, body)
    .then((resposta) => {
      console.log(resposta.data.token)
      localStorage.setItem("token", resposta.data.token)
      goToFeed(navigate)
    })
    .catch((erro) => {
      console.logO(erro)
    })
    
  }


 
  return (
    <main>
      <h1>Login</h1>
      
        <InputContainer>
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            required
            value={email}
            onChange={onChangeEmail}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            required
            value={senha}
            onChange={onChangeSenha}
          />
        </InputContainer>
        <button onClick={Login}>Entrar</button>
        <button onClick={() => goToSignUp(navigate)}>Não tenho cadastro</button>
      
    </main>
  );
}

export default LoginPage;
