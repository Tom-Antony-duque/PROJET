import {Badge} from '@material-ui/core';
import {Search, ShoppingCartOutlined} from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import {mobile} from '../responsive';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {loginStart, loginSuccess, loginFailure} from '../redux/action';
import {userLogout} from '../redux/userRedux';
import {publicRequest} from '../requestMethods';

const Container = styled.div`
  height: 60px;
  ${mobile({height: "50px"})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({padding: "10px 0px"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 10px;
  cursor: pointer;
  ${mobile({ display: "none"})}
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  padding: 2px;
`;

const Input = styled.input`
  border: none;
  ${mobile({width: "50px"})}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({fontSize: "24px"})}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex: 2, justifyContent: "center"})}
`;

const MenuItem = styled.div`
  font-size: 12px;
  cursor: pointer;
  margin-left: 25px;
  font-weight: bold;
  ${mobile({fontSize: "12px", marginLeft: "10px"})}
  color: black;
`;

const Navbar = ()=>{
  const quantity = useSelector((state)=> state.cart.quantity);
  const isLoggedIn = useSelector((state)=> state.user.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogin = async(user)=>{
    dispatch(loginStart());
    try{
      if(isLoggedIn){
        // L'utilisateur est déjà connecté, déconnectez-le
        dispatch(userLogout());
      }else{
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
      }
    }catch(err){
      dispatch(loginFailure());
    }
  };
  const handleAdminLogout = async()=>{
    try{
      // Envoyez une requête au serveur pour déconnecter l'administrateur
       await publicRequest.post("/auth/admin/logout");
      dispatch(userLogout());
    }catch(err){
      console.error("Erreur lors de la déconnexion de l'administrateur", err);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Recherche" />
            <Search style={{color: "gray", fontSize: 16 }}/>
          </SearchContainer>
          <Link to="/">
            <MenuItem>ACCEUIL</MenuItem>
          </Link>
          <Link to="/apropos">
            <MenuItem>A PROPOS</MenuItem>
          </Link>
        </Left>
        <Center>
          <Logo>TTouTT</Logo>
        </Center>
        <Right>
          {isLoggedIn ? (
            <Link to="/admin/logout">
            <MenuItem onClick={handleAdminLogout}>SE DECONNECTER</MenuItem>
          </Link>
          ) : (
            <>
              <Link to="/register">
                <MenuItem>S'INSCRIRE</MenuItem>
              </Link>
              <Link to="/login">
                <MenuItem onClick={handleLogin}>SE CONNECTER</MenuItem>
              </Link>
            </>
          )}
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
