import React, { useEffect, useState } from 'react';
import { FaChalkboardTeacher, FaTrashAlt } from 'react-icons/fa';
import { RiAdminLine } from 'react-icons/ri';
const UsersAction = () => {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then((res) => res.json())
            .then((data) => setUserData(data));
    }, []);
    console.log(userData);
    return (
        <div className="overflow-x-auto">
            <table className="table table-xs">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Instructor</th>
                        <th>Admin</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((data, i) => (
                        <tr key={i}>
                            <th>{i + 1}</th>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td><FaChalkboardTeacher></FaChalkboardTeacher></td>
                            <td><RiAdminLine></RiAdminLine></td>
                            <td><FaTrashAlt></FaTrashAlt></td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
};

export default UsersAction;