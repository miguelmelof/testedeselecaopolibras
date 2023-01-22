
   
function Fotos(props) {
    const ImagemModificada = `img/${props.id}.jpg`
    return(
        <h1>
            <img src={ImagemModificada} alt="imagemdoproduto"/> 
        </h1>
    )
}

document.createElement('img')


export default Fotos