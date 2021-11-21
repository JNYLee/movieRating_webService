import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time");
  useEffect(() => {
    console.log("CALL THE API...");
  }, []);
  useEffect(() => {
    if(keyword !== "" && keyword.length > 5){
      console.log("Search For", keyword);
    }
  }, [keyword]);
  return (
    <div>
      <input 
      onChange={onChange}
      value = {keyword}
      placeholder = {"Search for..."}
      type="text"
      />
      <h1>{counter}</h1>
     <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
