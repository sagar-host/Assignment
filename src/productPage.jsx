 // eslint-disable-next-line
// import { mobile } from "../responsive";
import styled from "styled-components";

import { useParams } from "react-router-dom"

import { useEffect, useState } from "react";
import axios from 'axios'



const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;

`;

const ImgContainer = styled.div`
  flex: 2;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  `;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;

`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;




const Product = () => {


  const [item, setItem] = useState({});
  const {id} = useParams();
  console.log(id);


   useEffect(() => {

    const getProduct = async () => {
      try {

        const res = await axios.get("https://ghibliapi.herokuapp.com/films/" + `${id}`);
        setItem(res.data);
      } catch {}
    };
    getProduct();
    console.log(getProduct);
  }, [id]);

console.log(item.title);

  return (
    <Container>

      
      <Wrapper>
        <ImgContainer>
          <Image src={item.image} />
        </ImgContainer>

        <InfoContainer>
          <Title>{item.title}</Title>
          <Desc>{item.description}</Desc>
          <Price> {item.director}</Price>
       
         
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;
