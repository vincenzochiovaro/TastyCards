import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import RandomRecipe from "./components/RandomRecipe";
import CardsByCategory from "./components/CardsByCategory";
import Login from "./components/Login";
import CategoriesNav from "./components/CategoriesNav";

function App() {
  return (
    <div className="App">
      <Header />
      <CategoriesNav />
      <Routes>
        <Route path="/" element={<RandomRecipe />} />
        <Route path="/recipes/:category" element={<CardsByCategory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<p>404 not found</p>} />
      </Routes>
    </div>
  );
}

export default App;
