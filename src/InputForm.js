import { useState } from "react";

const InputForm = ({children}) => {// Whatever component or code exists in the children component doesnot re-renders
  const [username, setUsername] = useState("");
  // Profiler tool main record button ko start karne ko profiling kehte hain
  console.log("Rendering Input Form");

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="off"
        />
        {children}
        <button onClick={() => setUsername("")}>Clear Input</button>
      </form>
    </div>
  );
};

export default InputForm;
