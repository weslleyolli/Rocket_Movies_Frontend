import { Input } from "../Input";


export function Header() {
    return (
        <header 
            className="grid-area:header h-28 w-full border-b border-solid border-graymedium flex justify-between items-center px-32 "
        >
            <h1 className="text-2xl text-pinklight">Rocket Movies</h1>
            <div className="w-1/2">
            <Input
                
                placeholder="Search for titles"
                type="text"
            />
            </div>
            <button className="flex items-center">
                <div
                    className="flex flex-col mr-4 leading-6"
                >
                    <strong className="text-sm text-white">Weslley Oliveira</strong>
                    <a href="#" className="text-sm text-graymedium">Exit</a>
                </div>
                <img 
                    src="https://github.com/weslleyolli.png" 
                    alt="" 
                    className="w-14 h-14 rounded-full"
                />
            </button>
        </header>
    )
}