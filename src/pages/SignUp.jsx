import backGroundImage from '../assets/backgroundImage.png'

import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { FiMail, FiLock, FiUser } from "react-icons/fi"

export function SignUp() {

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
                <h1
                    className="text-5xl text-pinklight"
                >Rocket Movies
                </h1>
                <p className="text-sm text-graylight">Application to keep track of everything you watched</p>
                <h2 className="text-2xl my-12">Create account</h2>
                <Input
                    placeholder="Name"
                    type="text"
                    icon={FiUser}
                />
                <Input
                    placeholder="Email"
                    type="Password"
                    icon={FiMail}
                />
                <Input
                    placeholder="Password"
                    type="Password"
                    icon={FiLock}
                />
                <Button type="button"
                    title="Register"
                />
                <a className="mt-32 text-pinklight">
                    Back
                </a>
            </form>
        </div>
    )
}