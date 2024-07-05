import componentsImg from './assets/components.png'
import { CORE_CONCEPTS } from './data'
import Header from './components/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'
import TabButton from './components/TabButton.jsx'


function App() {
  return (
    <div>
      <Header></Header>
      <main>
          <section id="core-concepts">
            <ul>
              <CoreConcept 
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
              />
              <CoreConcept 
              {...CORE_CONCEPTS[1]}

              />
              <CoreConcept 
              {...CORE_CONCEPTS[2]}

              />
              <CoreConcept 
              {...CORE_CONCEPTS[3]}

              />
            </ul>
          </section>
          <section id="examples">
            <menu>
                <TabButton>Components</TabButton>
                <TabButton>Components</TabButton>
                <TabButton>Components</TabButton>
                <TabButton>Components</TabButton>
            </menu>
          </section>
      </main>
    </div>
  );
}

export default App;
