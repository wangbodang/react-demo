import { FC, useContext } from 'react'
import { DemoContext } from '../utils/context'

interface ShowNameProps{
    // inputValue: string;
    // setInputValue: Dispatch<React.SetStateAction<string>>;
    // handleJump: MouseEventHandler<HTMLButtonElement>;
}

const ShowName: FC<ShowNameProps> = () => {
    // const {inputValue, setInputValue, handleJump} = props;
    const {inputValue, setInputValue, handleJump} = useContext(DemoContext)

  return (
    <div>
        <p>您的名字是：{inputValue}</p>
        <input type='text' value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <button onClick={handleJump}>跳到外网</button>
      </div>
  )
}

export default ShowName