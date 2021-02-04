import './App.css';
import Row from "./components/Row"
import requests from "./requests"

function App() {
  return (
    <div className="App">
      <h1>My Netflix Clone</h1>
      <hr/>

      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
    </div>
  );
}

export default App;
