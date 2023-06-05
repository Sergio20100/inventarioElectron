import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./RouterLayout";
import { BILLING, HOME, INVENTORY, NEW_PRODUCT, PRODUCT, PROVIDERS } from "./routerConst";
import Home from "@renderer/pages/Home";
import Inventario from "@renderer/pages/Inventario";
import Proveedores from "@renderer/pages/Proveedores";
import Productos from "@renderer/pages/Productos";
import Facturacion from "@renderer/pages/Facturacion";
import FormProductos from "@renderer/pages/Productos/FormProductos";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path={HOME} element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path={INVENTORY} element={<Inventario/>}/>
          <Route path={PROVIDERS} element={<Proveedores/>}/>
          <Route path={PRODUCT} element={<Productos/>}/>
          <Route path={NEW_PRODUCT} element={<FormProductos/>}/>
          <Route path={PROVIDERS} element={<Proveedores/>}/>
          <Route path={BILLING} element={<Facturacion/>}/>
          <Route /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

