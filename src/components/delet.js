import React, {useEffect,useState} from "react";
import "./delet";
import "./delet.css";
import Axios from "axios";

function Quadrado3() {

    let {postId} = useState();
    const [post,setPost] = useState({});

    const deletePost = (id) => {
        Axios.delete(`http://192.168.1.28:3002/api/delete/${post}`).then((response)=>{
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
export default Quadrado3;
