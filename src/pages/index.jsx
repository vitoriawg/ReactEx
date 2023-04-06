import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Navegador from "@/components/Navegador";
import styles from '../styles/Navegador.module.css'
import Link from "next/link";

export default function Inicio(){
    
    return (
       
    <div>
        <Layout>
            <div className={styles.navegador}>
       <Navegador texto = "Estilo" destino = "/estilo"/>
       <Navegador texto = "Index" destino = "/"/>
       <Navegador texto = "Jsx" destino = "/jsx"/>
       <Navegador texto = "Estado" destino = "/estado"/>
       <Navegador texto = "Integração" destino = "/integracao"/>
       
       </div>

        <h1>"Oinnnnn"</h1> 
        </Layout>
        </div> 


    )
}
