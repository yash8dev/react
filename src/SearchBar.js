import { useState } from "react";

function SearchBar(props){
    const [name,setname] = useState("");
    const [price,setprice] = useState(0);
    const [type,settype] = useState("");
    const [brand,setbrand] = useState("");
    

const serachbuttonpressed=()=>{
    props.updatesearchpar({
        name:name,
        price : price,
        type: type,
        brand: brand,
    })
}



    return(
        <div className="container">
               <div className="row">
            <h2>Add a items</h2>
            </div>
            <div className="row">
                <div className="col">
                <label htmlFor="name-field">Name:</label>
                <input id="name-field"
                 type="text" 
                value={name} 
                className="form-control"
                onChange={(e) => setname(e.target.value)}/></div>
                <div className="col">
                <label htmlFor="price-field">Max price:</label>
                <input id="price-field" 
                type="number" 
                value={price}
                className="form-control"
                onChange={(e)=>setprice(e.target.value)}
                /></div>
                <div className="col">
                <label htmlFor="type-field">Type:</label>
                <input id="type-field" 
                type="text" 
                value={type}
                className="form-control"
                onChange={(e)=>settype(e.target.value)}
                /></div>
                <div className="col">
                <label htmlFor="brand-field">Brand:</label>
                <input id="brand-field"
                 type="text"
                  value={brand}
                  className="form-control"
                  onChange={(e)=>setbrand(e.target.value)}
                  />
                  </div>
                  </div>
                     <div className="row mt-3">
                         <div className="col-4"></div>
                <button onClick={serachbuttonpressed}  type="button" className="col-3 btn btn-primary">Search</button>
            </div>
        </div>
    )
}
export default SearchBar;