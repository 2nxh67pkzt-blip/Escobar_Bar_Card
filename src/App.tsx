import "./App.css";
import { Catalog } from "./components/catalog/Catalog.tsx";
import { Footer } from "./components/footer/Footer.tsx";
import { Header } from "./components/header/Header";
import { headerData } from "./components/header/Header.data.ts";

function App() {
  return (
  <>
  <Header logo={headerData.logo} />
  <Catalog />
  <Footer />
  </>
  )
}

export default App;
