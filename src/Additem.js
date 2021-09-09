import { useState } from "react";

function Additem(props){
    const [name,setname] = useState("");
    const [price,setprice] = useState(0);
    const [type,settype] = useState("");
    const [brand,setbrand] = useState("");
    

    const additemsbutton=()=>{
     props.additem({
        name : name,
        price : price, 
        type: type,
        brand: brand
    });
    setname("");
    setprice("");
    settype("");
    setbrand("");
}



    return(
        <div className="container">
            <div className="row"><h2>Search for items</h2></div>
            
            <div className="row">
            <label htmlFor="name-field">Name:</label>
                <input id="name-field"
                 type="text" 
                value={name} 
                className="form-control"
                onChange={(e) => setname(e.target.value)}/>
                <label htmlFor="price-field"> price:</label>
                <input id="price-field" 
                type="number" 
                value={price}
                className="form-control"
                onChange={(e)=>setprice(e.target.value)}
                />
                <label htmlFor="type-field">Type:</label>
                <input id="type-field" 
                type="text" 
                value={type}
                className="form-control"
                onChange={(e)=>settype(e.target.value)}
                />
                <label htmlFor="brand-field">Brand:</label>
                <input id="brand-field"
                 type="text"
                  value={brand}
                  className="form-control"
                  onChange={(e)=>setbrand(e.target.value)}
                  />
            </div>
                <div className="row">
                <button onClick={additemsbutton} className="btn btn-primary" type="button">Add item</button>
                </div>
        </div>
    )
}
export default Additem;