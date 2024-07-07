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
  console.log(selectedTopic)
  return (
    <div>
      <Header></Header>
      <main>
          <section id="core-concepts">
            <ul>
              {CORE_CONCEPTS.map((conceptItem)=>
                (
                  <CoreConcept {...conceptItem}/>
                ))}
                
              {/* <CoreConcept 
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

              /> */}
            </ul>
          </section>
          <section id="examples">
            <menu>
                <TabButton isSelected={selectedTopic.title==='Components'} handleClick={()=>handleClick('components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic.title==='JSX'} handleClick={()=>handleClick('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic.title==='Props'} handleClick={()=>handleClick('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic.title==='State'} handleClick={()=>handleClick('state')}>State</TabButton>
            </menu>
            
              {!selectedTopic?
              <p>Please select a topic.</p>
              :
              <div  id="tab-content">
                <h3>{selectedTopic.title}</h3>
                <p>{selectedTopic.description}</p>
                <pre>
                  <code>
                  {selectedTopic.code}
                  </code>
                </pre>

              </div>
              }
              
          </section>
      </main>
    </div>
  );
}

export default App;
