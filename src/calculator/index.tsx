import { useState } from "react";

const Calculator = () => {
  const [calculateResult, setCalculateResult] = useState("0")

  const check = (value:string):number => {
    return Number(value)
  }

  const handleInput = (value: string) => {
    calculateResult === "0" ? setCalculateResult(value) : setCalculateResult(calculateResult + value)
  }

  const handleCalculate = () => {
    setCalculateResult(eval(calculateResult).toString())
  }

  return (
    <div>
      <div className="text-3xl">{calculateResult}</div>
      <div className="flex justify-between w-auto">
        <div className="grid grid-cols-3 gap-4">
          <button onClick={() => handleInput("1")}>1</button>
          <button onClick={() => handleInput("2")}>2</button>
          <button onClick={() => handleInput("3")}>3</button>
          <button onClick={() => handleInput("4")}>4</button>
          <button onClick={() => handleInput("5")}>5</button>
          <button onClick={() => handleInput("6")}>6</button>
          <button onClick={() => handleInput("7")}>7</button>
          <button onClick={() => handleInput("8")}>8</button>
          <button onClick={() => handleInput("9")}>9</button>
          <button onClick={() => handleInput("0")}>0</button>
          <button onClick={() => handleInput(".")}>.</button>
        </div>
        <div className="flex flex-col justify-start gap-4">
          <button onClick={() => handleInput("+")}>+</button>
          <button onClick={() => handleInput("-")}>-</button>
          <button onClick={() => handleInput("*")}>*</button>
          <button onClick={() => handleInput("/")}>/</button>
          <button onClick={handleCalculate}>=</button>
        </div>
      </div>
    </div>
  )
}

export default Calculator