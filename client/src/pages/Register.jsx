import styled from "styled-components";
import {mobile} from "../responsive";


const Container = styled.div`
    width: 100vw;
    height: 90vh;
    background: linear-gradient(
        rgba(255,255,255,0.5), 
        rgba(255,255,255,0.5)
        ),
         url ("https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F268533%2Fpexels-photo-268533.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-pixabay-268533.jpg%26fm%3Djpg&tbnid=nwiTKnJXTwcwcM&vet=12ahUKEwjgy5WGmoOCAxXMyAIHHU8SAQ0QMygDegQIARBQ..i&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2F&docid=B51x0PBR9KNzvM&w=1920&h=1278&q=images&ved=2ahUKEwjgy5WGmoOCAxXMyAIHHU8SAQ0QMygDegQIARBQ");
        center;
        
        display: flex;
        align-items: center;
        justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: #eee;
    ${mobile({width: "75%"})}

`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flew-wrap: wrap;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 40%;
    border; none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;


const Register = ()=> {
  return(
    <Container>
      <Wrapper>
        <Title>CRÉER UN COMPTE</Title>
        <Form>
            <Input placeholder="prénom"/>
            <Input placeholder="nom"/>
            <Input placeholder="nom d'utilisateur"/>
            <Input placeholder="email"/>
            <Input placeholder="mot de passe"/>
            <Input placeholder="Confirmez le mot de passe"/>
            <Agreement>
            en créant un compte, j'accepte le traitement de mes données personnelles conformément à la <b>POLITIQUE DE CONFIDENTIALITÉ</b>
            </Agreement>
            <Button>CRÉER</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register;
