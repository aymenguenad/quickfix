import xbox from '../../assets/Untitled.png'
import { useNavigate } from 'react-router-dom'
export default function UsedVerified () {
    const navigate= useNavigate()

    const handleClick = () => {
        window.scrollTo({top: 1650, behavior: 'smooth'})
        navigate('/repair')
    }
    return (
        <div className="usedVerifiedSection">
            <div className="uvText">
                <h1>Limited Budget?</h1>
                <h2>Discover our selection of pre-owned devices, carefully verified and certified by our professionals, and backed by a 3-month warranty for your peace of mind.</h2>
                <button onClick={handleClick}>Book a session with our specialists</button>

            </div>
            <div className="uvImgBox">
                <img id='uvImg' src={xbox} alt="" />
            </div>
        </div>
    )
}