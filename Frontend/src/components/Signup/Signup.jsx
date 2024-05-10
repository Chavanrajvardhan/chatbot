import React, { useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'


function Signup() {

    const [data, setData] = useState({
        username: "",
        fullName: "",
        email: "",
        contact: "",
        password: ""
    });



    const [error, setError] = useState("")
   
    

    const navigate = useNavigate('')

    const handelChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const url = "/api/v1/users/register"
            console.log(data)
            const {responce} = await axios.post(url,data) 
            .then((responce) => {
                console.log(responce.data.statusCode)
                if(responce.data.statusCode == 200) navigate("/")
                setError(responce.data.error)
            })
            console.log(responce.data.error)
               
        } catch (error) {
          setData("Post Error")
        }
    }

    return (
        <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Register</h2>
            <form
            onSubmit= {handleSubmit}
            >
                <div className="mb-4">
                    <label htmlFor="username"
                        className="block text-sm font-medium text-gray-700">Username</label>
                    <input type="text"
                        placeholder="username"
                        name="username"
                        value={data.username}
                        onChange={handelChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="fullName"
                        className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                        type="text"
                        placeholder="full Name"
                        name="fullName"
                        value={data.fullName}
                        onChange={handelChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="email"
                        className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email"
                        name="email"
                        value={data.email}
                        onChange={handelChange}
                        placeholder='email'
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" required />
                </div>
                
                
               
                <div className="mb-4">
                    <label htmlFor="contact"
                        className="block text-sm font-medium text-gray-700">Contact</label>
                    <input type="tel"
                        name="contact"
                        placeholder='contact'
                        value={data.contact}
                        onChange={handelChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" required />
                </div>
               
                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input type="text"
                        name="password"
                        placeholder='password'
                        value={data.password}
                        onChange={handelChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" required />
                </div>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <button
                    type="submit"
                    className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Register
                </button>

                <div className='flex my-2'>
                    <p className='text-blue-400'>Have an account?</p>
                    <Link
                        className='mx-4 text-blue-800 hover:text-blue-300'
                        to={"/"}
                    >
                        Login 
                    </Link>
                </div>
                
            </form>
        </div>

    )
}
export default Signup
