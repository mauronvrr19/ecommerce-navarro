import { Link } from "react-router-dom"

const Home =()=> {
    return (
        <div>
            <h1>MUNDO COMPUTADORAS</h1>
            <h2>Pagina dedicada al mundo gamer. Especializada en la venta de hardware.</h2>
            <p> Importante
Elegí el procesador y el sistema te irá dando las opciones compatibles con la configuración que vas seleccionando. Una vez que tu compu este lista, la agregás al carrito, seleccionás método de envío y pago, y Listo!</p>
<div className="padre_rayzer">
<img src="/descarga.jfif" className="rayzer"></img>  
</div>     
<div> vea nuestros combos de pc armadas!     <Link to={`/productos`}><button variant="primary">productos</button></Link></div>

       </div>
    )
}

export default Home