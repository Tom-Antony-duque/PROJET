import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import {Add, Remove} from '@material-ui/icons';
import {useSelector} from "react-redux";
import {mobile} from '../responsive';
import StripeCheckout from "react-stripe-checkout";
import {useEffect, useState} from "react";
import {userRequest} from "../requestMethods";
import {useNavigate} from "react-router-dom";



const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div`
      
`;
const Wrapper = styled.h1`
      padding: 20px;
      ${mobile({width: "10px"})}
`;
const Title = styled.div`
    font-weight: 300;
    text-align: center;
`;
const Top = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
`;
const TopButton = styled.button`
      padding: 10px;
      font-weight: 600;
      cursor: pointer;
      border: ${props=>props.ype === "filled" && "none"};
      background-color: ${props=>props.type === "filled"?"gray":"transparent"};
      color: ${props=>props.ype === "filled" && "white"};
`;

const TopTexts = styled.div`
    ${mobile({display: "none"})}
`;
const TopText = styled.span`
      text-decoration: underline;
      cursor: pointer;
      margin: 0px 10px;
`;

const Bottom = styled.div`
      display: flex;
      justify-content: space-between;
      ${mobile({flexDirection: "column"})}
`;
const Info = styled.div`
      flex: 3;
`;

const Product = styled.div`
      display: flex;
      justify-content: space-between;
      ${mobile({flexDirection: "column"})}
`;
const ProductDetail = styled.div`
      flex: 2;
      display: flex;
`;
const Image = styled.img`
      width: 200px;
`;
const Details = styled.div`
      padding: 20px; 
      display: flex;
      flex-direction: column;
      justify-content: space-around;
`;
const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: ${props=>props.color};
`;
const ProductSize = styled.span`
      
`;
const PriceDetail = styled.div`
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
`;

const ProductAmountContainer = styled.div`
      display: flex;
      align-items: center;
      margin-bottom: 20px;
`;
    
const ProductAmount = styled.div`
      font-size: 20px;
      margin: 5px;
      ${mobile({margin: "5px 15px"})}
`;

const ProductPrice = styled.div`
      font-size: 30px;
      font-weight: 200;
      ${mobile({marginBottom: "20px"})}
`;

const Hr = styled.hr`
      background-color: #eee;
      border: none;
      height: 1px;
`;

const SummaryTitle = styled.h1`
      font-weight: 200;
`;

const SummaryItem = styled.div`
     margin: 30px 0px;
     display: flex;
     justify-content: space-between;
     font-weight: ${(props)=>props.type === "total" && "500"};
     font-size: ${(props)=>props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
     width: 100%;
     padding : 10px;
     background-color: black;
     color: white;
     font-weight: 600;
`;

const Summary = styled.div`
      flex: 1;
      border: 0.5px solid lightgray;
      borer-radius: 10px;
      padding: 20px;
      height: auto;
`;

const Cart = ()=> {
      const cart = useSelector((state)=> state.cart);
      const [stripeToken, setStripeToken] = useState(null);
      const navigate = useNavigate();
    
      let token;
      let res;

      const onToken = (token)=> {
        setStripeToken(token);
      };
    
      useEffect(()=>{
        const makeRequest = async()=>{
          try{
            const res = await userRequest.post("/checkout/payment",{
              tokenId: stripeToken.id,
              amount: 500,
            });
            navigate("/success",{
              state:{
                stripeData: res.data,
                products: cart,
              },
            });
          }catch(error){
            console.error(error);
          }
        };
        token && makeRequest();
      },[stripeToken, token, cart, navigate]);

  return(
    <Container>
      <Navbar/>
    <Announcement/>
     <Wrapper>
        <Title>TON PANIER</Title>
        <Top>
            <TopButton type="filled">CONTINUER VOS ACHATS</TopButton>
            <TopTexts>
                <TopText>Sac de courses(2)</TopText>
                <TopText>Votre liste de souhaits(0)</TopText>
            </TopTexts>
            <TopButton type="filled">PASSER À LA CAISSE</TopButton>
        </Top>
        <Bottom>
         <Info>
         {cart.products.map((product)=>(
              <Product>
                <ProductDetail>
                  <Image src={product.img}/>
                  <Details>
                    <ProductName>
                      <b>Produits:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color}/>
                    <ProductSize>
                      <b>Taille:</b>{product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add/>
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove/>
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr/>
          </Info>
          <Summary>
            <SummaryTitle>RÉCAP...</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Frais de livraison estimés</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Remise sur les frais d'expédition</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="TTouTT"
              image="https://img.freepik.com/vecteurs-libre/modele-logo-lettre-t-design-plat_23-2149355279.jpg?size=338&ext=jpg&ga=GA1.1.386372595.1698278400&semt=ais"
              billingAddress
              shippingAddress
              description={`Votre total est $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
              onToken={()=>{
                onToken(token);
                navigate("/success",{
                  state: {
                    stripeData: res.data,
                    products: cart,
                  },
                });
              }}
            >
              <Button>PASSER À LA CAISSE</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
