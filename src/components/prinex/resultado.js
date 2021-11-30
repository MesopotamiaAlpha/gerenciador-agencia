import React, { useState, useEffect } from "react";
import "./resultado";
import "./resultado.css";
import Axios from "axios";
import { Button } from '@material-ui/core';

function Resultado_Pri() {
    const [postList, setPostList] = useState([]);

    useEffect((data) => {
        Axios.get("http://192.168.1.27:3002/api/get").then((data) => {
            setPostList(data.data);
            console.log(data.data);
            
            
        });
    }, [])
//Parte de cima é para pegar os posts e listar em map

//parte de baixo vai ser para delet dos posts mapeados


const [post,setPost] = useState({});

const deletePost = (id) => {
    Axios.delete(`http://192.168.1.27:3002/api/delete/${id}`).then((response)=>{
        alert("you deleted a post")
    })
}
//em cima é a função para deletar o post
    
    return (
        <div className="resultado">
                <h1 className="titulo">Prinex recebidos</h1>
                <ul className="textoLista">
                    {postList.map(nome_prinex => <div key={nome_prinex.id_pri}>{nome_prinex.nome_prinex}
                        <Button size="small" color="error" variant="outlined" onClick={(() => deletePost(nome_prinex.id_pri))}>X</Button>
                    </div>)}
                    
                </ul>
            </div>
    );
}
export default Resultado_Pri;
