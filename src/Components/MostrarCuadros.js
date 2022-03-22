import react,{useState} from 'react';
import './MostrarCuadros.css';

const MostrarCuadros = (props) => {
    
    return(
        <div className="divCuadritos">
            {
                props.colores.map((item,indice)=>{
                    console.log(item);
                    return(
                        <div className="cuadrito" key={"div_"+indice}
                            style={{backgroundColor:item.color,width:item.tamanio+'px',height:item.tamanio+'px'}}>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default MostrarCuadros;