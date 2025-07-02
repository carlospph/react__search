import styled from 'styled-components';

const Title = styled.h2`
  padding-top:1.5rem;
`;

const BarSearch = styled.div`
  display:flex;
  align-items:center;
  border:1px solid #ccc;
  max-height:42px;
  overflow: hidden;
  border-radius: 6px;
  max-width:600px;
  margin:2rem auto 2em;
  

  & input{
    background:#f2f2f2;
    height:40px;
    width:100%;
    border:0;
    padding: 0.5rem;
    border-radius:5px 0px 0 5px;
  }
`;

const Button = styled.button`
  border:0;
  border-left:1px solid #ccc;
  cursor:pointer;
  height:40px;
  width:40px; 

  & i{
    font-size:25px;
  }
`;

function Search() {
  return (
       <BarSearch>
        <input
          type="text"
          name="input__search"
          placeholder="Pesquisar produtos"
        />
        <Button>
          <i className="fas fa-search" />
        </Button>
      </BarSearch>
   );
}

export default Search;
