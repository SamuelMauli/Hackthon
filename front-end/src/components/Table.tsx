import { useSelector, useDispatch } from 'react-redux';
import { InformationType } from '../types';
import { DispatchType } from '../types';
import { getClaims } from '../redux/actions/list-claims';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Table() {
  const historyInformation = useSelector((state) => state);

  const dispatch: DispatchType = useDispatch();

  useEffect(() => {
    dispatch(getClaims());
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Data do Sinistro</th>
            <th>Tipo</th>
            <th>Local do Sinistro</th>
          </tr>
        </thead>
        <tbody>
          {historyInformation.map((info: InformationType) => (
            <tr key={info.location.address }>
              <td>{ info.date }</td>
              <td>{ info.type }</td>
              <td>{ `${info.location.address}, ${info.location.number}, ${info.location.district}, ${info.location.city}, ${info.location.stateLocal}, ${info.location.country}` }</td>
              <td>
                <button>Editar</button>
                <button>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    <NavLink id="link-voltar" to="/form">Voltar</NavLink>  
    </>
  );
}

export default Table;
