import "./App.css";
import Navbar from "./components/Navbar";
import Top from "./components/Top";
import Order from "./components/Order";
import MenuFilter from "./components/MenuFilter";
import Categories from "./components/Categories";

function App() {
  return (
    <div>
      <Navbar />
      <Top />
      <Order />
      <MenuFilter />
      <Categories />
    </div>
  );
}

export default App;
