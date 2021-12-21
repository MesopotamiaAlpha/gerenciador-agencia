import React, { useState, useEffect } from "react";
import Axios from "axios";
import { ListItemButton, Paper } from '@mui/material';


const url = "http://192.168.1.34:3002/api";

function Pendencias(){
    const [pendenciaList, setPendenciaList] = useState([]);

    useEffect((data) => {
        Axios.get(url + "/getPendencias").then((data) => {
            setPendenciaList(data.data);
            console.log(data.data);
        });
    }, []);

    return (
        <div>
            <h1>Pendencias</h1>
            <Paper className="paper" elevation={12} style={{ padding: 1, backgroundColor: "#eaeef3" }} sx={{ mx: 2, textAlign: 'center' }} >
            <div className="resultado">

                <h1 className="titulo">Prinex recebidos</h1>
                <ul className="listaUl">

                    {pendenciaList.map(nome_passageiro =>
                        <ListItemButton style={{ backgroundColor: "#eaeef3" }} component="a" className="textoLista" key={nome_passageiro.id_pendencias}>
                            {"Nome do Passageiro: " + nome_passageiro.nome_passageiro + "   / Valor: " + nome_passageiro.valor + "   / Observação: " + nome_passageiro.obs }
                        </ListItemButton>)}
                </ul>
            </div>
        </Paper>
        </div>
    );
}

export default Pendencias;