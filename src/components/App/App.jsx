import './App.css';
import List from "../List";
import { useState } from "react";
import Search from "../Search/Search";

const data = ['html', 'css', 'js', 'typescript', 'redux']

function App() {
  const [search, setSearch] = useState()

  return (
    <div className="App">
      <header className="App-header">
        <Search value={search}
        onChange={(event) => setSearch(event.target.value)}>
          Find course:
        </Search>
        <List items={data}/>
      </header>
    </div>
  );
}

export default App;
