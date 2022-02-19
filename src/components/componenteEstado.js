import React from 'react'


const componenteEstado =()=>{

    const [contador, setContador ]=useState (0)
const sumarHandler = () => { 
        setContador(3)

 }
    return (
<>
        <div>componenteEstado</div>
        Total: {contador}
        <br></br>
        <button oncClick={sumarHandler}> + </button>
        </>
    )
}

export default componenteEstado