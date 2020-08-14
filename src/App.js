import React, { Fragment, useState,useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';

function App() {

  //state del formularoo
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado] = useState({});


   //extraer ciidudad y pais
   const {ciudad, pais} = busqueda;

   useEffect(() => {
      const consultarAPI = async() =>{
        if(consultar){
          const appId = '561bf53c80c4a30f8dec6c57327f2f72';
          const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
         guardarResultado(resultado);
        }
      }
      consultarAPI();
   }, [consultar]);

  return (
    <Fragment>
      <Header
        titulo='Clima React App'
      ></Header>
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className=" col m6 s12">
              <Formulario
                busqueda = {busqueda}
                guardarBusqueda = {guardarBusqueda}
                guardarConsultar = {guardarConsultar}
              ></Formulario>
            </div>
            <div className=" col m6 s12">
              <Clima
                resultado = {resultado}
              ></Clima>
            </div>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default App;
