import { useState } from 'react';
import { FiMail, FiLock } from "react-icons/fi"

import { Link } from 'react-router-dom';
import backGroundImage from '../assets/backgroundImage.png'

import { useAuth } from '../hooks/auth';

import { Input } from "../components/Input";
import { Button } from "../components/Button";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }



  return (
    <div className="h-screen flex items-stretch">
      <form className="px-32 flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl text-pinklight">Rocket Movies</h1>
        <p className="text-sm text-graylight">Application to keep track of everything you watched</p>

        <h2 className="text-2xl my-12">Make you login</h2>
        <Input
          placeholder="Email"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="Password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />
        <Button type="button"
          title="Enter"
          onClick={handleSignIn}
        />
        <Link
          to="/register"
          className="mt-32 text-pinklight"
        >Create Account</Link>
      </form>
      <img
        src={backGroundImage}
        className='flex-1 bg-cover '
      />
    </div>
  )
}