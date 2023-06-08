import React from 'react';
import {  FaChalkboardTeacher, FaTrashAlt } from 'react-icons/fa';
import { RiAdminLine } from 'react-icons/ri';
const UsersAction = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table table-xs">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Email</th>
                        <th>Instructor</th>
                        <th>Admin</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>img</td>
                        <td>Piash</td>
                        <td>syed88783@gmail.com</td>
                        <td><FaChalkboardTeacher></FaChalkboardTeacher></td>
                        <td><RiAdminLine></RiAdminLine></td>
                        <td><FaTrashAlt></FaTrashAlt></td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default UsersAction;