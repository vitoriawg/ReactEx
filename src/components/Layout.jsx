import Link from "next/link";
import styles from '../styles/Layout.module.css'

export default function Layout(props){
    console.log(props)
    return(
        <div className={styles.layout} >
        <div className={styles.cabecalho}> 
        <h1>Avmb Soluções em TI</h1>   
        <Link href="/">
            Voltar</Link>
        </div>
        <div className={styles.conteudo}>
            {props.children}
        </div>
        </div>
    )


}