import { useEffect } from "react";
import "./ModalAction.scss";

export default function ModalAction(props) {

  let novoId;

  useEffect(() => {

    fetch("http://localhost:5000/produtos",{
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response)=> {
      console.log("Status do REQUEST HTTP : " + response.status);
      return response.json()
    })
    .then((response)=> {
      novoId = (response[response.length-1].id +1);
      console.log("NOVO ID : " + novoId);
      return novoId;
    })
  },[]);

  if (props.open) {
    return (
      <div className="container">
        <h1>CADASTRO DE PRODUTOS</h1>

        <div>
          <form>
            <fieldset>
              <span className="btnClose" onClick={() => props.setOpen(false)}>
                X
              </span>
              <legend>Novo Produto</legend>
              <div>
                <label htmlFor="idNome">Nome</label>
                <input
                  type="text"
                  name="nome"
                  placeholder="Digite o nome do produto."
                  required
                />
              </div>
              <div>
                <label htmlFor="idDesc">Descrição</label>
                <input
                  type="text"
                  name="desc"
                  placeholder="Digite a descrição do produto."
                  required
                />
              </div>
              <div>
                <label htmlFor="idImg">Imagem</label>
                <input
                  type="url"
                  name="img"
                  placeholder="Digite a url da imagem do produto."
                  required
                />
              </div>
              <div>
                <label htmlFor="idPreco">Preço</label>
                <input
                  type="text"
                  name="preco"
                  placeholder="Digite o preço do produto."
                  required
                />
              </div>
              <div>
                <button>CADASTRAR</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}
