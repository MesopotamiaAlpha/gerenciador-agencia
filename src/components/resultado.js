import React, { useState, useEffect } from "react";
import "./resultado";
import "./resultado.css";
import Axios from "axios";

function Quadrado2(teste) {
    const [postList, setPostList] = useState([]);

    useEffect((data,teste) => {
        Axios.get("http://192.168.1.28:3002/api/get").then((data) => {
            setPostList(data.data);
            console.log(data.data);
            teste = data.data;
            console.log("Dentro da variavel tem",teste);
            
        });
    }, [])

    return (
        
        <div className="resultado">
                <h1 className="titulo">Dentro do banco de dados</h1>
                
            </div>
    );
}
export default Quadrado2;
