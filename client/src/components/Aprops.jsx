import styled from "styled-components";

const Container = styled.div`
    height: 100%;
    padding: 100px;
    background-color: #e0e0e0;
    font-size: 23px;
    font-weight: 500;
    align-items: center;
`;

const H3 = styled.div`
    font-family: italic;
    font-size: 30px;
    color: black;
    font-weight: 200;
`;

const P = styled.div`
    font-family: italic;
    color: black;
    font-size: 25px;
`;

const Aprops = ()=>{
  return (
    <Container>
      <H3>A propos de TTouTT:</H3>
      <br></br>
      <P>TTouTT, aussi appelée couramment page TT, est une plateforme de vente de vêtements.
        Votre espace est ce site dans lequel vous en apprenez plus sur vous, vos choix et votre design.
        L'auteur de ce site nommé Tom Antony Duqué, a eu l'idée de vous faciliter à TTouTT faire à partir de votre ordinateur portable (pc) ou cellulaire...
        ..TTouTT faire, c'est TTouTT avoir...
      </P>
      <br></br>
      <H3>TTouTT vous permet :</H3>
      <br></br>
      <ul>
        <li>
          D'obtenir les produits ou services que vous proposez,
        </li>
        <li>
          De précommander,
        </li>
        <li>
          D'acheter sans pour autant vous déplacer,
        </li>
        <li>
          De personnaliser votre produit si vous souhaitez le retoucher,
        </li>
        <li>
          De surTTouTT TTouTT commander ...
        </li>
      </ul>
    </Container>
  );
};

export default Aprops;
