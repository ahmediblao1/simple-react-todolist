/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Todoitems.css"

function Todoitems({items,deleteItem}){

    const length = items.length
    const listitems = length > 0 ? (items.map((item) => {
        return(
            <div key={item.id}>
            <span className="name">{item.name}</span>
            <span className="age">{item.age}</span>
            <span className="action icon" onClick={() => deleteItem(item.id)}>&times;</span>
        </div>
        )
    })) : (
        <p>there is no item found</p>
    )
return(
    <>
    <div className="Listitems">
        <div>
            <span className="name title">Task</span>
            <span className="age title">description</span>
            <span className="action  title">Action</span>
        </div>
       {listitems}
    </div>
    </>
)
}

export default Todoitems