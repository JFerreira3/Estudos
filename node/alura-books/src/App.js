import './App.css';
import Logo from './componentes/Logo';
import OpcoesHeader from './componentes/OpcoesHeader';
import Icones from './componentes/Icones';


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <OpcoesHeader></OpcoesHeader>
        <Icones></Icones>

      </header>
    </div>
  );
}

export default App;
