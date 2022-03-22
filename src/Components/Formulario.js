import react,{useState} from 'react';
import './Formulario.css';

const Formulario = (props) => {
    const [color,setColor] = useState("");
    const [tamanio,setTamanio] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(color.length < 3 || color.tamanio < 3) {
            alert("Ingresar valores validos");
        } else {
            props.agregarColor({
                color,tamanio
            });
            setColor("");
            setTamanio("");
        }
        
    }

    return (
        <div className='formulario'>
            <form onSubmit={handleSubmit}>
                <div>
                    <div className='agrupar'>
                        <label className='labelAgrupar'>Color</label>
                        <input className='inputAgrupar' placeholder='Ingrese el color' onChange={(e)=>setColor(e.target.value)} value={color}/>
                    </div>
                    <div className='agrupar'>
                        <label className='labelAgrupar'>Tamaño</label>
                        <input className='inputAgrupar' placeholder='Ingresa el tamaño' onChange={(e)=>setTamanio(e.target.value)} value={tamanio}></input>
                    </div>
                    <div className='divBotoncito'>
                        <button className='botoncito'>Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Formulario;