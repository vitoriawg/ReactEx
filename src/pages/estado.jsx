import Layout from "@/components/Layout";
import { useState } from "react";

export default function Estado(){
    
    const state = useState(0)
    let numero = state[0]
    let alterarNumero = state[1]
    

    function incrementar (){
        alterarNumero (numero + 1)
    }
    return(
        <Layout titulo = "Componente com Estado">
            <span>{numero}</span>
            <br></br><br></br><br></br>
            <button onClick={incrementar}>Increment</button>
        </Layout>
    )
}