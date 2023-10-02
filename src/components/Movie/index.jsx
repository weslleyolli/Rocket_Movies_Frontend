import { FiStar } from "react-icons/fi"
import { Tag } from "../Tag"
export function Movie() {
    return (
        <button className="w-full p-8 mb-6 mr-3 flex flex-col gap-4 bg-pinklight opacity-5 rounded-3xl ">
            <div className="flex flex-col">
                <article>
                    <h1 className="flex-1 text-2xl mb-3">InterEstellar</h1>
                </article>
                <div className="flex">
                    <FiStar color="#FF859B" />
                    <FiStar color="#FF859B" />
                    <FiStar color="#FF859B" />
                    <FiStar color="#FF859B" />
                    <FiStar />
                </div>
            </div>
            <p className="text-justify text-graymedium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Neque possimus dolorum temporibus, eveniet quae aut,
                rem quia sint hic delectus repellendus blanditiis consequatur quos esse fugit,
                accusantium nulla repellat numquam.
            </p>
            <footer className="w-full flex">
                <Tag />
                <Tag />
                <Tag />
            </footer>
        </button>
    )
}