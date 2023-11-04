import {Facebook, Instagram, MailOutline, Phone, Room, Twitter} from "@material-ui/icons";
import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
   margin: 20px 0px;
`;

const SocialContainer = styled.div`
   display: flex;
`;

const SocialIcon = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   color: white;
   background-color: #${props=>props.color};
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 20px;
`;


const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;
 
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#fff8f8"})}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;


const Payment = styled.img`
   width: 50%;
`;


const Footer = ()=> {
  return (
    <Container>
      <Left>
        <Logo>TTouTT</Logo>
        <Desc>Suivez-nous...</Desc>
        <SocialContainer>
          <SocialIcon color="385999">
            <Facebook/>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram/>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter/>
          </SocialIcon>
          <SocialIcon color="E60023">
            <Twitter/>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
      <Title>Liens utiles</Title>
      <List>
        <ListItem>Acceuil</ListItem>
        <ListItem>Panier</ListItem>
        <ListItem>Style Homme</ListItem>
        <ListItem>Style Femme</ListItem>
        <ListItem>Mon compte</ListItem>
        <ListItem>Suivi de commande</ListItem>
        <ListItem>Liste de souhaits</ListItem>
        <ListItem>Wishlist</ListItem>
        <ListItem>Termes</ListItem>
      </List>
      </Center>
      <Right>

      <Title>Contact</Title>
      <ContactItem>
        <Room style={{marginRight:"10px"}}/>Queenparks62 , dns 9292
      </ContactItem>
      <ContactItem>
       <Phone style={{marginRight:"10px"}}/> +1 256 87 92 6
      </ContactItem>
      <ContactItem>
        <MailOutline style={{marginRight:"10px"}}/>contact@TTOUTT.dev
      </ContactItem>
      <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  )
}

export default Footer
