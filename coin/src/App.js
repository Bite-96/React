import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [cost, setCost] =useState();
  const [need, setNeed] =useState();

  const onChange = (event) => {
    setCost(event.target.value);
  }
  const handleInput = (event) => {
    setNeed(event.target.value);
  } 

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json)
        setLoading(false)
      });
  }, [])

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onChange}>
          <option>Select Coin!!!</option>
          {coins.map((coin, index) => (
            <option
              key={index}
              value={coin.quotes.USD.price}
              id={coin.symbol}
              symbol={coin.symbol}
            >
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>  
      )}
      <hr />
      <h2>Please Enter The Amount!!</h2>
      <div>
        <input type="number" value={need} onChange={handleInput} placeholder="Dollor"/>$
      </div>
      <h2>{need ? `구매가능 : ${need / cost}개` : `Enter The Dollor!!!`}</h2>
    </div>
  );
}

export default App;
