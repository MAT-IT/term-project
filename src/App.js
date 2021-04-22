
import './App.css';
import Amblem from './head/amblem';
import Language from './head/Language';
import Login from './head/Login';
import Searchform from './head/Searchform';
import Singin from './head/Singin';

function App() {
  return (
    <div className="App">
       <header className="App-header">
          <Amblem />
          <Searchform/>
          <Singin/>
          <Login/>
          <Language/>
       </header> 
    </div>
  );
}

export default App;
