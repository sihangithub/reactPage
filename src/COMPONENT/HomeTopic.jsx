import './HomeTopic.css'
import sunflower from '../assets/sunflower.jpeg'

export default function HomeTopic(props){
    var numberOfTopics = props.numberOfTopics || 3
    
    const createTopics = (numberOfTopics) => {
        const topics = []
        for (var i = 0; i < numberOfTopics; i++){
            topics.push(
                <div className="topic">
                    <h2>TOPIC</h2>
                    <img src={sunflower}></img>
                    <p>DESCRIPTION......</p>
                </div>
            )
        }
        return (
            topics
        )
    }
    return (
        <div>
            <div className="topic-wrapper">
                { createTopics(numberOfTopics) }
            </div>
        </div>
    )
}