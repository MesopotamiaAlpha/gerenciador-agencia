import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Cadastro_Pri from './components/prinex/cadastro_pri';
import Resultado_Pri from './components/prinex/resultado';
import Delete_Pri from './components/prinex/delet_pri';

ReactDOM.render(
  <React.StrictMode>
    <Cadastro_Pri> 

    </Cadastro_Pri>

    <Resultado_Pri> 
        
    </Resultado_Pri>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
