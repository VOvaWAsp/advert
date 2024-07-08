import { Route, Routes } from "react-router-dom"
import HomePages from "../pages/HomePages/HomePages"
import NavBar from "./NavBar/NavBar"
import CatalogPages from "../pages/CatalogPages/CatalogPages"
import FavoritePages from "../pages/FavoritePages/FavoritePages"
import { useDispatch, useSelector } from "react-redux"
import { fetchCatalog } from "../redux/Catalog/operations"
import { useEffect } from "react"


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCatalog());
}, [dispatch]);

  return (
    <>
    <NavBar />
     <Routes>
      <Route path="/" element={<HomePages />} />
      <Route path="/catalog" element={<CatalogPages />} />
      <Route path="/favorites" element={<FavoritePages />} />
      <Route path="*" element={<HomePages />} />
     </Routes>
    </>
  )
}

export default App
