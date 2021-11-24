import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Quadrado1 from './components/quadrado';
import Quadrado2 from './components/resultado';
import Quadrado3 from './components/delet';

ReactDOM.render(
  <React.StrictMode>
    <Quadrado1> 

    </Quadrado1>

    <Quadrado2> 
        
    </Quadrado2>

    <Quadrado3> 
        
    </Quadrado3>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
