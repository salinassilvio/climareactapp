import React, {Fragment} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {
  return (
    <Fragment>
      <Header
        titulo = 'Clima React App'
      ></Header>
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
              <div className=" col m6 s12">
                  <Formulario></Formulario>
              </div>
              <div className=" col m6 s12">

</div>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default App;
