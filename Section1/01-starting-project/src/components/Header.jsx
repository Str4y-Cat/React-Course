import reactImage from "../assets/react-core-concepts.png"

const reactDescriptions=['Fundemental','crucial','core']
function genRandomInt(max)
{
  return Math.floor(Math.random()*(max))
}



export default function Header()
{
  const random=genRandomInt(reactDescriptions.length)
  const value =reactDescriptions[random]
//   console.log(random)
//   console.log(value)
//   console.log(random)

  
//   console.log('working')
  return(
      <header>
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {value} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}