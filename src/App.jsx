import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const validInput = userInput.duration >= 1;

  const handleUserInput = (inputId, newValue) => {
    setUserInput((prev) => {
      return {
        ...prev,
        [inputId]: +newValue,
      };
    });
  };

  return (
    <>
      <Header />
      <UserInput onChangeInput={handleUserInput} userInput={userInput} />
      {!validInput && (
        <p className="center">Please enter a duration grater than zero</p>
      )}
      {validInput && <Results userInput={userInput} />}
    </>
  );
}

export default App;
