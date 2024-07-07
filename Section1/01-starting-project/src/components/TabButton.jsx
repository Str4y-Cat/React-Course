import './css/TabButton.css'


export default function TabButton(props)
{
  return (
  <li>
    <button className={props.isSelected?'active':''} onClick={props.handleClick}   >
        {props.children}
    </button>
    </li> 
  ) 
}