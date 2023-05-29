import Header from "./components/Header";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import RandomRecipe from "./components/RandomRecipe";
import CardsByCategory from "./components/CardsByCategory";
import CardDetails from "./components/CardDetails";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<RandomRecipe />} />
        <Route path="/recipes/:category" element={<CardsByCategory />} />
        <Route path="/recipe/:recipeName" element={<CardDetails />} />\
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<p>404 not found</p>} />
      </Routes>
    </div>
  );
}

export default App;
