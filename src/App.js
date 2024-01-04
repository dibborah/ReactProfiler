// import BasicApp from "./BasicApp";
import Demo from "./Demo";
import Extra from "./Extra";

const App = () => {
  return (
    <div>
      {/* <BasicApp/> */}
      <h1>React Memo Demo</h1>
      <Demo><Extra/></Demo>
      {/* If the useState is not lifted in this component where the component is passed in the children prop than the children prop doesnot renders */}
    </div>
  )
}

export default App;
