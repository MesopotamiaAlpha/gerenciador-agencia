import React, {useState}  from "react";
import "./cadastro_pri";
import "./cadastro_pri.css";
import Axios from 'axios'


function Cadastro_Pri() {

const [userName,setUserName] = useState("");
const [text,setText] = useState("");

const submitPost = () => {
    Axios.post('http://192.168.1.27:3002/api/create', {userName: userName})
    }
    return (
        <div className="quadro1">
            <form>
            <h1>Adicionar no banco de dados</h1>

            <input type="text" onChange={(e)=> {setUserName(e.target.value)}}/>

            <button onClick={submitPost}>Enviar campo nome</button>
            
            </form>
        </div>
    );

    
    }

export default Cadastro_Pri;
