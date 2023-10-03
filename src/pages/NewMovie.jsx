import { FiArrowLeft } from "react-icons/fi";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Textarea } from "../components/TextArea";
import { TagItem } from "../components/TagItem";
import { Button } from "../components/Button";

export function NewMovie() {
    return (
        <div>
            <Header />
            <section className="px-32 mt-10">
                <div className="flex flex-col gap-10">
                    <header className="grid gap-6" >
                        <a href="/" className="flex items-center gap-2 text-pinklight">
                            <FiArrowLeft className="text-2xl" />
                            Back
                        </a>
                        <h1>New Movie</h1>
                    </header>
                    <div className="flex gap-10">
                        <Input placeholder="title" />
                        <Input placeholder="You rating (0 to 5)" />
                    </div>
                    <Textarea placeholder="Observations" />

                    <div className='flex items-center gap-4 bg-baseMarker p-3 rounded-lg'>
                        <TagItem
                            placeholder="React"
                        />
                        <TagItem
                            isNew
                            placeholder="New tag"
                        />
                    </div>
                    <div className="flex items-center gap-10">
                        <Button title="Delete movie" className="w-full rounded-lg h-14 px-4 bg-black text-pinklight" />
                        <Button title="Save changes" />
                    </div>

                </div>

            </section>
        </div>
    )
}