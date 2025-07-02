import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid blue;
  max-width: 992px;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
   gap: 20px;
`;

const Card = styled.div`
  border: 1px solid brown;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Cardbody = styled.div`
  padding: 0.7rem;
`;

const Title = styled.h4`
  font-size: 19px;
`;

const Category = styled.p`
  font-size: 15px;
  line-height: 150%;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.4;
`;

const Button = styled.button`
  margin-top: auto;
  padding: 0.5rem 1rem;
`;

function Cards() {
  return (
    <Container>
      <Card>
        <Cardbody>
          <Title>Tênis Confort</Title>
          <Category>Calçado</Category>
          <Description>
            Tênis para quem gosta de calçar o que tem de melhor, para exigentes
            e que busca conforto. qualidade bem-estar e ammis paara qualquer hora do dia.
          </Description>
        </Cardbody>
        <Button>Comprar</Button>
      </Card>

      <Card>
        <Cardbody>
          <Title>Tênis Urban Style</Title>
          <Category>Calçado</Category>
          <Description>
            Conforto extremo com design moderno. Ideal para o dia a dia com muito estilo.
          </Description>
        </Cardbody>
        <Button>Comprar</Button>
      </Card>

      <Card>
        <Cardbody>
          <Title>Camiseta Premium</Title>
          <Category>Camisa</Category>
          <Description>
            Camiseta para quem não abre mão de estilo e leveza. Conforto e sofisticação em cada detalhe.
          </Description>
        </Cardbody>
        <Button>Comprar</Button>
      </Card>
    </Container>
  );
}

export default Cards;
