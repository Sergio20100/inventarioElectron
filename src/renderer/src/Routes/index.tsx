import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./RouterLayout";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

