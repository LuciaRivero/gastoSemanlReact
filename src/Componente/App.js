import React, { Component } from 'react';
import '../Css/App.css';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
import {validarPresupuesto} from '../Helper';
import ControlPresupuesto from './ControlPresupuesto';
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

    componentDidMount(){
      this.obtenerPresupuesto();
    }

    obtenerPresupuesto = () =>{
      let presupuesto = prompt ('Cual es el presupuesto');

      let resultado = validarPresupuesto(presupuesto);

      if(resultado){
        this.setState({
          presupuesto: presupuesto,
          restante: presupuesto
        })
      } else {
        this.obtenerPresupuesto();
      }

      console.log(presupuesto);
    }




  agregarGasto = gasto => {
    //tomar una copia del state actual
    const gastos = {...this.state.gastos};
 
    //agregar gasto al objeto del state
      gastos[`gastos${Date.now()}`] = gasto;
    
      this.restarPresupuesto(gasto.cantidadGasto);
    //ponerlo en state
    this.setState({
      gastos
    })
  }

restarPresupuesto = cantidad => {
  let restar = Number(cantidad);

  let restante = this.state.restante;

  restante-= restar;

  this.setState({
    restante
  })
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
                <Listado
                  gastos={this.state.gastos}
                />
                <ControlPresupuesto
                  presupuesto = {this.state.presupuesto}
                  restante = {this.state.restante}
                />
              </div>   
            </div>            
          </div>
      </div>
    );
  }
}

export default App;
