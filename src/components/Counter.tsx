import { FC, useContext } from "react"
import { DemoContext } from "../utils/context"

interface CounterProps {
    // handleClick: MouseEventHandler<HTMLButtonElement>
    // count: number
}

const Counter: FC<CounterProps> = () => {
    // const {handleClick, count} = props
        const {handleClick, count} = useContext(DemoContext)

  return (
    <div className="card">
      <button onClick={handleClick}>
        count is {count}
      </button>
    </div>
  )
}

export default Counter