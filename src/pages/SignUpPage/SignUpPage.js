import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToFeed, goToLogin } from "../../routes/coordinator";
import { FormContainer, InputContainer } from "./styled";

function SignUpPage() {
  const [formulario, setFormulario] = useState({nome: "", email: "", senha: ""})
  const navigate = useNavigate();

  const onChangeInput = (e) => {
    const {name, value} = e.target
    setFormulario({...formulario, [name]: value})
    console.log(e.target)
  }

  const SignUpPage = async (event) => {
    event.preventDefault()
    const body = {
      name: formulario.nome,
      email: formulario.email,
      password: formulario.senha
    }

    try {
      const response = await axios.post(`https://api-cookenu.onrender.com/user/signup`, body)
      console.log(response)
      localStorage.setItem("token", response.data.token)
      goToFeed(navigate)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <main>
      <h1>Cadastro</h1>
      <FormContainer onSubmit={SignUpPage} >
        <InputContainer>
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            required
            name="nome"
            onChange={onChangeInput}
            value={formulario.nome}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            required
            name="email"
            onChange={onChangeInput}
            value={formulario.email}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            required
            name="senha"
            onChange={onChangeInput}
            value={formulario.senha}
          />
        </InputContainer>

        <button type="submit" >Cadastrar</button>
      </FormContainer>
        <button onClick={() => goToLogin(navigate)}>Já sou cadastrado</button>
    </main>
  );
}

export default SignUpPage;