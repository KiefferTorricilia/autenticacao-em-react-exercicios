import { useNavigate } from "react-router-dom";
import { goToFeed, goToLogin } from "../../routes/coordinator";
import { FormContainer, InputContainer } from "./styled";

function SignUpPage() {
  

  const navigate = useNavigate();

  return (
    <main>
      <h1>Cadastro</h1>
      <FormContainer>
        <InputContainer>
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            required
          />
        </InputContainer>

        <button onClick={() => goToFeed(navigate)}>Cadastrar</button>
        <button onClick={() => goToLogin(navigate)}>Já sou cadastrado</button>
      </FormContainer>
    </main>
  );
}

export default SignUpPage;