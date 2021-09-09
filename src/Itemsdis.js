function ItemsDisplay(props){
    const showitems =(item)=>{
       
            return(<tr>
           
                 <th>{item.id}</th>
                 <td>{item.name}</td>
                 <td>{item.price}</td>
                 <td>{item.type}</td>
                 <td>{item.brand}</td>

             </tr> 
            )
        }

    return <div className="container">
        <div className="row"><h2>items</h2></div>
        <div className="row">
            <table className="table table-striped">
                <thead>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">price</th>
                    <th scope="col">Type</th>
                    <th scope="col">Brand</th>
                </thead>
                <tbody>{props.items.map(showitems)}</tbody>
            </table>
        </div>
      
        </div>
};

export default ItemsDisplay;
