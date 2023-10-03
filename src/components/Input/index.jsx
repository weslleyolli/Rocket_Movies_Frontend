// eslint-disable-next-line react/prop-types
export function Input({ icon: Icon, ...rest }) {
    return (
        <div className="w-full h-14 flex items-center bg-inputColor text-graymedium mb-2 rounded-lg">
            {Icon && <Icon size={20} className="ml-4" />}
            <input {...rest} className="h-14 w-full p-3 bg-transparent text-white placeholder:text-graymedium" />
        </div>
    )
}