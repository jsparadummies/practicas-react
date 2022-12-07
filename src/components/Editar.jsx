import { useState } from "react"





export default function ({ property, propiedad, cargarcambios}) {

const [Editar, setEditar] = useState([])

const stateEdicion = (e) => {
    setEditar(e.target.value)
}

const DetenerEnvioEditar = (e) => {
    e.preventDefault()
  cargarcambios(Editar,property)
propiedad(() => true)

}



    return(
        <>

<form onSubmit={DetenerEnvioEditar}>


<input onChange={stateEdicion}


> 
</input>

<input value="Editar" type="submit" className="buttonCreate" />


</form>
        </>
    )
}