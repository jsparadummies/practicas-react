import { useState } from "react";
import Editar from "./Editar";


const Formulario = ({props, propsEditar, index2,Delete}) => {
    const [first, setfirst] = useState(true);

   

return(
    <>
    <div>
{
  first? 
<div className="containerFormulario">
    <h1>{props}</h1> 
    <div className="formularioBtn">
    <button onClick={() => setfirst(false)} className='btnEditar'>editar</button>   <button className="btnDelete" onClick={e => Delete(index2)}>borrar</button>
    
    </div>
    
</div>
  :
  <Editar  property={index2} propiedad={setfirst} cargarcambios={propsEditar}></Editar>
 }

    </div>
    
    
    </>
)




        
}


export default Formulario;