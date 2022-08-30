import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/quotes")
      .then((resp) => resp.json())
      .then((quotesFromServer) => setQuotes(quotesFromServer));
  }, []);

  return (
    <div className="App">
      <h1>Here are your best quotes</h1>
      <ul>
        {quotes.map((item) => (
          <li className="quote-list">
            <h2>{item.description}</h2>
            <h3>- {item.author}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
