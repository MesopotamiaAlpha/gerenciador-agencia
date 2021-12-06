import React, { useState, useEffect } from "react";
import "./resultado";
import "./resultado.css";
import Axios from "axios";

// esta função traz todos os registros dentro do banco de dados e usa a função map para criar um array de objetos
function Resultado_Pri() {
    const [postList, setPostList] = useState([]);

    useEffect((data) => {
        Axios.get("http://192.168.1.27:3002/api/get").then((data) => {
            setPostList(data.data);
            console.log(data.data);
            
            
        });
    }, [])


//Na parte de baixo ele usa para apagar os registros do banco de dados

const deletePost = (id) => {
    Axios.delete(`http://192.168.1.27:3002/api/delete/${id}`).then((response)=>{
        alert("you deleted a post")
    })
}

// dentro do return ele verifica o array e cria um botão para deletar para cada registro dentro do banco de dados, os botoes possuem um id de cada registro para apagar cada um    
    return (
        <div className="resultado">
                <h1 className="titulo">Prinex recebidos</h1>
                <ul>
                    {postList.map(nome_prinex => <div className="textoLista" key={nome_prinex.id_pri}>{nome_prinex.nome_prinex}
                        <button className="btnDel" onClick={(() => deletePost(nome_prinex.id_pri))}>X</button>
                    </div>)}
                    
                </ul>
            </div>
    );
}
export default Resultado_Pri;
