import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function Profile() {
    return (
        <div className="flex flex-col items-center"> 
            <header className=" h-36 w-full bg-pinklight bg-opacity-5 flex items-center px-32">
                <a href="/" className="flex items-center gap-2 text-pinklight">
                    <FiArrowLeft className="text-2xl"/>
                    Back
                </a>
            </header>

            <form className="w-[340px]  ">
                <div className="relative mt-[-70px] mb-32 flex items-center justify-center">
                    <img
                        src="https://github.com/weslleyolli.png"
                        alt="User photo"
                        className="h-36 w-36 rounded-full"
                    />
                    <label htmlFor="avatar" className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center absolute top-28 right-24 cursor-pointer">
                        <FiCamera />

                        <input
                            className="hidden"
                            id="avatar"
                            type="file"
                        />
                    </label>
                </div>
                <Input
                    placeholder="Name"
                    type="text"
                    icon={FiUser}
                />
                <Input
                    placeholder="Email"
                    type="text"
                    icon={FiMail}
                />
                <Input
                    placeholder="Current password"
                    type="password"
                    icon={FiLock}
                    className="bg-transparent"
                />
                <Input
                    placeholder="New password"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Save" />
            </form>
        </div>
    )
}