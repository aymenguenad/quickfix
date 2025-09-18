import reliability from '../../assets/shield.png'
import speedIcon from '../../assets/quick.png'
import quality from '../../assets/badge.png'


export default function WhyChooseUs () {
    return (
        <div className="whyChooseUs">
            <div className="wcuText">
                <h1>Why Customers Trust Quick Fix?</h1>
                <h3>At Quick Fix, we’ve built our reputation on reliability, speed, and quality. 
                    Every repair is handled by certified technicians who know your device inside 
                    and out. With fast turnaround times and a warranty on every repair, you can 
                    count on us to get your device working like new—without the stress.</h3>
            </div>
            <div className="wcuIcons">
                <div className='icon'>
                    <img src={speedIcon} alt="speed" />
                    <h2>Speed</h2>
                </div>
                <div className='icon'>
                    <img src={reliability} alt="reliability" />
                    <h2>Reliability</h2>
                </div>
                <div className='icon'>
                    <img src={quality} alt="quality" />
                    <h2>Quality</h2>
                </div>
            </div>
        </div>
    )
}