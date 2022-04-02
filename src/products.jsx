import { useEffect, useState } from "react";
import styled from "styled-components";
// import { popularProducts } from "../data";
import Product from "./product";
import axios from "axios";

const Container = styled.div`
  padding: 70px;
  /* margin-top: 10vmax; */
  overflow: hidden;


  display: flex;
  flex-wrap: wrap;
  /* justify-items: center; */
  justify-content: space-between;
`;

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          
             "https://ghibliapi.herokuapp.com/films"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, []);




  return (
   
    <Container id="productsId">
      { products
            .slice(0, 15)
            .map((item,index) => <Product item={item} key={index} />)}
    </Container>
   
    
  );
};

export default Products;
