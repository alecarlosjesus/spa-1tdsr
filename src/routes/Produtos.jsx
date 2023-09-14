import { Link } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import { AiFillEdit as Editar } from "react-icons/ai";
import { RiDeleteBin2Fill as Excluir } from "react-icons/ri";
import styles from "./Produtos.module.css";
import { useState, useEffect } from "react";

export default function Produtos() {
  document.title = "Produtos";

  const [count, setCount] = useState(0);

  //Neste formato o useEffect executa sempre que ocorrer uma alteração de estado de algum elemento ou no componente.
  // useEffect(() => {
  //   console.log(`Executa sempre - ${count} !`);
  // });

const [novaLista, setNovaLista] = useState([{}]);

//Neste formato o useEffect executa apenas quando ocorrer o carregamento do componente rprincipal.
  useEffect(() => {
    setNovaLista(ListaProdutos);
  },[]);
  
  useEffect(() => {
    console.log("Executa sempre que ocorrer uma alteração de estado do elemento ou no componente indicado no array de dependências!");
  },[count]);


  return (
    <>
      <h1>Lista de Produtos</h1>
      <div>
        <button onClick={()=> setCount( count + 1)}>COUNTER - {count}</button>
      </div>
      <div>
        <table className={styles.tblEstilo}>

          <thead className={styles.tblHeader}>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>DESCRIÇÃO</th>
              <th>IMAGEM</th>
              <th>PREÇO</th>
              <th>EDITAR/EXCLUIR</th>
            </tr>
          </thead>

          <tbody>
            {novaLista.map((item, indice) => (
              <tr key={indice} className={styles.tblRow}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.desc}</td>
                <td>
                  <img src={`${item.img}`} alt={`${item.desc}`} />
                </td>
                <td>{item.preco}</td>
                <td>
                  {" "}
                  <Link to={`/editar/produtos/${item.id}`}>
                    {" "}
                    <Editar />{" "}
                  </Link>{" "}
                  /{" "}
                  <Link to={`/excluir/produtos/${item.id}`}>
                    {" "}
                    <Excluir />{" "}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <td colSpan={6}>PRODUTOS</td>
            </tr>
          </tfoot>

        </table>
      </div>
    </>
  );
}
