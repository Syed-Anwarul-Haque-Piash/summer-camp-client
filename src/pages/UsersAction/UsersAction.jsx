import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { RiAdminLine } from 'react-icons/ri';
//import useAxiosSecure from '../../hooks/useAxiosSecure';
import axios from 'axios';
const UsersAction = () => {
    const { data: userData = [], refetch } = useQuery(
        ["users"],
        async () => {
            const res = await axios.get("https://summer-camp-server-flame-three.vercel.app/users");
            return res.data;
        }
    );
    console.log(userData);
    const instructorHandler = (id) => {
        const ready = confirm("Are you sure you want to change roles?");
        if (ready) {
            fetch(`https://summer-camp-server-flame-three.vercel.app/users/instructor/${id}`, {
                method: "PATCH"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }

    }
    const adminHandler=(id) => {
        const ready = confirm("Are you sure you want to change roles?");
        if (ready) {
            fetch(`https://summer-camp-server-flame-three.vercel.app/users/admin/${id}`, {
                method: "PATCH"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }
    }
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
                    </tr>
                </thead>
                <tbody>
                    {userData.map((data, i) => (
                        <tr key={i}>
                            <th>{i + 1}</th>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td><FaChalkboardTeacher className='text-blue-700 text-3xl' onClick={() => instructorHandler(data._id)}></FaChalkboardTeacher></td>
                            <td><RiAdminLine className='text-green-700 text-3xl'  onClick={()=>adminHandler(data._id)}></RiAdminLine></td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
};

export default UsersAction;