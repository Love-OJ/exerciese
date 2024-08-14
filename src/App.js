
let count=10
const islogin=true
const list=[
  {id:101,name:'xqq',},
  {id:102,name:'wdd'},
  {id:103,name:'xff'}
]
function getname()
{
  return 'xff'
}
function App() {
  return (
    <div className="App">
      this is a App
      {'this is a messege'}
      {count}
      {getname()}
      {new Date().getDate()}
      <div style={{width:'100px',color:'red'}}>who are you</div>
      <div>
        <ul>
          {list.map(item=><li style={{color:'blue',backgroundColor:'green'}} key={item.id}>{item.name} is beatifu in the world</li>)}
        </ul>
      </div>
      <div>
        {islogin&&<span>this is true</span>}
        <br></br>
        {islogin?<span>i am sure</span>:<span>i am false</span>}
      </div>
    </div>
  );
}

export default App;
