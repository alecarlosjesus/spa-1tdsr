import { Link } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import {AiFillEdit as Editar} from "react-icons/ai";
import {RiDeleteBin2Fill as Excluir} from "react-icons/ri";

export default function Produtos() {

  document.title = "Produtos";

  const estiloTabela = {
    borderCollapse: "collapse",
    margin:"0 auto",
    border: "2px solid #ccc",
  }


  return (
    <>
      <h1>Lista de Produtos</h1>

      <div>

          <table style={estiloTabela}>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>DESCRIÇÃO</th>
              <th>IMAGEM</th>
              <th>PREÇO</th>
              <th>EDITAR/EXCLUIR</th>
            </tr>
            
              {ListaProdutos.map( (item,indice)=>(
                  <tr key={indice}>
                    <td>{item.id}</td>
                    <td>{item.nome}</td>
                    <td>{item.desc}</td>
                    <td><img src={`${item.img}`} alt={`${item.desc}`} /></td>
                    <td>{item.preco}</td>
                    <td> <Link to={`/editar/produtos/${item.id}`}> <Editar/> </Link> / <Link to={`/excluir/produtos/${item.id}`}> <Excluir/> </Link></td>
                  </tr>
              ))}

          </table>

      </div>

    </>
  )
}
 