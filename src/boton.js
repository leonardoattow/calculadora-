import React from "react";

function Boton (props) {

    const esOperador = valor =>{
        return isNaN(valor) && (valor != ".") && (valor != "=");
    };
    return (
        <div className={`botonOperador ${esOperador(props.children) ? "operador" : null }`}
            onClick={() =>  props.manejarClic (props.children)}
        >
        {props.children} 
    
    
        </div>
    );
}

export default Boton;
