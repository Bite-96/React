import Button from './Button';
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'keyword' & 'counter' changes");
  }, [keyword, counter]);

  return (
    <div>
      <h1 className={styles.title}>Welcome Back!!!</h1>
      <h1>{counter}</h1>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search Here..." /><br/>
      <button onClick={onClick}>Click Me</button>
      <Button text={"Continue"}/>
    </div>
  );
}

export default App;
