
import './App.css';
import Additem from './Additem';
import SearchBar from './SearchBar';
import {useState} from "react";
import ItemsDisplay from './Itemsdis';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [filiter,setfiliter] = useState({})
  const [data,setdata] =  useState({items : []});
  const updatefiliter = (searchpar)=>{
    setfiliter(searchpar)
  }
  
  const addItemToData=(additems)=>{
    let items =data["items"];
    additems.id = items.length;
    items.push(additems)
    setdata({items : items});
    console.log(data)
  }
  return (
    <div className="container">
      <div className="row mt-3">
<SearchBar updatesearchpar={updatefiliter}/>
</div>
<div className="row mt-3">
<ItemsDisplay items={data["items"]}/>
</div>
<div className="row mt-3">
<Additem additem={addItemToData}/>
</div>
     </div>
  );
}



export default App;
