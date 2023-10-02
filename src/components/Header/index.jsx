import { Input } from "../Input";


export function Header() {
    function sair(event) {
         event.stopPropagation()
        console.log("sair")
    }
    function profile() {
        console.log("profile")
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
            <div className="flex items-center" onClick={profile}>
                <div
                    className="flex flex-col mr-4 leading-6"
                >
                    <a href="#" onClick={profile} className="text-sm text-white font-bold">Weslley Oliveira</a>
                    <a href="#" onClick={sair} className="text-sm text-graymedium">Exit</a>
                </div>
                <a href="#" onClick={profile}><img
                    src="https://github.com/weslleyolli.png"
                    alt=""
                    className="w-14 h-14 rounded-full"
                /></a>

            </div>
        </header>
    )
}