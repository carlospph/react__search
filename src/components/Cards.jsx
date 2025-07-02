import styled from 'styled-components';
// Não precisamos mais do import de 'react-icons' aqui!

const Container = styled.div`
  margin: 1rem auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1140px;

  @media (max-width: 768px) {
    max-width: 540px;
    grid-template-columns: 1fr;
  }

  @media (max-width: 480px) {
    max-width: 300px;
    margin: 1rem auto;
    padding: 0 10px;
  }
`;

const Card = styled.div`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Cardbody = styled.div`
  padding: 0.7rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 0.5rem;
`;

const Title = styled.h4`
  font-size: 19px;
  margin: 0;
`;

// Estilização para o ícone (opcional, mas útil para controlar o tamanho e cor via styled-components)
const Icon = styled.i`
  font-size: 24px; /* Ajuste o tamanho do ícone */
  color: #005390; /* Ajuste a cor do ícone */
`;


const Category = styled.p`
  font-size: 15px;
  line-height: 150%;
  color: #555;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.4;
  color: #333;
  margin-top: 0.5rem;
  flex-grow: 1;
`;

const Button = styled.button`
  margin-top: auto;
  padding: 0.8rem 1rem;
  border: 0;
  background: #005390;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #003a64;
  }
`;

function Cards() {
  return (
    <Container>
      <Card>
        <Cardbody>
          <TitleWrapper>
            {/* Ícone Font Awesome: `fa-solid` para sólido, `fa-laptop-code` para o ícone específico */}
            <Icon className="fa-solid fa-laptop-code"></Icon>
            <Title>Desenvolvimento Web Fullstack</Title>
          </TitleWrapper>
          <Category>Programação & Design</Category>
          <Description>
            Aprenda a construir aplicações web completas, do front-end com React ao back-end com Node.js ou PHP.
            Domine bancos de dados, APIs RESTful e as melhores práticas de desenvolvimento moderno para criar
            soluções robustas e escaláveis.
          </Description>
        </Cardbody>
        <Button>Ver Cursos</Button>
      </Card>

      <Card>
        <Cardbody>
          <TitleWrapper>
            {/* Ícone Font Awesome: `fa-solid fa-mobile-alt` */}
            <Icon className="fa-solid fa-mobile-alt"></Icon>
            <Title>Desenvolvimento Mobile Nativo</Title>
          </TitleWrapper>
          <Category>Aplicativos & Experiência do Usuário</Category>
          <Description>
            Crie aplicativos nativos de alta performance para iOS e Android usando Swift, Kotlin ou React Native.
            Explore o design de interface, otimização e publicação em lojas de aplicativos para alcançar milhões de usuários.
          </Description>
        </Cardbody>
        <Button>Explorar</Button>
      </Card>

      <Card>
        <Cardbody>
          <TitleWrapper>
            {/* Ícone Font Awesome: `fa-solid fa-cloud` */}
            <Icon className="fa-solid fa-cloud"></Icon>
            <Title>Computação em Nuvem e DevOps</Title>
          </TitleWrapper>
          <Category>Infraestrutura & Automação</Category>
          <Description>
            Conheça os fundamentos da computação em nuvem com AWS, Azure ou Google Cloud.
            Aprenda sobre Docker, Kubernetes, CI/CD e automação para implantar e gerenciar
            aplicações de forma eficiente e escalável em ambientes de produção.
          </Description>
        </Cardbody>
        <Button>Saiba Mais</Button>
      </Card>
    </Container>
  );
}

export default Cards;