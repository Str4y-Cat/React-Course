import { useState } from 'react'
import TabButton from './TabButton.jsx'
import Section from './Section.jsx'
import {EXAMPLES } from '../data.js'

export default function Examples()
{
    const [selectedTopic,setSelectedTopic]=useState("")

    function handleClick(selectedButton)
    {

        setSelectedTopic(EXAMPLES[selectedButton])
        // console.log(selectedButton)
        // switch(selectedButton)
    }
    // console.log(selectedTopic)

    return(

        <Section title="Examples" id="examples">
            <menu>
                <TabButton isSelected={selectedTopic.title==='Components'}  onClick={()=>handleClick('components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic.title==='JSX'}         onClick={()=>handleClick('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic.title==='Props'}       onClick={()=>handleClick('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic.title==='State'}       onClick={()=>handleClick('state')}>State</TabButton>
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
              
        </Section>

    )
}