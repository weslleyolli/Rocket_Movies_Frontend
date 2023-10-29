import { useNavigate } from "react-router-dom";
import { Input } from "../Input";
import { useAuth } from "../../hooks/auth";


export function Header() {
    const { signOut } = useAuth();
    const navigate = useNavigate()

    function handleSignOut(event) {
        event.stopPropagation()
        navigate("/")
        signOut()
    }
    return (
        <header
            className="grid-area:header h-28 w-full border-b-2 border-solid border-notesBackgroundColor flex justify-between items-center px-32 "
        >
            <h1 className="text-2xl text-pinklight">Rocket Movies</h1>
            <div className="w-1/2">
                <Input

                    placeholder="Search for titles"
                    type="text"
                />
            </div>
            <div className="flex items-center">
                <div
                    className="flex flex-col mr-4 leading-6"
                >
                    <a href="#" className="text-sm text-white font-bold">Weslley Oliveira</a>
                    <a href="#" onClick={handleSignOut} className="text-sm text-graymedium text-right">Exit</a>
                </div>
                <a href="/profile"><img
                    src="https://github.com/weslleyolli.png"
                    alt=""
                    className="w-14 h-14 rounded-full"
                /></a>

            </div>
        </header>
    )
}