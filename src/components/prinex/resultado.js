import React, { useState, useEffect } from "react";
import "./resultado";
import "./resultado.css";
import Axios from "axios";
import { ListItemButton, Button, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@material-ui/data-grid'


const url = "http://192.168.1.34:3002/api";


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'Destinatario', width: 190 },
    { field: 'lastName', headerName: 'Origem', width: 130 },
    { field: 'age',      headerName: 'CTE',   type: 'number', width: 190,  },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];





// esta função traz todos os registros dentro do banco de dados e usa a função map para criar um array de objetos
function Resultado_Pri() {
    const [postList, setPostList] = useState([]);

    useEffect((data) => {
        Axios.get(url+"/get").then((data) => {
            setPostList(data.data);
            console.log(data.data);
        });
    }, [])

function deletPost (id){
    Axios.delete(url+`/delete/${id}`).then((response)=>{
        window.alert("you deleted a post")
    })
}

//Na parte de baixo ele usa para apagar os registros do banco de dados

const listarPost = (id) => {

}



// dentro do return ele verifica o array e cria um botão para deletar para cada registro dentro do banco de dados, os botoes possuem um id de cada registro para apagar cada um    
    return (

        <Paper  elevation={12}  style={{  padding: 1,    backgroundColor: "#eaeef3" }}  sx={{ mx: 5, textAlign: 'center' }} >
        <div className="resultado">



        <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                >

                </DataGrid>
            </div>



                <h1 className="titulo">Prinex recebidos</h1>
                <ul className="listaUl">
                                        
                    {postList.map(nome_prinex =>
                    <ListItemButton style={{ backgroundColor: "#eaeef3"}} component="a" className="textoLista" key={nome_prinex.id_pri}>
                        {"Id Prinex:"+ nome_prinex.id_pri + "/ Nome Destinatario: " + nome_prinex.destinatario + "/ Tipo Prinex: " + nome_prinex.tipo + "/ Numero Cte: " + nome_prinex.cte + "/ Data cadastrado: " + nome_prinex.cad_data}
                        <Button className="btnDel" onClick={(() => deletPost(nome_prinex.id_pri))}> <DeleteIcon edge="end" /> </Button>
                    </ListItemButton>)}
                </ul>

            </div>
            </Paper>
    );
}

export default Resultado_Pri;
