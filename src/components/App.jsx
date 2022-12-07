import { useState } from "react";
import Formulario from "./Formulario";
import '../style/App.css';
 

const App = () => {
const [state1,setstate1] = useState("");
const [state2,setstate2] = useState([]);

function CargarTitulo (e) {
    setstate1(e.target.value);
  
}

const DetenerEnvio = (e) => {
    e.preventDefault();
  
if (state1.length <= 0){
    alert('debes escribir algo')
    return
}
let Valores = [state1];

setstate2([...state2,Valores])

setstate1("");
}

const CargarCambios = (valor, id  ) => {
    if (valor.length <= 0){
        alert('debes escribir algo')
        return
    }
 let copia = [...state2]
 copia[id] = valor
 setstate2([...copia])
 }

const Delete = (id) => {
let copia = [...state2]
let newvalue = copia.filter((item,index) => index != id)
setstate2([...newvalue])
}




      
    return(
<>
<div className="ContainerApp">

<form onSubmit={DetenerEnvio}>


<input onChange={CargarTitulo}
value={state1}
> 
</input>

<input value="Create todo" type="submit" className="buttonCreate" />


</form>

{
    
    
    state2.map((item,index2) => {
        return <Formulario Delete={Delete} props={item} propsEditar={CargarCambios} index2={index2}></Formulario>
        
    }
    )
    
}
    </div>
   

</>









    )
}



export default App;