const InputForm = ({ username, setUsername }) => {
    console.log("Rendering Input Form");
  return (
    <div>
      <form>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="off"
        />
      </form>
    </div>
  );
};

export default InputForm;
