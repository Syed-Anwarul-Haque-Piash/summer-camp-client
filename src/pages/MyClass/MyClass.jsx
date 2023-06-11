//import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const MyClass = () => {
    const { user } = useContext(AuthContext)
    const [classData, setClassData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/classes/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setClassData(data)
            })
    }, [])
    return (
        <div>
            This is my class
            {
                classData.map(data =>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={data.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Total Inrolment: 0</h2>
                            <p><div className="badge badge-neutral">{data.status}</div></p>
                            {/* <div className="card-actions ">
                                <button className="btn btn-success">Approved</button>
                                <button className="btn btn-info">Pending</button>
                                <button className="btn btn-error">Denied</button>
                            </div> */}
                            {/* The button to open modal */}
                            <label htmlFor="my_modal_7" className="btn">Your Feedback</label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box">
                                    <h3 className="text-lg font-bold">Feedback</h3>
                                    <p className="py-4">{data?.feedback?.feedback || "feetback not found"}</p>
                                </div>
                                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default MyClass;