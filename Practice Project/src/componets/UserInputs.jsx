import Input from "./Input"

export default function UserInput({values, updateValues})
{
    // console.log('user inputs')
    
    const {initialInvestment,annualInvestment,expectedReturn,duration}=values
    return <div id="user-input">

        <div className="input-group">
            <Input value={initialInvestment} name={'initialInvestment'} updateValues={updateValues}></Input>
            <Input value={annualInvestment} name={'annualInvestment'} updateValues={updateValues}></Input>
            {/* <Input></Input> */}
        </div>

        <div className="input-group">
            <Input value={duration} name={'duration'} updateValues={updateValues}></Input>
            <Input value={expectedReturn} name={'expectedReturn'} updateValues={updateValues}></Input>

        </div>
        
    </div>

}