import React from "react"

import Header from "./componets/Header"
import UserInput from "./componets/UserInputs"
import Results from "./componets/Results"
import { int } from "three/examples/jsm/nodes/Nodes.js"
const INITIAL_INVESTMENT_VALUES={
  initialInvestment:0,
  annualInvestment:0,
  expectedReturn:0,
  duration:0,
}





function App() {
  const [investmentValues,setInvestmentValues]=React.useState(INITIAL_INVESTMENT_VALUES)
  //  console.log(investmentValues)
  function updateValues(key,value)
  {
    setInvestmentValues((cur)=>
    {
      const copy= {...cur}
      copy[key]=Number(value)
      return copy
    })
  }

  return (
    <>
      <Header/>
      <UserInput values={investmentValues} updateValues={updateValues}/>
      <Results values={investmentValues}></Results>
    </>
    
    //input
    //output
  )
}

export default App
