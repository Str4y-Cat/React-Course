import React from "react"


export default function Player({initialName,symbol,isSelected,onChangeName})
{
    const [updatedName,setName]=React.useState(initialName)
    const [isEditing,setIsEditing]=React.useState(false)
    function handleClick()
    {
      setIsEditing(!isEditing)
      if(isEditing)
      {onChangeName(symbol,updatedName)}
    }
    function handleChange(e){
      setName(e.target.value)
    }

    const playerName= !isEditing? <span className='player-name'>{updatedName}</span>:<input type="text" required value={updatedName} onChange={handleChange}/>

    return <li className={isSelected?'active':""}>
    <span className="player">
     {playerName}
      <span className='player-symbol'>{symbol}</span>
    </span>
    <button onClick={handleClick}>{isEditing?"Save":"Edit"}</button>
  </li>
}