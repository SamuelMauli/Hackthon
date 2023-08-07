import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postDataToApi } from '../redux/actions/add-claim';
import { NavLink } from "react-router-dom";
import Table from "../components/Table";
import { DispatchType } from '../types';

function Form() {
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [description, setDescription] = useState('');
  
  const dispatch: DispatchType = useDispatch();

  const activateButton = () => {
    return (
      date.length < 1
      || type === ''
      || address.length < 1
      || number.length < 1
      || district.length < 1
      || city.length < 1
      || state.length < 1
      || country.length < 1
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(postDataToApi({
      date,
      type,
      location: {
        address,
        number,
        district,
        city,
        stateLocal: state,
        country
      }
    }));
  };

  return (
    <>
      <h2>Adicionar Novo Sinistro</h2>
      <form id="form-sinistros" onSubmit={ handleSubmit }>
        <label>
          Data do Sinistro
          <input type="date" id="date-form" onChange={ e => setDate(e.target.value) } />
        </label>
        <label id="label-type">
          Tipo
          <select id="select-form" onChange={ e => setType(e.target.value) }>
            <option>Selecione</option>
            <option value="roubo-ou-furto">Roubo ou Furto</option>
            <option value="colisao">Colisão</option>
            <option value="causas-naturais">Causas Naturais</option>
          </select>
        </label>
        <label id="form-location">
          Local do Sinistro
          <input type="text" placeholder="Rua" className="input-location" onChange={ e => setAddress(e.target.value) } />
          <input type="number" placeholder="Número" className="input-location" onChange={ e => setNumber(e.target.value) } />
          <input type="text" placeholder="Bairro" className="input-location" onChange={ e => setDistrict(e.target.value) }/>
          <input type="text" placeholder="Cidade" className="input-location" onChange={ e => setCity(e.target.value) } />
          <input type="text" placeholder="Estado" className="input-location" onChange={ e => setState(e.target.value) } />
          <input type="text" placeholder="País" className="input-location" onChange={ e => setCountry(e.target.value) } />
          <input type="text" placeholder="Descreva o sinistro" className="input-description" onChange={ e => setDescription(e.target.value)} />
        </label>
        <button disabled={ activateButton() } type="submit">Enviar</button>
      </form>
      <NavLink id="link-listar" to="/list">Listar Sinistros Anteriores</NavLink>
    </>
  )
}

export default Form;