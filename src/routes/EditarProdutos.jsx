import { useParams } from "react-router-dom";

export default function EditarProdutos() {

  document.title = "Editar Produtos";

  //Utilizando o HOOK useParams()

  const {id} = useParams();

  return (
    <>
      <h1>EditarProdutos</h1>
      <p>Produto selecionado : {id}</p>
    </>
  )
}

