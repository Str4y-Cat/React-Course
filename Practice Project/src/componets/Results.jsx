import {calculateInvestmentResults} from '../util/investment.js'
import TableValue from './TableValue.jsx'

export default function Results({values})
{

    console.log(values)
    const investmentValues= calculateInvestmentResults(values)
    const items=[]
    if(investmentValues.length>0){
    investmentValues.forEach((value,i)=>
    {
        
        items.push(
            <TableValue key={i} values={value}></TableValue>
        )
    })}
    console.log(investmentValues)
    // console.log(temp)
    return(
        <table className="" id="result">
            
                <th>Year</th>
                <th>Annual Investment</th>
                <th>Interest</th>
                <th>Value End Of Year</th>
            
            {items}

        </table>
    )
}