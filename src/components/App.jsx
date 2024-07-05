import { Route, Routes } from "react-router-dom"
import HomePages from "../pages/HomePages/HomePages"
import NavBar from "./NavBar/NavBar"
import CatalogPages from "../pages/CatalogPages/CatalogPages"
import FavoritePages from "../pages/FavoritePages/FavoritePages"


function App() {
  return (
    <>
    <NavBar />
     <Routes>
      <Route path="/" element={<HomePages />} />
      <Route path="/catalog" element={<CatalogPages />} />
      <Route path="/favorites" element={<FavoritePages />} />
     </Routes>
    </>
  )
}

export default App
