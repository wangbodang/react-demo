import { Context, createContext, Dispatch, FC, SetStateAction, useState } from "react";

interface DemoProviderProps {
  children: any
}

interface ContextTypes {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  handleJump: () => void;
  handleClick: () => void;
  count: number
}

const defaultValues:ContextTypes = {
  inputValue: "",
  setInputValue: () => {},
  handleJump: () => {},
  handleClick: () => {},
  count: 0
}

export const DemoContext: Context<ContextTypes>  = createContext(defaultValues);

export const DemoProvider: FC<DemoProviderProps> = ({ children }) => {
  const [count, setCount] = useState(defaultValues.count)
  const [name, setName] = useState("")
  const [inputValue, setInputValue] = useState(defaultValues.inputValue)

  const handleClick = () => {
    setCount((count) => count + 1)
  }

  const handleShowName = () => {
    setName(inputValue)
  }

  const handleJump = () => {
    location.href = "https://www.google.com"
  }

  const contexts = { handleClick, count, inputValue, setInputValue, handleJump }

  return (
    <DemoContext.Provider value={contexts}>
      {children}
    </DemoContext.Provider>
  );
};
