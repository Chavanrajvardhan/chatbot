import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Header() {

    const navigator = useNavigate("")
    const handleChange = async(e) => {
        e.preventDefault()
        try {
            const responce = await axios.post("api/v1/users/logout")
            console.log(responce)
            navigator("/login");

        } catch (error) {
            console.log("error while sending post request to logout")
        }
    }
    

    return (
        <header className="shadow sticky z-50 top-0 border rounded-sm">
            <nav className="bg-slate-900 border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/home" className="flex items-center">
                        <img
                            src="https://img.freepik.com/free-vector/cute-bot-say-users-hello-chatbot-greets-online-consultation_80328-195.jpg?t=st=1714758794~exp=1714762394~hmac=bfe430ba5374abc21edcfd0e00b82abb6155f3e1a34004d2de486d92fe5eebd5&w=740"
                            className="mr-3 h-14 rounded-full"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <button 
                        onClick={handleChange}
                        className='bg-white hover:bg-slate-500'
                        >Logout</button>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-700" : "text-gray-600"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

