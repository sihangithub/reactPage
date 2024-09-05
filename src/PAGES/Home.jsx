import Topic from '../COMPONENT/HomeTopic'
import './Home.css'
import profile from '../assets/profile.jpeg'
export default function Home(){

    return (
        <div className='home'>
            <h1 className='main-header'>HOMEPAGE</h1>
            <div className='profile'>
                <img src={profile}></img>
            </div>
            <p className='intro'>Hi I am Han, a self-taught developer</p>
            <Topic />
        </div>
    )
}