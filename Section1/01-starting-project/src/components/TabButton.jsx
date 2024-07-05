import './css/TabButton.css'


export default function TabButton(props)
{
  return (
  <li>
    <button onClick={props.handleClick}   >
        {props.children}
    </button>
    </li> 
  ) 
}