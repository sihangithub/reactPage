import './Services.css'
export default function Services(props){
    
    const createSchedule = () => {
        const week = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
        const row = 6
        const col = 7
        const content = []

        const weekRow = []
        for (var i = 0; i < week.length; i++){
            weekRow.push(<div className='unit'>{ week[i] }</div>)
        }
        content.push(<div className='row'>{ weekRow }</div>)
        for (var i = 0; i < row; i++){
            const createRow = []
            for (var j = 0; j < col; j++){
                createRow.push(<div className="unit"></div>)
            }
            content.push(<div className='row'>{ createRow }</div>)
        }
        return (
            <div className='content-wrapper'>{ content }</div>
        )
    }
    
    return (
        <div className='services'>
            { createSchedule() }
        </div>
    )
}