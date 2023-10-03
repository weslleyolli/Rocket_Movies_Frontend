import { FiArrowLeft, FiStar, FiClock } from "react-icons/fi";
import { Header } from "../components/Header";
import { Tag } from "../components/Tag";

export function Details() {
    return (
        <div >
            <Header />
            <main className="grid gap-10 mt-10 px-32">
                <header className="grid gap-5">
                    <a href="/" className="flex items-center gap-2 text-pinklight">
                        <FiArrowLeft className="text-2xl" />
                        Back
                    </a>
                    <div className="flex items-center gap-5">
                        <h1 className="font-medium text-4xl">Interstellar</h1>
                        <div className="flex gap-1">
                            <FiStar color="#FF859B" />
                            <FiStar color="#FF859B" />
                            <FiStar color="#FF859B" />
                            <FiStar color="#FF859B" />
                            <FiStar />
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src="https://github.com/weslleyolli.png" className="h-4 w-4 rounded-full" alt="" />
                        <p>By Weslley Oliveira</p>
                        <FiClock />
                        <p>23/05/22 às 08:00</p>
                    </div>
                </header>
                <article>
                    <Tag />
                    <Tag />
                    <Tag />
                </article>
                <footer>
                    <p className="text-graymedium">follows the story of a team of astronauts who travel through a wormhole in space in order to ensure the survival of humanity. Almost three hours long, the feature film stars Matthew McConaughey and Anne Hathaway, and features a script co-written by Jonathan Nolan.

                        On the rise due to the release of his next feature, Oppenheimer, Christopher Nolan has been increasingly attracting the attention of the audience due to his well-reviewed catalogue. With that in mind, if you like films with space travel, check out more information about Interstellar below, such as the plot, cast and repercussions.
                    </p>
                </footer>
            </main>
        </div>
    )
}