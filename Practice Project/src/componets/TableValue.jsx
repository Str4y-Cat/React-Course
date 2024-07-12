import {formatter} from '../util/investment'

export default function TableValue({values}){
    let {annualInvestment,interest,valueEndOfYear,year}=values
    // valueEndOfYear=Math.round(valueEndOfYear)
    // interest=Math.round(interest*100)
    console.log(values)
    const newValue=valueEndOfYear-annualInvestment*year
    return<>
        <tr>
            <td>{year}</td>
            <td>{annualInvestment}</td>
            <td>{formatter.format(interest)}</td>
            <td>{formatter.format(valueEndOfYear)}</td>
            
        </tr>
    
            {/* <p>boop</p> */}
    </>
}