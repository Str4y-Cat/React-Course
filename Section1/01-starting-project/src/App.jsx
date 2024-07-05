import { useState } from 'react'

import componentsImg from './assets/components.png'
import { CORE_CONCEPTS,EXAMPLES } from './data'
import Header from './components/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'
import TabButton from './components/TabButton.jsx'


function App() {
  const [selectedTopic,setSelectedTopic]=useState("")

  function handleClick(selectedButton)
  {

    setSelectedTopic(EXAMPLES[selectedButton])
    // console.log(selectedButton)
      // switch(selectedButton)
  }
  
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
                <TabButton handleClick={()=>handleClick('components')}>Components</TabButton>
                <TabButton handleClick={()=>handleClick('jsx')}>JSX</TabButton>
                <TabButton handleClick={()=>handleClick('props')}>Props</TabButton>
                <TabButton handleClick={()=>handleClick('state')}>State</TabButton>
            </menu>
            <div  id="tab-content">
              <h3>{selectedTopic.title}</h3>
              <p>{selectedTopic.description}</p>
              <pre>
                <code>
                {selectedTopic.code}
                </code>
              </pre>

            </div>
          </section>
      </main>
    </div>
  );
}

export default App;
