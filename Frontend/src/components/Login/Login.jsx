import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';



//login component functionality
export default function Login() {

    //useState hook used for get data form input filed if any changes it reassign value 
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");

    //useNavigate hook used to when responce is ok  navigate to home page
    const navigate = useNavigate();

    //this function destucture the user inputed data and send value to setData function 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const url = "/api/v1/users/login"
            console.log(data)
            //send post request using axios to backend
            //we use axios becous it add extra functionality
            const { responce } = await axios.post(url, data)

            //we post request responce catched here
                .then((responce) => {
                    //if resonce is ok we navigate to home 
                    if (responce.data.statusCode == 200) navigate("/home")
                    setError(responce.data.error)
                })
            console.log(responce.data.error)

        } catch (error) {
            setData("Post Error")
        }
    }


    //return login component

    return (
        <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
            <h2 className=" flex flex-col items-center justify-item-center text-2xl font-semibold mb-4">
                <img className="w-20" src="https://img.freepik.com/free-vector/chatbot-chat-message-vectorart_78370-4104.jpg?t=st=1715248404~exp=1715252004~hmac=11c4fef525ee14e2d7d7d111008f864a206e952151e5c95374e131581aa1a079&w=740" alt="" />
                Login</h2>
            <form
                onSubmit={handleSubmit}
            >
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700">Email</label>

                    <input
                        placeholder='email'
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" required />

                </div>

                <div className="mb-6">
                    <label htmlFor="password"
                        className="block text-sm font-medium text-gray-700">Password</label>

                    <input type="password"
                        name="password"
                        placeholder='password'
                        value={data.password}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" required />
                </div>

                <div className="flex items-center justify-between">
                    <button type="submit"

                        className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Login</button>
                </div>
                {error && <p className="text-red-600 mt-2">{error}</p>}
                <div className='flex my-2'>
                    <p className='text-blue-400'>New to ChatBot?</p>
                    <Link
                        className='mx-4 text-blue-800 hover:text-blue-300'
                        to={"/signup"}
                    >
                        Sign Up
                    </Link>
                </div>


            </form >
        </div >

    );
}
