

export default function Input({value,name, updateValues})
{
    // console.log(value)
    return(
        <div >
            <label>{name}</label>
            <input type="number" required value={value} onChange={(e)=>updateValues(name,e.target.value)}></input>
        </div>
    )
}