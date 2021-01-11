import './App.css';
import ProductListContainer from "../containers/ProductListContainer";
import ProductDetailContainer from "../containers/ProductDetailContainer";

function App() {
  return (
    <div className="App">
      <ProductDetailContainer />
      <hr />
      <ProductListContainer />
    </div>
  );
}

export default App;
