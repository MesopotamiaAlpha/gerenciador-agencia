import React, { useEffect, useState } from "react";
import "./cadastro_pri";
import "./cadastro_pri.css";
import Axios from 'axios';
import { Checkbox, Paper, Button } from '@mui/material';
import SendIcon from '@material-ui/icons/Send';



function Cadastro_Pri() {

    const [userName, setUserName] = useState("");

    //Teste de label para colocar dentro das opções

    const submitPost = () => {
        Axios.post('http://192.168.1.34:3002/api/create', { userName: userName })
    }



    return (

        <div className="quadro1">



            <Paper elevation={12} style={{ padding: 1, backgroundColor: "#002021", border: "5px solid #ed7723" }}  >
                <h1 className="titulo">Cadastrar o prinex</h1>

                <input className="inpNome" type="text" onChange={(e) => { setUserName(e.target.value) }} />
                <div className="boxTipo">
                    <Checkbox className="boxTipo" /> <p className="textoTipo" >Envelope</p>
                    <Checkbox className="boxTipo" /> <p className="textoTipo">Caixa </p>
                </div>


                <Button className="btnCadastro" variante="contained" endIcon={<SendIcon />} onClick={submitPost}>Cadastrar</Button>

            </Paper>
        </div>
    );


}

export default Cadastro_Pri;
