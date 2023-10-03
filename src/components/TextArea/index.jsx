// eslint-disable-next-line react/prop-types
export function Textarea({value, ...rest}) {
    return (
        <textarea {...rest} className="w-full h-36 bg-inputColor text-white border-none resize-none rounded-xl p-4 placeholder:text-graymedium">
            {value}
        </textarea>
    )
}