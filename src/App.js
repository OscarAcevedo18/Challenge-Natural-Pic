import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppProvider from "./imgProvider";
import Favorites from "./views/Favorites";
import Navbar from "./components/Navbar";
import Home from "./views/Home";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<h1>:( Pagina no encontrada</h1>} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;