import React, {useState} from "react";
import "./delet_pri";
import "./delet_pri.css";
import Axios from "axios";


function Delete_Pri() {

    const [post,setPost] = useState({});

    const deletePost = (id) => {
        Axios.delete(`http://192.168.1.27:3002/api/delete/${post}`).then((response)=>{
            alert("you deleted a post")
        })
    }
    console.log(post.id);
    return (
        <div className="deletar">
                <h1 className="titulo_del">Campo para deletar</h1>
                <input type="text" onChange={(e)=> {setPost(e.target.value)}}/>
                <button onClick={(() => deletePost(post.id))}>X</button>
                
            </div>

            
    );
}  
export default Delete_Pri;
