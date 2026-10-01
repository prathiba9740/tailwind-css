import { useState } from "react";
import { twMerge } from "tailwind-merge";

function ButtonCalculator({ children, className, ...rest }) {
  return (
    <button
      className={twMerge(
        "bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-90 transition-all duration-100",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

function Calculator() {
  const [curVal, setCurval] = useState("");
  const [prevVal, setPrevVal] = useState("");
  const [op, setOp] = useState("");

  function handelNumbers(i) {
    setCurval((prev) => prev + i);
  }
  function handleClear() {
    setCurval("");
    setPrevVal("");
    setOp("");
  }
  function handleModuler() {
    setCurval((prev) => prev / 100);
  }
  function handleSquare() {
    setCurval((prev) => Math.sqrt(prev));
  }

  function handleOperator(op) {
    setOp(op);
    setPrevVal(curVal);
    setCurval("");
  }
  function handleEquale() {
    if (op === "÷") {
      setCurval(parseFloat(prevVal) / parseFloat(curVal));
      setPrevVal("");
      setOp("");
    } else if (op === "x") {
      setCurval(parseFloat(prevVal) * parseFloat(curVal));
      setPrevVal("");
      setOp("");
    } else if (op === "+") {
      setCurval(parseFloat(prevVal) + parseFloat(curVal));
      setPrevVal("");
      setOp("");
    } else if (op === "-") {
      setCurval(parseFloat(prevVal) - parseFloat(curVal));
      setPrevVal("");
      setOp("");
    }
  }
  function handleDisplay() {
    if (curVal.length === 0) {
      return "0";
    } else if (curVal === ".") {
      return "0.";
    } else {
      return parseFloat(curVal).toLocaleString();
    }
  }
  return (
    <div className="bg-white p-5 rounded-3xl">
      <div className="text-right bg-gray-100 p-3 text-5xl rounded-xl mb-6 shadow-sm">
        {handleDisplay()}
      </div>
      <div className="grid grid-cols-4 gap-5">
        <ButtonCalculator
          className="bg-red-200 text-red-600"
          onClick={() => handleClear()}
        >
          C
        </ButtonCalculator>
        <ButtonCalculator onClick={handleModuler}> %</ButtonCalculator>
        <ButtonCalculator onClick={handleSquare}>√</ButtonCalculator>
        <ButtonCalculator
          className="bg-orange-400 text-white"
          onClick={() => handleOperator("÷")}
        >
          ÷
        </ButtonCalculator>
        <ButtonCalculator onClick={() => handelNumbers("1")}>
          1
        </ButtonCalculator>
        <ButtonCalculator onClick={() => handelNumbers("2")}>
          2
        </ButtonCalculator>
        <ButtonCalculator onClick={() => handelNumbers("3")}>
          3
        </ButtonCalculator>
        <ButtonCalculator
          className="bg-orange-400 text-white"
          onClick={() => handleOperator("x")}
        >
          x
        </ButtonCalculator>

        <ButtonCalculator onClick={() => handelNumbers("4")}>
          4
        </ButtonCalculator>
        <ButtonCalculator onClick={() => handelNumbers("5")}>
          5
        </ButtonCalculator>
        <ButtonCalculator onClick={() => handelNumbers("6")}>
          6
        </ButtonCalculator>
        <ButtonCalculator
          className="bg-orange-400 text-white"
          onClick={() => handleOperator("-")}
        >
          -
        </ButtonCalculator>
        <ButtonCalculator onClick={() => handelNumbers("7")}>
          7
        </ButtonCalculator>
        <ButtonCalculator onClick={() => handelNumbers("8")}>
          8
        </ButtonCalculator>
        <ButtonCalculator onClick={() => handelNumbers("9")}>
          9
        </ButtonCalculator>
        <ButtonCalculator
          className="bg-orange-400 text-white"
          onClick={() => handleOperator("+")}
        >
          +
        </ButtonCalculator>
        <ButtonCalculator
          className="col-span-2 aspect-auto"
          onClick={() => handelNumbers("0")}
        >
          0
        </ButtonCalculator>
        <ButtonCalculator onClick={() => handelNumbers(".")}>
          .
        </ButtonCalculator>

        <ButtonCalculator
          className="bg-green-400 text-white"
          onClick={handleEquale}
        >
          =
        </ButtonCalculator>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="bg-linear-to-br from-slate-800 to-slate-950 h-dvh w-full flex items-center justify-center relative">
      <Calculator />
    </div>
  );
}

export default App;
