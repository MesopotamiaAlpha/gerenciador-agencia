import React, { useState, useEffect } from "react";
import "./resultado";
import "./resultado.css";
import Axios from "axios";
import { ListItemButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const url = "http://192.168.1.34:3002/api";

// esta função traz todos os registros dentro do banco de dados e usa a função map para criar um array de objetos
function Resultado_Pri() {
    const [postList, setPostList] = useState([]);

    useEffect((data) => {
        Axios.get(url+"/get").then((data) => {
            setPostList(data.data);
            console.log(data.data);
        });
    }, [postList])

function deletPost (id){
    console.log("teste");
    Axios.delete(url+`/delete/${id}`).then((response)=>{
        alert("you deleted a post")
    })
}

//Na parte de baixo ele usa para apagar os registros do banco de dados

const listarPost = (id) => {

}



// dentro do return ele verifica o array e cria um botão para deletar para cada registro dentro do banco de dados, os botoes possuem um id de cada registro para apagar cada um    
    return (
        <div className="resultado">
                <h1 className="titulo">Prinex recebidos</h1>
                <ul className="listaUl">
                    {postList.map(nome_prinex => 
                    <ListItemButton style={{ backgroundColor: "#eaeef3",    border: "1px solid black"  }} component="a" className="textoLista" key={nome_prinex.id_pri}>{nome_prinex.nome_prinex}
                        <Button className="btnDel" onClick={(() => deletPost(nome_prinex.id_pri))}> <DeleteIcon edge="end" /> </Button>
                    </ListItemButton>)}
                    
                </ul>
                
            </div>
            
    );
}

export default Resultado_Pri;
