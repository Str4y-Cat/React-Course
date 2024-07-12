

export default function TableValue({values}){
    let {annualInvestment,interest,valueEndOfYear,year}=values
    // valueEndOfYear=Math.round(valueEndOfYear)
    // interest=Math.round(interest*100)
    console.log(values)

    return<>
        <tr>
            <td>{year}</td>
            <td>{annualInvestment}</td>
            <td>{interest}</td>
            <td>{valueEndOfYear}</td>
            
        </tr>
    
            {/* <p>boop</p> */}
    </>
}