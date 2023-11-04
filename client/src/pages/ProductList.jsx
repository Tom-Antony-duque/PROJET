import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import {mobile} from '../responsive';
import React, {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";



const Container = styled.div``;

const Title = styled.h1`
      margin: 20px;
`;
const FilterContainer = styled.div`
      display: flex;
      justify-content: space-between;
`;
const Filter = styled.div`
      margin: 20px;
      ${mobile({width: "0px 20px", display: "flex",flexDirection: "column"})}
`;
const FilterText = styled.span`
      font-size: 20px;
      font-weight: 600;
      margin-right: 20px;
      ${mobile({marginRight: "0px"})}
`;
const Select = styled.select`
      padding: 10px;
      margin-right: 20px;
      ${mobile({margin: "10px 0px"})}
`;
const Option = styled.option``;

const ProductList = ()=> {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters,setFilters] = useState({});
  const [sort,setSort] = useState("le plus récent");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
 
  return(
    <Container>
      <Navbar/>
      <Announcement/>
      <Title>TT</Title>
      <FilterContainer>
      <Filter>
        <FilterText>Filtrer les produits:</FilterText>
        <Select name="couleur" onChange={handleFilters}>
            <Option disabled>
            Couleur
            </Option>
            <Option>blanc</Option>
            <Option>noir</Option>
            <Option>rouge</Option>
            <Option>bleu</Option>
            <Option>jaune</Option>
            <Option>vert</Option>
        </Select>
        <Select name="Taile" onChange={handleFilters}>
            <Option>
                Taille
            </Option>
            <Option>Xs</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
        </Select>
        </Filter>
      <Filter>
        <FilterText>Trier les produits:</FilterText>
        <Select onChange={e=>setSort(e.target.value)}>
            <Option value="le plus récent">Le plus récent</Option>
            <Option value="asc">Prix(asc)</Option>
            <Option value="desc">Prix(desc)</Option>
        </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort}/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList;
