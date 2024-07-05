import reactImage from './assets/react-core-concepts.png'
import componentsImg from './assets/components.png'


const reactDescriptions=['Fundemental','crucial','core']
function genRandomInt(max)
{
  return Math.floor(Math.random()*(max))
}


function Header()
{
  const random=genRandomInt(reactDescriptions.length)
  const value =reactDescriptions[random]
  console.log(random)
  
  // console.log('working')
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
function CoreConcept(props)
{
  return (
    <li>
      <img src={props.image}alt=""/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}
function App() {
  return (
    <div>
      <Header></Header>
      <main>
          <section id="core-concepts">
            <ul>
              <CoreConcept 
              title="Components"
              description='the core ui building blocks'
              image={componentsImg}
              />
              <CoreConcept/>
              <CoreConcept/>
              <CoreConcept/>
            </ul>
          </section>
      </main>
    </div>
  );
}

export default App;
