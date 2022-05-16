/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Intervalo.css"
import Card from "./Card";

export default props => {
  
  return (
    <Card title="Soma dos Números" blue>
      <div>
        <span>
          <apan>Resultado: </apan>
          <strong>{0}</strong>
        </span>
      </div>
    </Card>
  )
}