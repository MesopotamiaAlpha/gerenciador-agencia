import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SearchAppBar from './components/topBar'
import Cadastro_Pri from './components/prinex/cadastro_pri';
import FechamentoCaixa from './components/fechamentoCaixa/fechamentoCaixa';
import Agendamento from './components/agendamento/agendamento';
import Estoque from './components/estoque/estoque';
import Pendencias from './components/pendencias/pendencias';


export default function MainRoutes() {
    return (
        <Router>

            <SearchAppBar > </SearchAppBar>
            <Link to="/home">Pagina principal</Link>
            <Link to="/fechamentoCaixa">Fechamento Caixa</Link>
            <Link to="/agendamento">Agendamento de passageiros</Link>
            <Link to="/estoque">Estoque</Link>
            <Link to="/pendencias">Pendencias passageiros</Link>
            <Routes>
                <Route path='/' element={<Cadastro_Pri />} />
                <Route path='/home' element={<Cadastro_Pri />} />
                <Route path='/agendamento' element={<Agendamento />} />
                <Route path='/fechamentoCaixa' element={<FechamentoCaixa />} />
                <Route path='/estoque' element={<Estoque />} />
                <Route path='/pendencias' element={<Pendencias />} />
            </Routes>

        </Router>
    );

}