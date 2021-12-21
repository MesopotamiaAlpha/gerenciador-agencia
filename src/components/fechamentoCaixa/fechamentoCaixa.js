import React, { useEffect, useState } from "react";
import "./fechamentoCaixa";
import "./fechamentoCaixa.css";
import Caixa from "./caixaComponent";
import RestanteCaixa from "./restanteComponent";


function FechamentoCaixa() {

    return (
        <div>
            <h1 className="titulo2">Fechamento de Caixa</h1>
            <Caixa /> 
            <RestanteCaixa />
        </div>



    );
}
export default FechamentoCaixa;