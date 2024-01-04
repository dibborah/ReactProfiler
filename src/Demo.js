import { useState } from "react";
import Card from "./Card";

const Demo = () => {
    const [state1, setState1] = useState(false);
    const [state2, setState2] = useState(false);
  return (
    <div style={{background:"#efefef", padding:"1rem"}}>
      <label htmlFor="State1">State 1</label>
      <input
        type="checkbox"
        name="state1" 
        id="state1"
        checked={state1} 
        onChange={()=>setState1(!state1)}
      />
      <label htmlFor="State2">State 2</label>
      <input 
        type="checkbox"
        name="state2"
        id="state2"
        checked={state2}
        onChange={()=>setState2(!state2)}
      />
      <Card />
    </div>
  );
};

export default Demo;
