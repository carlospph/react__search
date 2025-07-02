import Banner from './Banner';
 import FormCadastro from './FormCadastro';
import Search from './Search';

function ScreenSearch() { 
  return (
    <div className="container">
      <Banner />
      <Search />
      <FormCadastro/>
    </div>
  );
}

export default ScreenSearch;
