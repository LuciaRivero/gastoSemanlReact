import React, { Component } from 'react';
import '../Css/App.css';
import Header from './Header';
import Formulario from './Formulario';


class App extends Component {
  //agregar un nuevo gasto al state
    constructor(props) {
      super(props);
      this.state = {
        presupuesto: '',
        restante: '',
        gastos: {}
      }
    }
  agregarGasto = gasto => {
    //tomar una copia del state actual
    const gastos = {...this.state.gastos};
    console.log('se agrego gasto ' + gasto);
    console.log(gastos);
    //agregar gasto al objeto del state

    //ponerlo en state
  }
  render() {
    return (
      <div className="App container">
          <Header
             titulo='Gastos semanal'       
          />
          <div className="contenido-principal contenido">
            <div className="row">
              <div className="one-half column">
                <Formulario
                  agregarGasto = {this.agregarGasto}  
                />
              </div>
              <div className="one-half column">
                
              </div>   
            </div>            
          </div>
      </div>
    );
  }
}

export default App;
