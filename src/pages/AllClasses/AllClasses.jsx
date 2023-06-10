import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const AllClasses = () => {

    const { data: allClassData = [], refetch } = useQuery(
        ["classes"],
        async () => {
            const res = await axios.get("http://localhost:5000/classes");
            return res.data;
        }
    );
    console.log(allClassData)

    const approveHandler = (id) => {
        console.log(id)
        axios
            .patch(`http://localhost:5000/class/approve/${id}`)
            .then((response) => {
                if (response.status === 200) {

                    alert("Class approve Confirmed !");
                }
            })
    }
    const denyHandler = (id) => {
        console.log(id)
        axios
            .patch(`http://localhost:5000/class/deny/${id}`)
            .then((response) => {
                if (response.status === 200) {

                    alert("Class denied Confirmed !");
                }
            })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table table-xs">
                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Class name</th>
                        <th>price</th>
                        <th>Instructor Name</th>
                        <th>Action</th>
                        <th>Denied</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {allClassData.map(singleData=><p>1</p>)} */}
                    {allClassData.map((singleData,index) =>
                        <tr key={singleData._id}>
                            <th>{index+1}</th>
                            <td><img className='w-14 h-14 rounded-lg' src={singleData.image}></img></td>
                            <td>{singleData.name}</td>
                            <td>{singleData.price}</td>
                            <td>{singleData.instructor}</td>
                            <td><button onClick={() => approveHandler(singleData._id)} className="btn btn-success">Approved</button></td>
                            <td><button onClick={()=>denyHandler(singleData._id)} className="btn btn-error">Denied</button></td>
                            <td><button className="btn btn-error">Feedback</button></td>
                        </tr>)}


                </tbody>

            </table>
        </div>
    );
};

export default AllClasses;