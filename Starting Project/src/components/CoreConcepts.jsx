import { CORE_CONCEPTS } from '../data.js'

import CoreConcept from './CoreConcept.jsx'

export default function CoreConcepts() 
{
    return(
        <section id="core-concepts">
            <ul>
              {CORE_CONCEPTS.map((conceptItem)=>
                (
                  <CoreConcept {...conceptItem}/>
                ))}

            </ul>
          </section>



    )
}