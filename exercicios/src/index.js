import React from 'react'
import ReactDOM from 'react-dom'

// import BomDia from './componentes/BomDia'
// import { BoaNoite, BoaTarde } from './componentes/Multiplos'
// import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
  <div>
    <Pai nome="Nathan" sobrenome="Oliveira">
      <Filho nome="Filho1" />
      <Filho nome="Filho2" />
      <Filho nome="Filho3" />
    </Pai>
  </div>
  , document.getElementById('root')
)