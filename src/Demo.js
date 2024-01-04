import { Children, useState } from "react";
import Card from "./Card";
import Extra from "./Extra";

const Demo = ({children}) => {
    const [state1, setState1] = useState(false);
    const [state2, setState2] = useState(false);
    console.log("Demo Rendered");
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
      {children}
      {/* React memo() yaha use karne ka matlab hain ki agar state2 jo Card component ka prop hain agar is props ka value change hua tavi is Card component ko render karna warna render mat karna jo koi v state change hone par pehle pehle render ho rahi thi */}
    </div>
  );
};

export default Demo;
