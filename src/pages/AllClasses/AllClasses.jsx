import React from 'react';

const AllClasses = () => {
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
                    <tr>
                        <th>1</th>
                        <td><img src=''></img></td>
                        <td>Piano</td>
                        <td>2500</td>
                        <td>Romel</td>
                        <td><button className="btn btn-success">Approved</button></td>
                        <td><button className="btn btn-error">Denied</button></td>
                    </tr>
                   
                </tbody>
               
            </table>
        </div>
    );
};

export default AllClasses;