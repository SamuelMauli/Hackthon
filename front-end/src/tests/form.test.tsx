// import { screen } from '@testing-library/dom';
// import { render } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
// import store from '../redux';
// import Form from '../pages/Form';

// describe('Teste da página de Login', () => {
//   test('O texto do componente header é renderizado', () => {
//     render(
//       <BrowserRouter>
//         <Provider store={ store } >  
//           <Form />
//         </Provider>
//       </BrowserRouter>
//     );
//     const headerText = screen.getByText('Aviso de Sinistros');
//     expect(headerText).toBeInTheDocument();
//   });

//   test('O campo para preenchimento do endereço é renderizado', () => {
//     render(
//     <BrowserRouter>
//       <Provider store={ store } >  
//        <Form />
//       </Provider>
//     </BrowserRouter>
//     );
//     const emailInput = screen.getByPlaceholderText('Digite seu e-mail');
//     expect(emailInput).toBeInTheDocument();
//   });

//   test('O botão ENVIAR é renderizado desativado', () => {
//     render(
//       <BrowserRouter>
//         <Provider store={ store } >  
//          <Form />
//         </Provider>
//       </BrowserRouter>
//       );
//     const button = screen.getByRole('button', { name: 'Enviar' });
//     expect(button).toBeInTheDocument();
//     expect(button).toBeDisabled();
//   });
// });