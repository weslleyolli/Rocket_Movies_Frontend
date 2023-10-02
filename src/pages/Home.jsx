import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Movie } from "../components/Movie";

export function Home() {
    return (
        <div>
            <Header />
            <main className="px-32 my-12 mx-auto">
                <div className="flex justify-between items-center h-12 mb-10">
                    <h1 className="text-3xl">My movies</h1>
                    <Button title=" + Add movie" className='px-12 py-3 rounded-lg bg-pinklight' />
                </div>
                <div className="">
                    <Movie />
                    <Movie />
                    <Movie />

                </div>
            </main>
        </div>
    )
}