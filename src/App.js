import { createContext, useContext, useState } from "react"
//父传子
function Son(prop) {
const lll=useContext(MsgContent)

  return (
    <div>
    这是父传子哦:{prop.name}
   
    
    </div>
  )
}

//props可传任意值 数字，字符串，布尔值，数组，对象，函数，JSX ,子组件只能读，不能修改
// <Son name='jack' age={18} istrue={true} />
//父传子--chlidren说明
//子传父：在子组件调用父组件的函数并传参
function Son1({ onGetmsg }) {
  const name = ' this is 子传父 name'
  return(
    <div>
     hhhhhhh
      <button onClick={()=>onGetmsg(name)}>send</button>
      <Son></Son>
    </div>
  )

}
//子组件调父组件中的函数，子是传参的
//兄弟之间传参：父传子，子传父
//跨c层级，用ctx,createContext创建一个上下文对象
const MsgContent =createContext()
//在顶层组件，用provider组件提供数据
//在底层组件用useContext钩子函数使用数据
function App() {
const lll='you, 这是垮chuan'
  const [msg,setMsg]=useState('')
  const getmsg=(msg)=>
    {console.log(msg)
      setMsg(msg)
    }
    return (
 <div>
  我是顶层组件
  <MsgContent.Provider value={lll}><Son1/></MsgContent.Provider>
  <Son1 onGetmsg={getmsg}></Son1>
  <p>子传父的消息：{msg}</p>
   <Son name={msg}></Son>
 </div>
    )
}

export default App;
