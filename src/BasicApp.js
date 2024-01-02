import InputForm from "./InputForm";
import ExtraComponent from "./ExtraComponent";

const BasicApp = () => {
  console.log("Rendering Basic App");
  return (
    <div>
      <h1>Basic App</h1>
      <InputForm>  <ExtraComponent /> </InputForm>
    </div>
  );
};

export default BasicApp;
