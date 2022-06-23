import React from "react";

const Quadro = (props) => {
    return (
      <div className="quadrado-externo">
        <div className="quadrado-line">
          <div className="conteudo">
            <h1>{props.titulo}</h1>
            {props.children}
          </div>
        </div>
      </div>
    );
  };

  export default Quadro;