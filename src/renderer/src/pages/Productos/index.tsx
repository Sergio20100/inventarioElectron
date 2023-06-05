import { NEW_PRODUCT } from "@renderer/Routes/routerConst"
import { Link } from "react-router-dom"

const Productos = () => {
  return (
    <div className="productos"
      style={{display:'flex',justifyContent:'space-around'}}
    >
      
      <div>Listado de productos</div>
      <div>
        <Link to={NEW_PRODUCT}> REGISTRAR</Link>
      </div>

    </div>
  )
}

export default Productos