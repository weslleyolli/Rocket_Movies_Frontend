// eslint-disable-next-line react/prop-types
export function Button({title, loading = false, ...rest}) {
    return(
        <button
            className="w-full bg-pinklight text-notesBackgroundColor h-14 px-4 rounded-lg font-medium disabled:opacity-50"
            type='button'
            disabled={loading}
            {...rest}
        >
            {loading ? 'Loading...' : title}
        </button>
    )
}