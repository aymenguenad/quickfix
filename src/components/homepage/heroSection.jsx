import phone from '../../assets/469-4699790_phone-with-new-screen-and-phone-with-cracked.png'
import { useNavigate } from 'react-router-dom'
export default function HeroSection () {
    const navigate = useNavigate()

    return (
        <div className="heroSection">
            <div className="hsText">
                <h3>Broken phone, laptop, or console? </h3>
                <h1>Get it fixed today — fast, reliable, and affordable.</h1>
                <h2>Book your free diagnosis now!</h2>
                <button onClick={()=>{navigate('/location')}} >Get Free Diagnosis</button>
            </div>
            <div className="hsImgBox">
                <img id='hsImg' src={phone} alt="phone" />
            </div>
        </div>
    )
}