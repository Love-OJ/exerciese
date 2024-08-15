import { useState } from 'react'
import _ from 'lodash'
import {useRef} from 'react'
import {v4 as uuidV4} from 'uuid'
import dayjs from 'dayjs'
let collunt = 10
const islogin = true
const list = [
  {
    id: 3,
    user: {
      uid: '13258165',
      uname: '走加仑',
    },
    content: '哟，不错哦！',
    ctime: '10-18 08:15',
    like: 58,
  },
  {
    id: 2,
    user: {
      uid: '13258166',
      uname: 'lll加仑',
    },
    content: '哟,haixingo!',
    ctime: '10-20 08:15',
    like: 60,
  },
  {
    id: 1,
    user: {
      uid: '13258167',
      uname: 'xff',
    },
    content: '哟，家啊有！',
    ctime: '10-30 08:15',
    like: 100,
  },
]
const user={
uid:'13258167',
unname:'xff',
}

function getname() {
  return 'xff'
}
const kkk = (prop, e) => {
  console.log('我被点击了', prop, e)
}
const Button = () => {
  return <button onClick={(e) => kkk('小猪，我回来了！', e)}>click on me</button>
}
const tabs=[
  {id:1 ,type:'hot',text:'最热'}, 
  {id:2,type:'time',text:'最新'}

] 

function App() {
  const [count, setCount] = useState(0);
  const [content,setContent]=useState('')
  const [comment, setCommentlist] = useState(list)
  const [activeTab, setActiveTab] = useState('hot');
  const fff=useRef(null)

  const post = () => {
    setCommentlist(prevlist=> [
      ...prevlist,
      {
        id: uuidV4(),
        user: {
          uid: '13258167',
          uname: 'xff',
        },
        content: content,
        ctime: dayjs(new Date()).format('MM-DD hh:mm'),
        like: 100,
      },
    ]);
    setContent("")
  fff.current.focus()
  };
  
  function hhhh() {
    setCount(count + 1)
  }
// const [type,setType]=useState('hot')
const inputRef=useRef(null)
const showdom=()=>{
  console.log(inputRef.current)
}
  let sum = 1;
  function uuu() {
    for (let i = 0; i < 1000; i++) {
      sum++;
    }
  }
  const [form, setForm] = useState({ name: 'xff' })
  function llll() {
    setForm({
      ...form,
      name: 'zzs'
    })
  }
 
function tabchange(Type) {
  console.log('tabchange called with type:', Type);
  // setType(Type);
  setActiveTab(Type); // 更新活动标签
  if(Type=='hot')
  {
    setCommentlist(_.orderBy(list,'like','desc'))
  }
  else
  {
    setCommentlist(_.orderBy(list,'ctime','desc'))
  }
}

function hhh(id)
{
  console.log(id)
  setCommentlist(comment.filter(item=>item.id!==id))
}
const [value,setValue]=useState('')
  return (
    <div className="App">
      this is a App
      {'this is a messege'}
      {collunt}
      {getname()}
      {new Date().getDate()}
      <div style={{ width: '100px', color: 'red' }}>who are you</div>
      <div>
        <ul>
          {list.map(item => <li style={{ color: 'blue', backgroundColor: 'green' }} key={item.id}>{item.name} is beatifu in the world</li>)}
        </ul>
      </div>

      <div>
        {islogin && <span>this is true</span>}
        <br></br>
        {islogin ? <span>i am sure</span> : <span>i am false</span>}
      </div>
      <button onClick={(e) => kkk('主人', e)}>click me</button>
      <Button />
      <br></br>
      <button onClick={hhhh}>{count}</button>
      <button onClick={llll}>修稿{form.name}</button>
      <div>{tabs.map(item=><span className={`nav-item`} key={item.id} onClick={()=>tabchange(item.type)}  style={{
              fontSize: activeTab === item.type ? '20px' : 'initial', 
              color: activeTab === item.type ? 'blue' : 'initial',  }}>{item.text}</span>)}</div>
      <div className='replay-list'>
        {comment.map(item => (
          <div className='replay-item'  key={item.id}>
            <div>{item.user.uname}</div><div>{item.content}</div>
            <span>{item.ctime}</span><div>{item.like}</div>
           
          {item.user.uid===user.uid&&<span onClick={()=>hhh(item.id)}>删除</span>}
          </div>
        ))}
      </div>
      
      <div>
        <input value={value} onChange={(e)=>setValue(e.target.value)} type='text'></input>
      </div>
      <input type='text' ref={inputRef} />
      <button onClick={showdom}>获取dom</button>
      <textarea ref={fff} placeholder='发表一条友善的言论' value={content} onChange={(e)=>setContent(e.target.value)}>

</textarea>
<button style={{color:'blue'}} onClick={post}>发布</button>
    </div>

  );
}

export default App;
//usestate