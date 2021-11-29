import React, {useState}  from "react";
import "./cadastro_pri";
import "./cadastro_pri.css";
import Axios from 'axios'
import Button from '@material-ui/core/Button';



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

            <input className="inpNome" type="text" onChange={(e)=> {setUserName(e.target.value)}}/>

            <Button  variant="contained" color="primary" onClick={submitPost}>Cadastrar nome</Button>
            
            </form>
        </div>
    );

    
    }

export default Cadastro_Pri;
