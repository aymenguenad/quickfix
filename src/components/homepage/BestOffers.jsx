import coupon from '../../assets/coupon.png'
import { useNavigate } from 'react-router-dom'
export default function BestOffers () {
    const navigate= useNavigate()

    const handleClick = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
        navigate('/location')
    }
    return (
        <div className="bestOffers">
            <div className="boImgBox">
                <img id='boImg' src={coupon} alt="" />
            </div>
            <div className="boText">
                <h1>Exclusive Offer for our new customers</h1>
                <h2>Save up to 20% on your first repair – phones, laptops, tablets, and more!</h2>
                <button onClick={handleClick} >Come visit us!</button>
            </div>
        </div>
    )
}