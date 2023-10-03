import { FiPlus, FiX } from "react-icons/fi"

// eslint-disable-next-line react/prop-types
export function TagItem({ isNew, value, onClick, ...rest }) {
    return (
        <div className={` border-graymedium ${isNew ? 'bg-transparent border-dashed border-2 text-graymedium ' : 'bg-inputColor border-none text-white'}   border rounded-xl pr-4`}>
            <input
                className=" flex-1 h-14 p-3 bg-transparent text-white placeholder-gray-300"
                type="text"
                value={value}
                readOnly={!isNew}
                {...rest}
            />

            <button
                type="button"
                onClick={onClick}
                className={`ml-2 text-pinklight`}
            >
                {isNew ? <FiPlus /> : <FiX />}
            </button>
        </div>
    )
}