import { useParams } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";


export default function EditarProdutos() {

  document.title = "Editar Produtos";

  //Utilizando o HOOK useParams()
  const {id} = useParams();

  //Filtrando o produto selecionado byId
  const produtoFiltrado = ListaProdutos.filter( (item)=> item.id === parseInt(id) );

  return (
    <>
      <h1>EditarProdutos</h1>
      <p>Produto selecionado : {id}</p>
      <p>Nome do produto : {produtoFiltrado[0].nome}</p>
      <img src={produtoFiltrado[0].img} alt={produtoFiltrado[0].nome}/>
    </>
  )
}

