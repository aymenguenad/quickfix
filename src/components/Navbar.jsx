import logo from '../assets/myLogo.png'
import { useNavigate } from 'react-router-dom'

export default function Navbar () {
    const location= window.location.pathname

    const navigate = useNavigate()
    return (
        <>
            <div onClick={()=>{navigate('/quickfix/')}} className='logoContainer'>
                <img id='logo' src={logo} alt="logo" />
            </div>
            <div className='navs'>
                <button style={{backgroundColor: location== '/quickfix/repair' &&' #FF851B', color: location== '/quickfix/repair' && 'white'}} onClick={()=>{navigate('/quickfix/repair')}}>Repair</button>
                <button style={{backgroundColor: location== '/quickfix/location' &&' #FF851B', color: location== '/quickfix/location' && 'white'}} onClick={()=>{navigate('/quickfix/location')}} >Find our location</button>
            </div>
        </>
    )
}