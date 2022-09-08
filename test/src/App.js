import Button from './Button';
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("Created :)");
    return () => console.log("destroyed :(");
  }, []);

  return <h1>Hello</h1>
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);

  const onClick1 = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const onClick2 = () => setShowing((prev) => !prev);

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
      <button onClick={onClick1}>Click Me</button><br/>
      {showing ? <Hello /> : null}
      <button onClick={onClick2}>{showing ? "Hide" : "Show"}</button><br/>
      <Button text={"Continue"}/>
    </div>
  );
}

export default App;
