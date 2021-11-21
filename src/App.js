import "./App.css";
import { Card } from "./components/Card";
import Products from "./products.json";
function App() {
  console.log(Products);
  return (
    <div className="App">
      <header className="App-header">
        <h2>Mi tienda</h2>
        <div className="products-container">
          {Products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
