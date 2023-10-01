import backGroundImage from '../assets/backgroundImage.png'
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { FiMail, FiLock } from "react-icons/fi"

export function SignIn() {
  return (
    <div
      className="h-screen flex items-stretch"
    >
      <form
        className="px-32 flex flex-col justify-center items-center text-center"
      >
        <h1 
          className="text-5xl text-pinklight"
        >Rocket Movies
        </h1>
        <p className="text-sm text-graylight">Application to keep track of everything you watched</p>
        <h2 className="text-2xl my-12">Make you login</h2>
        <Input 
          placeholder="Email"
          type="text"
          icon={FiMail}
        />
        <Input 
          placeholder="Password"
          type="Password"
          icon={FiLock}
        />
        <Button type="button"
          title="Enter"
        />
        <a 
          href="#"
          className="mt-32 text-pinklight"
        >Create Account</a>
      </form>
      <img 
        src={backGroundImage}
        className='flex-1 bg-cover '
      /> 
    </div>
  )
}

