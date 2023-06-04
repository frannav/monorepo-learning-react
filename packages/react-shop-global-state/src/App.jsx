import { products } from './mocks/products.json';
import { Products } from './components/Products/Products';

function App() {
  return (
    <Products products={products}/>
  )
}

export default App;
