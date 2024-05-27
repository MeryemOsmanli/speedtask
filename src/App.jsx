import { BrowserRouter, Routes, Route } from "react-router-dom";
import './scss/main.css'
import MainLayout from "./layout/MainLayout";
import Home from "./pages/User/Home";
import About from "./pages/User/About";
import AdminHome from "./pages/Admin/AdminHome";
import AddAdmin from "./pages/Admin/AddAdmin";
import AdminLayout from "./layout/AdminLayout";
import Detail from "./pages/User/Detail";
import MainProvider from "./context/MainProvider";
import Basket from "./pages/User/Basket";
import Wislist from "./pages/User/Wislist";
import WishProvider from "./context/WishProvider";

function App() {

  return (
    <>
    <WishProvider>
    <MainProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="basket" element={<Basket />} />
          <Route path="wishlist" element={<Wislist />} />


        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          <Route path="/admin/addadmin" element={<AddAdmin />} />
        </Route>
      </Routes>
    </BrowserRouter>
      </MainProvider>
    </WishProvider>
    </>
  )
}

export default App
