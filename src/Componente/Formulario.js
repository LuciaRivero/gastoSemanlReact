import React, {Component} from 'react';


class FormularioGastos extends Component {
    //refs para los campos del formulario
    cantidadGasto = React.createRef();
    nombreGasto = React.createRef();


    crearGasto = (e) => {
        //prevenir el default
        e.preventDefault();
        //crear el objeto
        const gasto = {
            nombreGasto: this.nombreGasto.current.value,
            cantidadGasto: this.cantidadGasto.current.value
        }
        //console.log(gasto);
        //agregarlo y enviarlo por props
        //LOS PROPS SOLO SE PUEDEN PASAR DE PADRE A HIJO, PERO LOS DATOS PUEDEN DIRECCIONARSE ENTRE AMBOS
        this.props.agregarGasto(gasto);

    }

    render() {
        return(
            <form onSubmit={this.crearGasto}>
                <h2>Agrega tus gastos aqui</h2>
                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input 
                    ref={this.nombreGasto}
                    className="u-full-width" type="text" placeholder="Ej. Transporte" />
                </div>

                <div className="campo">
                    <label>Cantidad</label>
                    <input
                    ref={this.cantidadGasto}
                    className="u-full-width" type="text" placeholder="Ej. 300" />
                </div>

                <input className="button-primary u-full-width" type="submit" value="Agregar" />
            </form>
        )
    }
}

export default FormularioGastos;