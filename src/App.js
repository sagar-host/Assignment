import './App.css';
// import Home from "./home";
import Product from './productPage'
import Products from './products';
import { BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {


  return (
    <div className="App">
    

            <BrowserRouter>
              <Routes>
              <Route path="/" element={ <Products />} />
              <Route path="/:id" element={<Product/>} />
               

            
              </Routes>
            </BrowserRouter>

   
    </div>
  );
}

export default App;
