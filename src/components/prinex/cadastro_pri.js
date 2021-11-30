import React, {useState}  from "react";
import "./cadastro_pri";
import "./cadastro_pri.css";
import Axios from 'axios';
import { TextField , Button } from '@material-ui/core';

function Cadastro_Pri() {
    const [value, setValue] = React.useState('Controlled');

const [userName,setUserName] = useState("");
const [text,setText] = useState("");

const submitPost = () => {
    Axios.post('http://192.168.1.27:3002/api/create', {userName: userName})
    }
    return (
        <div className="quadro1">
            <form>
            <h1 className="titulo">Adicionar no banco de dados</h1>

            <TextField  id="outlined-textarea" label="Cadastre aqui" placeholder="Nome e tipo de volume" multiline  type="text" onChange={(e)=> {setUserName(e.target.value)}}/>

            <Button variant="contained" color="success" onClick={submitPost}>Cadastrar Prinex</Button>
            
            </form>
        </div>
    );

    
    }

export default Cadastro_Pri;
