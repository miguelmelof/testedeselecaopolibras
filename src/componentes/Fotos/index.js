import './Fotos.css'
   
function Fotos(props) {
    const ImagemModificada = `img/${props.id}.jpg`
    return(
        <div className='img'>
            <img src={ImagemModificada} alt="imagemdoproduto"/> 
        </div>
    )
}

document.createElement('img')


export default Fotos