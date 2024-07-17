export default function Button({children, onClick}){
    return (
        <button onClick={onClick} className="bg-zinc-800 text-slate-100 rounded-sm my-3 px-3 py-2">
            {children}
        </button>
    )
}