type tipProps = {
    setTip: React.Dispatch<React.SetStateAction<number>>
    tip:number
}




const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]


const TipPercentageForm = ( {setTip, tip} : tipProps) => {
    return (
        <div>
            <h3>Propina</h3>
            <form action="">
                {tipOptions.map((item) => (
                    <div key={item.id} className="flex gap-2">
                        <label>{item.label}</label>
                        <input 
                            type="radio"  
                            name="tip"  
                            value={item.value} 
                            id={item.id} 
                            onChange={e => setTip(+e.target.value)}
                            checked={item.value === tip}  
                        />
                    </div>
                ))}
                <div>

                </div>

            </form>
        </div>
    )
}

export default TipPercentageForm