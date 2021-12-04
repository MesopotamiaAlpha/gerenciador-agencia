import React, {useState}  from "react";
import "./cadastro_pri";
import "./cadastro_pri.css";
import Axios from 'axios';


function Cadastro_Pri() {

const [userName,setUserName] = useState("");

const submitPost = () => {
    Axios.post('http://192.168.1.27:3002/api/create', {userName: userName})
    }
    return (
        <div className="quadro1">
            <form>
            <h1 className="titulo">Cadastrar o prinex</h1>

            <input className="inpNome" type="text" onChange={(e)=> {setUserName(e.target.value)}}/>

            <button className="btnCadastro" onClick={submitPost}>Cadastrar</button>
            
            </form>
        </div>
    );

    
    }

export default Cadastro_Pri;
