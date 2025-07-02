import styled from 'styled-components';

const Container = styled.div`
  border:1px solid blue;
`;

const Card = styled.div`
  border:1px solid blue;
`;

const Card__body = styled.div`
  padding: .7rem;
`;

const Title = styled.h4`
  font-size:19px;
`;

const Category = styled.p`
  font-size:15px;
  line-height:150%;
`;

const Description = styled.p`
  
`;

const Cardbody = styled.div`

`;

const Button = styled.button`

`;

function Cards() {
  return (
    <Container>
      <Card>
        <Cardbody>
          <Title>Tênis</Title>
          <Category>Calçado</Category>
          <Description>
            Tênis para quem gosta de calçar o que tem de melhor, para exigentes
            e que busca conforto.
          </Description>
        </Cardbody>
        <Button>Comprar</Button>
      </Card>
    </Container>
  );
}

export default Cards;
