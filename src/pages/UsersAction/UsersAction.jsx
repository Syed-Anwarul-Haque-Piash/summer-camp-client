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
          const res = await axios.get("http://localhost:5000/users");
          return res.data;
        }
      );
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
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
};

export default UsersAction;