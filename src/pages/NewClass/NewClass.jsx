import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';

const NewClass = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user}=useContext(AuthContext);
    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/classes',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    return (
        <div >
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ms-4 me-4">
                
                <div className="form-control">
                
                    <input
                        className="input input-bordered"
                        {...register("name")}
                        placeholder="Class Name"

                    />
                </div>
                
                <div className="form-control">
                    
                    <input
                        className="input input-bordered"
                        {...register("image")}
                        placeholder="Image Link"
                        type="url"

                    />
                </div>
                <input
                        className="input input-bordered"
                        {...register("instructor")}
                        placeholder="Instructor Name"

                    />
                    <div className="form-control">
                
                <input
                    className="input input-bordered"
                    
                    {...register("email")}
                    placeholder="Instructor email"
                    value={user?.email}
                    type="email"
                />

            </div>

                <div className="form-control">
                
                    <input
                        className="input input-bordered"
                        
                        {...register("price")}
                        placeholder="Price"
                        type="number"
                    />

                </div>
                <div className="form-control">
                    <input
                        className="input input-bordered"
                        {...register("available")}
                        placeholder="available Seat" 
                        type="number"
                    />
                </div>
                <div className="form-control">
                    <input
                        className="input input-bordered"
                        {...register("status")}
                        placeholder="Status" 
                        value={"pending"}
                        type="text"
                        hidden
                    />
                </div>

            </div>
            <div className="form-control mt-6">
                <input className="btn btn-neutral  mx-auto" value="Add a Class" type="submit" />
            </div>
        </form>
    </div>
    );
};

export default NewClass;