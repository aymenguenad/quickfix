import expert from '../../assets/electronic-technician-holds-two-identical-smartphones-comparison-one-hand-broken-another-new.jpg'
import { useNavigate } from 'react-router-dom'

export default function HeroSection(){
    const navigate = useNavigate()

    const handleScrollBooking = () => {
        const section = document.getElementById("booking");
        if (section) {
        const yOffset = -90; // espace pour “encadrer” la vue
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
        }
    }
    return (
        <div className="rpHeroSection">
            <div className='rpText'>
                <h1>Experts for every device!</h1>
                <h2>At Quick Fix, each device has its dedicated expert, ensuring top-quality repairs every time.</h2>
                <h2>You can either: </h2>
                <div className='rpButtons'>
                    <button onClick={handleScrollBooking}>Schedule a Repair</button>
                    <button onClick={()=>{navigate('/quickfix/location')}} >Visit Us During Working Hours</button>
                </div>
            </div>
            <img id='rphsImg' src={expert} alt="expert" />
        </div>
    )
}