import { useState } from 'react';
import backGroundImage from '../assets/backgroundImage.png'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { api } from "../services/api"

import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { FiMail, FiLock, FiUser } from "react-icons/fi"
import { Link, useNavigate } from 'react-router-dom';

export function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleSignUp() {
        if (!name || !email || !password) {
            return toast.error('Please enter all required fields');
            
        }

        api.post("/users", {name, email, password})
        .then(() => {
            toast.dark('Usuário criado com sucesso!');
            setTimeout(() => {
                navigate('/');
              }, 6000);
        })
        .catch(error => {
            if(error.response){
                toast.error(error.response.data.message);
            }else {
                toast.error("Unable to register");
            }
        })
    }

    return (
        <div
            className="h-screen flex items-stretch"
        >
            <img
                src={backGroundImage}
                className='flex-1 bg-cover '
            />
            <form
                className="px-32 flex flex-col justify-center items-center text-center"
            >
                <h1 className="text-5xl text-pinklight">Rocket Movies</h1>

                <p className="text-sm text-graylight">Application to keep track of everything you watched</p>

                <h2 className="text-2xl my-12">Create account</h2>

                <Input
                    placeholder="Name"
                    type="text"
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    placeholder="Email"
                    type="email"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Password"
                    type="Password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button
                    type="button"
                    title="Register"
                    onClick={handleSignUp}
                />
                <Link to="/" className="mt-32 text-pinklight">
                    Back
                </Link>
            </form>
            <ToastContainer />
        </div>
    )
}