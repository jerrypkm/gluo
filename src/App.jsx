import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

const URL_API = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=03abbb74e4d7fa5b1d866ffcf2845fc9&hash=5aa12a5845d6c2d3ede8ab92947fe2ea"
const API_KEY = "&apikey=03abbb74e4d7fa5b1d866ffcf2845fc9"

function App() {

  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  console.log(data)
  
  useEffect(() => {
    fetch(
      URL_API
    )
      .then((res) => res.json())
      .then((json) => setData(json.data.results))
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <div className="App">
      <div className="background"></div>
      <div className="container">
        <Navbar  />
        {data.map((el, ind)=><Card key={ind} title={el.name} subTitle={el.description} img={el.thumbnail.path+"."+el.thumbnail.extension}/>)}
      </div>
    </div>
  );
}

export default App;
