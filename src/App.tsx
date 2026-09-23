import "./App.css";
import { Catalog } from "./components/catalog/Catalog.tsx";
import { Header } from "./components/header/Header";
import { headerData } from "./components/header/Header.data.ts";

function App() {
  return (
  <>
  <Header logo={headerData.logo} />
  <Catalog />
  </>
  )
}

export default App;
