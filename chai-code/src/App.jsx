import './index.css'
import Card from './components/Card_.jsx'

function App() {
  let obj={
    name:"sahil",
    fname:"yadav",
    age:20,
    gender:"male",
    college:"uit-b",
    city:"patiala"

  }
  return (
    <>
    {/* <App/> */}
      <Card name="sahil" fname="yadav"  btnText="click me" obj={obj}/>
      <Card name="shreya" fname="rai" obj={obj}/>
    </>
  );
}

export default App;
