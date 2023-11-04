import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import Product from './Product';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({category = "", filters = {}, sort = ""})=>{
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=>{
    const source = axios.CancelToken.source();

    const getProducts = async()=>{
      try{
        const apiUrl = category
          ? `http://localhost:5000/api/products?category=${category}`
          : "http://localhost:5000/api/products";

        const res = await axios.get(apiUrl,{
          cancelToken: source.token,
        });

        setProducts(res.data);
      }catch(err){
        if (axios.isCancel(err)){
          // La requête a été annulée
        }else{
          console.error(err);
        }
      }
    };

    getProducts();

    return ()=>{
      source.cancel("Demande annulée par nettoyage");
    };
  }, [category]);

  useEffect(()=>{
    // Filtrer les produits en fonction des filtres ici
    const filtered = products.filter((item)=>
      Object.entries(filters).every(([key, value])=>
        item[key].includes(value)
      )
    );
    setFilteredProducts(filtered);
  }, [products, filters]);

  return(
    <Container>
      {category
        ? filteredProducts.map((item)=> <Product item={item} key={item.id}/>)
        : products.slice(0,8).map((item)=> <Product item={item} key={item.id}/>)}
    </Container>
  );
};

export default Products;
