import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const validatePassword = () => {
    const regexLetters = /[a-zA-Z]+/;
    const regexNumbers = /\d+/g;
    const regexSpecialCharacters = /[ !"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/;
    return !(
      password.length >= 6
      && regexLetters.test(password)
      && regexNumbers.test(password)
      && regexSpecialCharacters.test(password)
    );
  };

  const validateEmail = () => {
    return email.length < 3;
  };

  const activateButton = () => {
    return (
      validateEmail()
      || validatePassword()
    );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/form');
  };
  
  return (
    <form id="login-form" onSubmit={ handleSubmit }>
      <input type="email" placeholder="Digite seu e-mail" onChange={ handleChangeEmail } />
      <input type="password" placeholder="Digite sua senha" onChange= { handleChangePassword } />
      <h3>Sua senha precisa ter 6 ou mais caracteres e, ao menos, um caractere especial, uma letra e um número</h3>
      <button disabled={ activateButton() } type="submit">Entrar</button>  
    </form>
  )
}

export default Login;
