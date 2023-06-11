import React, { useEffect, useState } from 'react';

const SelectItem = () => {
    const [selectClass,setSelectClass]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/addtocart')
          
         .then(res=>res.json())
         .then(data=>{
          console.log(data)
          setSelectClass(data)
         })
    },[])
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Class Name</th>
                        <th>Instructor Name</th>
                        <th>Instructor Email</th>
                        <th>Price</th>
                        <th>Pay</th>
                    </tr>
                </thead>
                <tbody>
                    
                   {selectClass.map((select,index)=>
                     <tr key={index+1}>
                     <th></th>
                     <td>{select.name}</td>
                     <td>{select.instructor}</td>
                     <td>{select.email}</td>
                     <td>{select.price}</td>
                 </tr>)}
                    


                </tbody>
            </table>
        </div>
    );
};

export default SelectItem;