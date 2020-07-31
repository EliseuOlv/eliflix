import React from 'react';
import PageDefault from '../../../PageDefault';
import { Link } from 'react-router-dom';

function cadastroCategoria(){
    return(
        <PageDefault> 
            <h1>Cadastro de categoria</h1>

            <Link to="/">
                Ir para a home alguma coisa do tipo
            </Link>
        </PageDefault>
    )
  }
 
export default cadastroCategoria;