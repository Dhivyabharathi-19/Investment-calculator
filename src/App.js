import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsvalid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevuserInput) => {
      return {
        ...prevuserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsvalid && (
        <p className="center">Please enter a duration greater than Zero.</p>
      )}
      {inputIsvalid && <Result input={userInput} />}
    </>
  );
}

export default App;
