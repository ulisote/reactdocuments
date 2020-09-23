import React from "react";
import ReactDOM from "react-dom";

import Toggle from './temas/manejando.eventos';
import Greeting from './temas/renderizado.condicional';

function Todo(props){
return(
  <div>
      <Greeting isLoggedIn={false} /> 
  </div>
)
}

ReactDOM.render(<Todo />, document.getElementById("root"));
