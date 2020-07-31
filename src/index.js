import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import cadastroVideo from './components/Pages/Cadastro/Video';
import cadastroCategoria from './components/Pages/Cadastro/Categoria';

function pagina404(){
  return(
    <div>
      error 404
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={cadastroVideo} />
      <Route path="/cadastro/categoria" component={cadastroCategoria} />
      <Route component={pagina404}/>
    </Switch>

  </BrowserRouter>,
  document.getElementById('root')
);
