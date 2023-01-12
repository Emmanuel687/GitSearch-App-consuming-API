//All imports
import {useState} from 'react';
//Components import
import Search from './components/search/Search';
import Info from './components/info/Info';

//Css imports
import './App.css';

function App() {

  let [user,useUser] = useState({});

  return (
    <section className="App">
      <Search userSet={useUser}></Search>
      <Info userdata={user} userSet={useUser}></Info>
    </section>
  );
}

export default App;
