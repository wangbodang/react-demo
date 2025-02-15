import './App.css'
import Calculator from "./calculator";
import Counter from './components/Counter'
import ShowName from './components/ShowName'
import { DemoProvider } from './utils/context'

function App() {
  // 监听指定状态变化
  // useEffect(() => {
  //   console.log("first")
  // },[count, inputValue]);
  
  // 监听所有状态变化
  // useEffect(() => {
  //   console.log("first")
  // });

  // 仅在页面渲染前执行，且只执行一次，相当于 componentWillMount
  // useEffect(() => {
  //   console.log("first")
  // },[]);

  // useEffect(() => {
  //   console.log("first")
  //   // 这里的 return 相当于 componentWillUnmount 生命周期钩子函数
  //   return (() => {
  //     alert("second")3
  //   })
  // },[]);

  return (
    <DemoProvider>
      <Calculator />
      <Counter />
      <ShowName />
    </DemoProvider>
  )
}

export default App
