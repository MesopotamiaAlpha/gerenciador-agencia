import React, { useState, useEffect } from "react";
import "./resultado";
import "./resultado.css";
import Axios from "axios";

function Quadrado2(teste) {
    const [postList, setPostList] = useState([]);

    useEffect((data) => {
        Axios.get("http://192.168.1.28:3002/api/get").then((data) => {
            setPostList(data.data);
            console.log(data.data);

            
        });
    }, [])

    return (
        <div className="resultado">
                <h1 className="titulo">Dentro do banco de dados</h1>
                <ul>
                    <li>{postList.map(nome => <div key={nome.id_nome}>{nome.nome_passageiro}</div>)}</li>
                </ul>
            </div>
    );
}
export default Quadrado2;
