import { useState } from 'react';
import './App.css';


function App() {

  const [name1, setName1] = useState("")
  const [name2, setName2] = useState("")
  const [v,setV]=useState(false)
  const [ans,setAns]=useState("")
  const flames = {
    1: "Friends",
    2 : "Love",
    3: "Affection",
    4: "Marriage",
    5: "Enemy",
    0: "Siblings"
  }
  const checkFuture = () => {
    if(name1.length===0 || name2.length===0 ) {
      setV(true)
      return
    }
    const words1 = {}
    const words2 = {}
    let c = 0
    for (let i = 0; i < name1.length; i++) {
      words1[name1[i]] = (words1[name1[i]] || 0) + 1
    }
    for (let i = 0; i < name2.length; i++) {
      words2[name2[i]] = (words2[name2[i]] || 0) + 1
    }

    for (let k1 in words1) {
      if (k1 in words2) {
        c += Math.abs(words1[k1] - words2[k1])
      }
      else {
        c += words1[k1]
      }
    }
    for (let k2 in words2) {
      if (!(k2 in words1)) {
        c += words2[k2]
      }
    }

    const index = c % 6

    setAns(flames[index])

  }

  const handleClear=()=>{
    setName1("")
    setName2("")
    setAns("")
    setV("")
  }

  return (
    <div id="main">
      <input data-testid="input1" name='name1' value={name1} onChange={(e) => setName1(e.target.value)} placeholder='first name' ></input>
      <input data-testid="input2" name='name2' value={name2} onChange={(e) => setName2(e.target.value)} placeholder='second name' ></input>
      <button data-testid="calculate_relationship" name="calculate_relationship" onClick={checkFuture}>Calculate Relationship Future</button>
      <button data-testid="clear" name='clear' onClick={handleClear}>Clear</button>
      {
        v && <p>Please Enter valid input</p>
      }
      <h3 data-testid="answer" >{ans}</h3>
    </div>
  );
}

export default App;

