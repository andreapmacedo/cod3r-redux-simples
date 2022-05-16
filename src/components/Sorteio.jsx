/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Intervalo.css"
import Card from "./Card";

export default props => {
  const {min, max} = props
  const aleatorio = parseInt(Math.random() * (max - min)) + min
  return (
    <Card title="Sorteio de um Número" purple>
      <div>
        <span>
          <apan>Resultado: </apan>
          <strong>{aleatorio}</strong>
        </span>
      </div>
    </Card>
  )
}