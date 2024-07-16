import './App.css';
import Card from './components/Card';

function App() {
  
  // let myObj = {
  //   name: "new Jacket",
  //   price: 110.00,
  //   stock: true,
  //   sizes: ['s', 'm', 'l', 'xl'],
  //   selected: 's'
  // }
  // let NewArray = ['s', 'm', 'l', 'xl'];

  return (
    <>
      <div className="text-3xl mb-4">React Props</div>

      {/* <Card username="new Jacket" someObj={myObj} array={NewArray} />
      <br />
      <Card username="old Jacket" /> */}

      <Card username="New Jacket" isAvailable={true}/>
      <br />
      <Card username="Old Jacket" isAvailable={false} />
    </>
  );
}

export default App;