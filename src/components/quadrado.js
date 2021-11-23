import React, {useState}  from "react";
import "./quadrado";
import "./quadrado.css";
import Axios from 'axios'


function Quadrado1() {

const [userName,setUserName] = useState("");

const submitPost = () => {
    Axios.post('http://192.168.1.28:3002/api/create', {userName: userName})
    }
    return (
        <div className="quadro1">
            <form>
            <h1>Adicionar no banco de dados</h1>

            <input type="text" onChange={(e)=> {setUserName(e.target.value)}}/>

            <button onClick={submitPost}>Submit Post</button>
            
            </form>
            <h2>Resultado da query</h2>
        </div>
    );

    
    }

export default Quadrado1;
