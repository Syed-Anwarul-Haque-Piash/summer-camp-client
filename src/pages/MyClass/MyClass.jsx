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
                            <p><div className="badge badge-neutral">Pending</div></p>
                            {/* <div className="card-actions ">
                                <button className="btn btn-success">Approved</button>
                                <button className="btn btn-info">Pending</button>
                                <button className="btn btn-error">Denied</button>
                            </div> */}
                        </div>
                    </div>)
            }
        </div>
    );
};

export default MyClass;