import './App.css';
import List from "../List";
import { useCallback, useMemo, useState } from "react";
import Search from "../Search/Search";

const data = ['html', 'css', 'javascript', 'typescript', 'React']

function App() {
  const [search, setSearch] = useState()

  const filterItem = useMemo(() => {
    return data.filter(item => item.startsWith(search))
  }, [search])

  const onChange = useCallback((event) => {
    setSearch(event.target.value)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Search
          value={search}
          onChange={onChange}>
          Find:
        </Search>
        <List items={filterItem}/>
      </header>
    </div>
  );
}

export default App;
